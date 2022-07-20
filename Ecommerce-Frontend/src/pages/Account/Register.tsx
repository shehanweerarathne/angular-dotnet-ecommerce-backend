import React, {useState} from 'react';
import {
    Alert, AlertTitle,
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link, List, ListItem, ListItemText,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useForm, Resolver, FieldValues} from 'react-hook-form';
import agent from "../../API/Agent";
import {LoadingButton} from "@material-ui/lab";
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/configureStore";
import {signInUser} from "./accountSlice";
import axios from "axios";
import {TextField} from "@mui/material";
import {toast} from "react-toastify";


const Register = () => {
    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState([]);
    const {register,setError,handleSubmit,formState:{isSubmitting,errors,isValid}} = useForm({
        mode:'all'
    });
    // const handleApiErrors = (errors:any) => {
    //     if(errors){
    //         errors.forEach((error:string)=>{
    //             if(error.includes('Password')){
    //                 setError('password',{message:error})
    //             }else if(error.includes('Email')){
    //                 setError('email',{message:error})
    //             }else if(error.includes('Username')){
    //                 setError('username',{message:error})
    //             }
    //         });
    //     }
    // }


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
                    Register
                </Typography>
                <Box component="form"
                     onSubmit={handleSubmit((data)=> {
                         agent.Account.register(data)
                             .then(()=>{
                                 toast.success('Registration successful - you can now login');
                                 navigate('/login');
                             })
                             .catch(errors => setValidationErrors(errors));
                     })} noValidate sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        autoComplete="email"
                        autoFocus
                        {...register('email',{
                            required:'Email is required',
                            pattern: {
                                value: /^\w+[\w-.]*@\w+((-\w+)|(\w*)).[a-z]{2,3}$/,
                                message: 'Not a valid email address'
                            }
                        })}
                        error={!!errors.username}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        autoComplete="email"

                        {...register('username',{required:'Username is required'})}
                        error={!!errors.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register('password',{
                            required:'Password is required',
                            pattern:{
                                value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                                message: 'Password is not complex enough'
                            }
                        })}
                        error={!!errors.password}

                    />
                    {validationErrors.length > 0 &&
                        <Alert severity={'error'}>
                            <AlertTitle>Validation Errors</AlertTitle>
                            <List>
                                {validationErrors.map(error => (
                                    <ListItem key={error}>
                                        <ListItemText>{error}</ListItemText>
                                    </ListItem>
                                    ))}
                            </List>
                        </Alert>
                    }
                    <LoadingButton
                        disabled={!isValid}
                        loading={isSubmitting}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <NavLink to={'/login'}>
                                {"Already have an account? Sign In"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
