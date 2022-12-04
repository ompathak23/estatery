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


const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        borderRadius: 8,
        backgroundColor: theme.palette.background.paper,
        border: "0px",
        fontSize: 18,
        padding: "13px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
    }
}));


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
            <Container sx={{ backgroundColor: 'white', borderRadius: '10px', display: 'flex', direction: { sm: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'center' }, alignItems: 'center', width: '73%', flexWrap: 'wrap', gap: '12px' }}>
                <Box sx={{ p: 2 }}>
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
                        // style={{
                        //     width: '150px',
                        //     height: '50px',
                        //     borderRadius: '12px',
                        // }}
                        sx={{
                            width: '175px',
                        }}
                        input={<CustomInput />}
                    >
                        <MenuItem value="None" sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>None</MenuItem>
                        <MenuItem value='United States' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>United States</MenuItem>
                        <MenuItem value='New York' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>New York</MenuItem>
                        <MenuItem value='Russia' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>Russia</MenuItem>
                        <MenuItem value='Canada' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>Canada</MenuItem>
                    </Select>
                </Box>
                {/* <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', lg: 'flex' } }} /> */}
                <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '15px',
                        paddingLeft: '12px',
                        paddingTop: '10px',
                        color: 'grey',
                    }}>When</Typography>
                    <DateField
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={selectDate}
                        InputProps={{ style: { fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', marginTop: '-5px' } }}
                    />
                </Box>
                {/* <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', lg: 'flex' } }} /> */}
                {/* <Box>
                        <Typography variant="subtitle1">When</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                                label="Select Move in Date"
                                value={selectedDate}
                                onChange={selectDate}
                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <input
                                            style={{
                                                height: "30px",
                                                fontWeight: "500",
                                                padding: "10px",
                                                borderRadius: "12px",
                                                border: "0px"
                                            }}
                                            ref={inputRef}
                                            {...inputProps}
                                            className="btn"
                                        />
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </Box> */}

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
                            width: '175px',
                        }}
                        input={<CustomInput />}
                    >
                        <MenuItem value={0} sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>None</MenuItem>
                        <MenuItem value={1} sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>{'$0 - $100,000'}</MenuItem>
                        <MenuItem value={2} sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>{'$100,000 - $150,000'}</MenuItem>
                        <MenuItem value={3} sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>{'$150,000 - $200,000'}</MenuItem>
                        <MenuItem value={4} sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>{'$200,000 - $300,000'}</MenuItem>
                    </Select>
                </Box>
                {/* <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', lg: 'flex' } }} /> */}
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
                            width: '175px',
                        }}
                        input={<CustomInput />}
                    >
                        <MenuItem value="None" sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>None</MenuItem>
                        <MenuItem value='House' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>House</MenuItem>
                        <MenuItem value='Villa' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>Villa</MenuItem>
                        <MenuItem value='Apartment' sx={{ fontFamily: 'Montserrat', fontWeight: '500' }}>Apartment</MenuItem>
                    </Select>
                </Box>
                {/* <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', lg: 'flex' } }} /> */}
                <Box>
                    <Button variant="contained" onClick={submitForm} sx={{
                        width: '125px',
                        height: '70px',
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