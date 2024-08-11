'use client'
import { useState, createContext, useContext } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { Backdrop, CircularProgress } from '@mui/material'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import GoogleSignIn from '../components/GoogleSignIn'
import bgImage from '../images/headstarter_bg.jpeg'


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()
    const AuthContext = createContext(null);


    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(email, password)
            sessionStorage.setItem('user', true)
            // console.log('Email:', email);
            // console.log('Password:', password);
            setEmail('')
            setPassword('')

            if (loading) {
                return <p>Loading...</p>;
            }

            if (user) {
            console.log(email);
            console.log(password);                
            }

            router.push('/')

        } catch (err) {
            console.error(err)
        }
    };



    const signUpPage = () => {
        router.push('/sign-up')
    }

    return (
        <Container maxWidth="xs" >
        <Box 
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
            p: 3,
            backgroundColor: '#333',
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'black'
            }}
        >
            <Typography component="h1" variant="h5" sx={{ color: '#fff' }}>
            Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                input: { color: '#fff' },
                label: { color: '#bbb' },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: '#555',
                    },
                    '&:hover fieldset': {
                    borderColor: '#777',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#888',
                    },
                },
                }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                input: { color: '#fff' },
                label: { color: '#bbb' },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: '#555',
                    },
                    '&:hover fieldset': {
                    borderColor: '#777',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#888',
                    },
                },
                }}
            />
            <GoogleSignIn />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#1a73e8', color: '#fff' }}
                onClick={handleOpen}
            >
                Sign In
            </Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Button 
                fullWidth 
                variant='text'
                onClick={() => signUpPage()}
            >
                Sign up
            </Button>
            </Box>
        </Box>
        </Container>
    );
};

export default SignIn;
