import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { auth } from '@/app/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import { useRouter } from "next/navigation";


export default function MenuAppBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter()

    useEffect(() => {
        if (!user ) {
            return router.push('/sign-in')
        }
    }, [user, router]);

    const handleChange = (event) => {
        setIsAuthenticated(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = async () => {
        await auth.signOut();
        router.push('/sign-in')
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isAuthenticated}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={isAuthenticated ? 'Logout' : 'Login'}
                />
            </FormGroup> */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Menu
                    </Typography>
                    {isAuthenticated && (
                        <div>
                            <Stack direction={'row'} alignItems={'center'} gap={2} >
                            <p>Signed in as: {user?.displayName}</p>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                {user?.photoURL ? (
                                    <img alt='Profile picture' src={user.photoURL} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid white' }} />
                                ) : (
                                    <AccountCircle />
                                )}      
                            </IconButton>
                            </Stack>
                            
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}