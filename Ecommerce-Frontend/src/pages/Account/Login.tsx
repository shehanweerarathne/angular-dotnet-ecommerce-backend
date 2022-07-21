import React from 'react';
import {Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useForm, Resolver, FieldValues} from 'react-hook-form';
import agent from "../../API/Agent";
import {LoadingButton} from "@material-ui/lab";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/configureStore";
import {signInUser} from "./accountSlice";
import axios from "axios";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState:{isSubmitting,errors,isValid}} = useForm({
        mode:'all'
    })
    const submitForm = async (data:FieldValues) => {
        try {
            await dispatch(signInUser(data));
            navigate('/catalog')
        }catch (e) {
            console.error(e);
        }


        // await dispatch(signInUser(data));
        // let token: any;
        // // @ts-ignore
        // token = JSON.parse(localStorage.getItem('user')).token;
        // console.log(token)
        // if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // navigate('/catalog')
    }

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            {...register('username',{required:'Username is required'})}
                            error={!!errors.username}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register('password',{required:'Password is required'})}
                            error={!!errors.password}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <LoadingButton
                            disabled={!isValid}
                            loading={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
};

export default Login;
