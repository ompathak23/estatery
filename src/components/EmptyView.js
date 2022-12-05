import React from 'react'
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

// This returns a component when there are no results to display

const EmptyView = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75%', height: '450px' }}>
            <Box sx={{ marginTop: '-100px' }}>
                <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: '100px', opacity: '0.15', marginLeft: '75px' }} />
                <Typography variant="h6" sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '600',
                    opacity: '0.2'
                }}>Sorry No Items To Display!</Typography>
            </Box>
        </Container>
    )
}

export default EmptyView