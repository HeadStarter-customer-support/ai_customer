'use client'
import { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Stack } from '@mui/material';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth)
    const router = useRouter()



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Handle sign up logic here
            const res = await createUserWithEmailAndPassword(email, password)

            if (loading) {
                return <p>Loading...</p>;
            }

            console.log(res);
            
            sessionStorage.setItem('user', true)
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Email:', email);
            console.log('Password:', password);
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            router.push('/')

        } catch (err) {
            console.error(err)
        }
        
    };

    const signInPage = () => {
        router.push('/sign-in')
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
                backgroundColor: 'black'
            }}
        >
            <Typography component="h1" variant="h5" sx={{ color: '#fff' }}>
            Sign Up
            </Typography>
            
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="given-name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                id="lasttname"
                label="Last Name"
                name="flastname"
                autoComplete="family-name"
                autoFocus
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
            <Box component="form" onSubmit={handleSubmit} >
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
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                Sign Up
            </Button>
            <Button 
                fullWidth 
                variant='text'
                onClick={() => signInPage()}
            >
                Sign in
            </Button>
            </Box>
        </Box>
        </Container>
    );
};

export default SignUp;
