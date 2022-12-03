import React from 'react'

const HomePage = () => {
    return (
        <div style={{ backgroundColor: '#f8f7fd' }}>
            <SearchBar />
            <FilterPanel />
            <List />
        </div>
    )
}

export default HomePage