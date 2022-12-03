import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import Stack from '@mui/material/Stack';

const pages = ['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources'];

const Header = () => {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: '#fbfaff', padding: '6px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div style={{ display: "flex", direction: 'row', alignItems: 'center' }}>
                        <CottageRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#7066ec', mr: 0.8 }} fontSize='medium' />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2.5,
                                mt: 0.5,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                color: '#221e41',
                                letterSpacing: '0.01rem',
                                textDecoration: 'none',
                            }}
                        >
                            Estatery
                        </Typography>
                    </div>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, ml: 3 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    mx: 1.25,
                                    mt: 0.4,
                                    color: '#221e41',
                                    display: 'block',
                                    textTransform: 'none',
                                    fontFamily: 'Montserrat',
                                    letterSpacing: '-0.01rem',
                                    fontWeight: 600,
                                    fontSize: '14px',

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

                    <Box sx={{ flexGrow: 0, ml: 2 }}>
                        <Stack spacing={2} direction="row">

                            <Button variant="outlined" sx={{
                                boxShadow: 'none',
                                textTransform: 'none',
                                backgroundColor: '#fbfaff',
                                borderRadius: '5px',
                                borderColor: '#7066ec',

                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: 14,
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
                            }}>Login</Button>
                            <Button variant="contained" sx={{
                                boxShadow: 'none',
                                textTransform: 'none',
                                backgroundColor: '#7066ec',
                                borderRadius: '5px',

                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: 14,
                                fontWeight: 600,
                                letterSpacing: '-0.01rem',
                                color: '#fbfaff',

                                '&:hover': {
                                    backgroundColor: '#7066ec',
                                    borderColor: '#7066ec',
                                    boxShadow: 'none',
                                },

                            }}>Sign Up</Button>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header