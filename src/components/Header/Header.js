import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

const pages = ['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources']; // Pages 

const Header = () => {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: '#fbfaff', padding: '2px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex' }}>

                    {/* Logo and Brand Name */}

                    <div style={{ display: "flex", direction: 'row', alignItems: 'center' }}>
                        <CottageRoundedIcon sx={{ display: { md: 'flex' }, color: '#7066ec', mr: 0.8 }} fontSize='small' />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2.5,
                                mt: 0.5,
                                display: { md: 'flex' },
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '16px',
                                color: '#221e41',
                                letterSpacing: '-0.01rem',
                                textDecoration: 'none',
                            }}
                        >
                            Estatery
                        </Typography>
                    </div>

                    {/* Display the list of pages  */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex', }, ml: 2 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    mx: 1,
                                    mt: 0.3,
                                    color: '#221e41',
                                    display: 'block',
                                    textTransform: 'none',
                                    fontFamily: 'Montserrat',
                                    letterSpacing: '-0.01rem',
                                    fontWeight: 600,
                                    fontSize: '12px',

                                    '&:hover': {
                                        backgroundColor: '#e9e7f8',
                                        borderColor: '#7066ec',
                                        color: '#7066ec',
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Login, Signup and Menu Button  */}

                    <Box sx={{ flexGrow: 0, ml: 2, marginLeft: 'auto' }}>
                        <Stack spacing={2} direction="row">

                            <Button variant="outlined" sx={{
                                boxShadow: 'none',
                                textTransform: 'none',
                                backgroundColor: '#fbfaff',
                                borderRadius: '5px',
                                borderColor: '#7066ec',

                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '-0.01rem',
                                color: '#7066ec',

                                '&:hover': {
                                    backgroundColor: '#e9e7f8',
                                    borderColor: '#7066ec',
                                    boxShadow: 'none',
                                },

                                '&:active': {
                                    boxShadow: 'none',
                                    color: '#7066ec',
                                },

                                display: { xs: 'none', md: 'flex', lg: 'flex' }
                            }}>Login</Button>

                            <Button variant="contained" sx={{
                                boxShadow: 'none',
                                textTransform: 'none',
                                backgroundColor: '#7066ec',
                                borderRadius: '5px',

                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '-0.01rem',
                                color: '#fbfaff',

                                '&:hover': {
                                    backgroundColor: '#7066ec',
                                    borderColor: '#7066ec',
                                    boxShadow: 'none',
                                },

                                display: { xs: 'none', md: 'none', lg: 'flex' }

                            }}>Sign Up</Button>

                            <IconButton sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, color: '#7066ec' }}><MenuIcon /></IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Header