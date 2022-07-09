import {Basket} from "../../models/basket";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import agent from "../../API/Agent";

interface BasketState{
    basket:Basket | null;
    status:string;
}
const initialState: BasketState ={
    basket:null,
    status:'idle'
}

export const addBasketItemAsync = createAsyncThunk<Basket,{productId:string,quantity?:number}>(
    'basket/addBasketItemAsync',
    async ({productId,quantity = 1})=>{
        try {
            return await agent.Basket.addItem(productId,quantity)
        }catch (error){
            console.log(error)
        }
    });
export const removeBasketItemAsync = createAsyncThunk<void,
    {productId: string, quantity: number, name?: string}>(
    'basket/removeBasketItemAsync',
    async ({productId, quantity}, thunkAPI) => {
        try {
            await agent.Basket.removeItem(productId, quantity);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
);
export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        setBasket:(state,action)=>{
            state.basket = action.payload
            console.log({
                state,
                action
            })
        },
        removeItem:(state,action)=>{
            const {productId, quantity} = action.payload;
            const itemIndex = state.basket?.items.findIndex(i=>i.productId === productId)
            if(itemIndex === -1 || itemIndex === undefined) return;
            state.basket!.items[itemIndex].quantity -=quantity;
            if(state.basket?.items[itemIndex].quantity===0)
                state.basket.items.splice(itemIndex,1);
        },
    },
    extraReducers:(builder =>{
        builder.addCase(addBasketItemAsync.pending, (state, action) => {
            state.status = 'pendingAddItem' + action.meta.arg.productId;
        });
        builder.addCase(addBasketItemAsync.fulfilled, (state, action) => {
            state.basket = action.payload;
            state.status = 'idle';
        });
        builder.addCase(addBasketItemAsync.rejected, (state, action) => {
            console.log(action.payload);
            state.status = 'idle';
        });
        builder.addCase(removeBasketItemAsync.pending, (state, action) => {
            state.status = 'pendingRemoveItem' + action.meta.arg.productId + action.meta.arg.name;
        });
        builder.addCase(removeBasketItemAsync.fulfilled, (state, action) => {
            const {productId, quantity} = action.meta.arg;
            const itemIndex = state.basket?.items.findIndex(i => i.productId === productId);
            if (itemIndex === -1 || itemIndex === undefined) return;
            state.basket!.items[itemIndex].quantity -= quantity;
            if (state.basket?.items[itemIndex].quantity === 0)
                state.basket.items.splice(itemIndex, 1);
            state.status = 'idle';
        });
        builder.addCase(removeBasketItemAsync.rejected, (state, action) => {
            console.log(action.payload);
            state.status = 'idle';
        })
    })
})
export const {setBasket} = basketSlice.actions;
