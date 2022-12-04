import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';


const styles = {
    color: '#9b98a7',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '2.5px solid #eeedf5',
    width: {
        xs: '80%',
        md: '350px',
    },
    height: '50px',

    '& .MuiInputBase-input': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        padding: '12px 15px 12px 12px',
    }
}


const SearchBar = ({ value, changeInput }) => {
    return (
        <div>
            <Container sx={{ display: 'flex', direction: 'row', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center', height: '150px', width: '90%' }}>
                <Typography variant="h4" sx={{
                    mr: 2.5,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#221e41',
                    letterSpacing: '-0.01rem',
                }}>Search properties to rent</Typography>

                <InputBase sx={styles} value={value} onChange={changeInput} placeholder="Search Properties" disabled={false} startAdornment={<SearchIcon fontSize="medium" sx={{ color: '#cac8d0', ml: 2, }} />} />
            </Container>
        </div>
    )
}

export default SearchBar