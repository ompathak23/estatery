import React from 'react'
import ListItem from './ListItem'
import Container from '@mui/material/Container';

const List = ({ list }) => {
    return (
        <Container sx={{
            backgroundColor: '#f8f7fd',
            borderRadius: '10px',
            display: 'flex',
            direction: 'row',
            justifyContent: 'center',
            width: '85%',
            flexWrap: 'wrap',
            marginTop: '30px'
        }}>

            {
                list.map((item) => (
                    <ListItem key={item.id} item={item} />
                ))
            }
        </Container >
    )
}

export default List