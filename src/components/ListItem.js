import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

const ListItem = ({ item }) => {
    return (
        <Card sx={{ width: 285, borderRadius: '10px', margin: '12px' }}>
            <CardMedia
                component="img"
                alt={item.name}
                height="150"
                image={item.image}
            />
            <CardContent>
                <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: "flex", direction: 'row', alignItems: 'center' }}>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            color: '#7066ec',
                        }}>
                            ${item.price}
                        </Typography>
                        <Typography variant="subtitle2" sx={{
                            marginTop: '-5px',
                            fontFamily: 'Montserrat',
                            fontWeight: '500',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            color: 'grey',
                            paddingLeft: '3px'
                        }}>/month</Typography>
                    </Box>
                    <FavoriteBorderIcon fontSize='small' sx={{ marginTop: '-8px' }} />
                </Box>
                <Typography variant="h6" sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '700',
                    fontStyle: 'normal',
                    fontSize: '18px',
                    color: '#221e41',
                    letterSpacing: '-0.04rem'
                }}>
                    {item.name}
                </Typography>

                <Typography variant="subtitle2" sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: '11px',
                    color: 'grey',
                    marginBottom: '10px'
                }}>
                    {item.address}
                </Typography>
                <Divider flexItem />
                <Box sx={{ marginTop: '10px', display: 'flex', direction: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', direction: 'row', alignItems: 'center' }}>
                        <span><SingleBedOutlinedIcon fontSize="small" sx={{ color: '#7066ec' }} /></span>
                        <span><Typography variant="subtitle2" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: '400',
                            fontStyle: 'normal',
                            fontSize: '10px',
                            color: 'grey',
                            marginTop: '-3px',
                            marginLeft: '3px'
                        }}>{item.bedrooms} beds</Typography></span>
                    </div>
                    <div style={{ display: 'flex', direction: 'row', alignItems: 'center' }}>
                        <span><ShowerOutlinedIcon fontSize="small" sx={{ color: '#7066ec' }} /></span>
                        <span><Typography variant="subtitle2" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: '400',
                            fontStyle: 'normal',
                            fontSize: '10px',
                            color: 'grey',
                            marginTop: '-3px',
                            marginLeft: '3px'
                        }}>{item.bathrooms} Bathrooms</Typography></span>
                    </div>
                    <div style={{ display: 'flex', direction: 'row', alignItems: 'center' }}>
                        <span><StopOutlinedIcon fontSize="small" sx={{ color: '#7066ec' }} /></span>
                        <span><Typography variant="subtitle2" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: '400',
                            fontStyle: 'normal',
                            fontSize: '10px',
                            color: 'grey',
                            marginTop: '-3px',
                            marginLeft: '3px'
                        }}>{item.surface}</Typography></span>
                    </div>
                </Box>
            </CardContent>
        </Card >
    )
}

export default ListItem