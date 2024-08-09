import { auth } from '@/app/firebase/config'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';


const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSignIn = async () => {
        try {
        await signInWithGoogle();
        } catch (error) {
        console.error('Error signing in with Google:', error);
        }
    };

    if (loading) {
        return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Box>
        );
    }

    if (user) {
        return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <p>Welcome, {user.user.displayName}</p>
            <img src={user.user.photoURL} alt="Profile" />
        </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Button
            variant="contained"
            color="primary"
            onClick={handleSignIn}
            style={{ marginBottom: '10px' }}
            endIcon={<GoogleIcon />}
        >
            Sign In with 
        </Button>
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        </Box>
    );
};

export default GoogleSignIn;
