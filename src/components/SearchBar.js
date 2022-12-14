import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';


// Custom Style for the search bar

const styles = {
    color: '#9b98a7',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '2.5px solid #eeedf5',
    width: {
        xs: '80%',
        md: '300px',
    },
    height: '40px',

    '& .MuiInputBase-input': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        padding: '12px 15px 12px 12px',
    }
}


const SearchBar = ({ value, changeInput }) => {
    return (
        <div>
            <Container sx={{ display: 'flex', direction: 'row', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center', height: '150px', width: '78%' }}>

                {/* Heading */}

                <Typography variant="h4" sx={{
                    mr: 2.5,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '30px',
                    color: '#221e41',
                    letterSpacing: '-0.01rem',
                }}>Search properties to rent</Typography>

                {/* Search Bar */}

                <InputBase
                    sx={styles}
                    value={value}
                    onChange={changeInput}
                    placeholder="Search Properties"
                    disabled={false}
                    startAdornment={<SearchIcon fontSize="small" sx={{ color: '#cac8d0', ml: 2, }} />}
                />
            </Container>
        </div>
    )
}

export default SearchBar