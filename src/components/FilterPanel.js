import React from 'react'
import Container from '@mui/material/Container';
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import Select from "@mui/material/Select";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import { InputBase } from '@mui/material';


// Custom Style for the Filters
const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        borderRadius: 8,
        backgroundColor: theme.palette.background.paper,
        border: "0px",
        fontSize: 15,
        padding: "8px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
    }
}));

// Custom Style for the date filter
const DateField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '0px',
        },
    },
});

const FilterPanel = ({
    selectedLocation,
    selectedType,
    selectedDate,
    selectedPrice,
    selectLocation,
    selectType,
    selectPrice,
    selectDate,
    submitForm,
}) => {
    return (
        <div>
            {/* Filter Panel Container */}

            <Container sx={{ backgroundColor: 'white', borderRadius: '10px', display: 'flex', direction: { sm: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'center' }, alignItems: 'center', width: '75%', flexWrap: 'wrap', gap: '10px' }}>

                {/* Location Filter */}

                <Box sx={{ p: 1 }}>
                    <Typography variant="subtitle1" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        paddingLeft: '12px',
                        paddingTop: '10px',
                        color: 'grey',
                    }}>Location</Typography>

                    <Select
                        value={selectedLocation}
                        onChange={selectLocation}
                        sx={{
                            width: '130px',
                        }}
                        input={<CustomInput />}
                    >
                        <MenuItem value="None" sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>None</MenuItem>
                        <MenuItem value='United States' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>United States</MenuItem>
                        <MenuItem value='New York' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>New York</MenuItem>
                        <MenuItem value='Russia' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>Russia</MenuItem>
                        <MenuItem value='Canada' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>Canada</MenuItem>
                    </Select>
                </Box>

                {/* Date Filter */}

                <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        paddingLeft: '12px',
                        paddingTop: '15px',
                        color: 'grey',
                    }}>When</Typography>

                    <DateField
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={selectDate}
                        InputProps={{ style: { fontFamily: 'Montserrat', fontWeight: '600', fontSize: '15px', marginTop: '-7px' } }}
                    />
                </Box>


                {/* Price Filter */}

                <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        paddingLeft: '12px',
                        paddingTop: '10px',
                        color: 'grey',
                    }}>Price</Typography>

                    <Select
                        value={selectedPrice}
                        onChange={selectPrice}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        sx={{
                            width: '130px',
                        }}
                        input={<CustomInput />}
                    >
                        <MenuItem value={0} sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>None</MenuItem>
                        <MenuItem value={1} sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>{'$0 - $100,000'}</MenuItem>
                        <MenuItem value={2} sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>{'$100,000 - $150,000'}</MenuItem>
                        <MenuItem value={3} sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>{'$150,000 - $200,000'}</MenuItem>
                        <MenuItem value={4} sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>{'$200,000 - $300,000'}</MenuItem>
                    </Select>
                </Box>


                {/* Property Type Filter */}

                <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        paddingLeft: '12px',
                        paddingTop: '10px',
                        color: 'grey',
                    }}>Property Type</Typography>

                    <Select
                        value={selectedType}
                        onChange={selectType}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        sx={{
                            width: '130px',
                        }}
                        input={<CustomInput />}
                    >
                        <MenuItem value="None" sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>None</MenuItem>
                        <MenuItem value='House' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>House</MenuItem>
                        <MenuItem value='Villa' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>Villa</MenuItem>
                        <MenuItem value='Apartment' sx={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '15px' }}>Apartment</MenuItem>
                    </Select>
                </Box>


                {/* Submit Button */}
                <Box>
                    <Button variant="contained" onClick={submitForm} sx={{
                        width: '120px',
                        height: '60px',
                        boxShadow: 'none',
                        textTransform: 'none',
                        backgroundColor: '#7066ec',
                        borderRadius: '8px',

                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: '-0.01rem',
                        color: '#fbfaff',

                        '&:hover': {
                            backgroundColor: '#7066ec',
                            borderColor: '#7066ec',
                            boxShadow: 'none',
                        },

                        margin: '10px 20px 10px 15px'
                    }}>Search</Button>
                </Box>
            </Container>
        </div>
    )
}

export default FilterPanel