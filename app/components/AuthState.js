import { auth } from '@/app/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const AuthState = () => {
    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSignOut = async () => {
        await auth.signOut();
        router.push('/sign-in')
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (user) {
        return (
        <div>
            <p>Signed in as: {user.displayName}</p>
            <img src={user.photoURL} alt="Profile" />
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Sign Out
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Logout"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to logout?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleSignOut} color="primary" autoFocus>
                    Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }

    return <p>No user signed in</p>;
};

export default AuthState;
