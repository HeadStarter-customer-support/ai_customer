'use client'

import { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(email, password)
            sessionStorage.setItem('user', true)
            console.log('Email:', email);
            console.log('Password:', password);
            setEmail('')
            setPassword('')
            router.push('/')
        } catch (err) {
            console.error(err)
        }
    };

    const signUpPage = () => {
        router.push('/sign-up')
    }

    return (
        <Container maxWidth="xs">
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#1a73e8', color: '#fff' }}
            >
                Sign In
            </Button>
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
