import React, { useEffect } from 'react'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import List from '../components/List/List'
import { housingData } from './data'
import EmptyView from '../components/EmptyView'

const HomePage = () => {

    // States defined for the filter categories
    const [selectedLocation, setSelectedLocation] = useState("None");
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedType, setSelectedType] = useState("None");
    const [searchInput, setSearchInput] = useState('');

    // States defined for the list of items to be presented depending on the state whether results are found or not
    const [list, setList] = useState(housingData);
    const [resultsFound, setResultsFound] = useState(true);

    // Handle change events for the different filters
    const handleSelectLocation = (event) => setSelectedLocation(event.target.value);
    const handleSelectDate = (event) => setSelectedDate(event.target.value);
    const handleSelectPrice = (event) => setSelectedPrice(event.target.value);
    const handleSelectType = (event) => setSelectedType(event.target.value);


    // Function to filter the list according to the selected filters
    const applyFilters = () => {
        let updatedList = housingData;

        // Location filer applied
        if (selectedLocation !== "None") {
            updatedList = updatedList.filter(
                (item) => item.country === selectedLocation
            );
        }

        // Property Type filer applied
        if (selectedType !== "None") {
            updatedList = updatedList.filter(
                (item) => item.type === selectedType
            );
        }

        // Price filer applied
        if (selectedPrice) {
            let minPrice = 0;
            let maxPrice = 300000;

            if (selectedPrice === 1) {
                maxPrice = 100000;
            } else if (selectedPrice === 2) {
                minPrice = 100000;
                maxPrice = 150000;
            } else if (selectedPrice === 3) {
                minPrice = 150000;
                maxPrice = 200000;
            } else {
                minPrice = 200000;
                maxPrice = 300000;
            }

            updatedList = updatedList.filter(
                (item) => (parseInt(item.price) >= minPrice && parseInt(item.price) <= maxPrice)
            );
        }

        // Date filer applied
        if (selectedDate) {
            updatedList = updatedList.filter((item) => {
                let move_date = item.availableFrom.split("-");
                let selected_date = selectedDate.toString().split("-");

                return move_date <= selected_date
            });
        }

        // Search filer applied
        if (searchInput) {
            updatedList = updatedList.filter(
                (item) =>
                    item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }

        setList(updatedList); // Update the list with the items filtered
        !updatedList.length ? setResultsFound(false) : setResultsFound(true); //Update resultsFound state depending on the filtered list of items
    }


    useEffect(() => {
        applyFilters();
    }, [searchInput]) // eslint-disable-line react-hooks/exhaustive-deps

    // Handle submission of the filters
    const handleSubmit = (e) => {
        e.preventDefault()
        applyFilters()
    }

    return (
        <div style={{ backgroundColor: '#f8f7fd' }}>
            {/* Search Bar Component */}

            <SearchBar
                value={searchInput}
                changeInput={(e) => setSearchInput(e.target.value)} />

            {/* Filter Panel Component */}

            <FilterPanel
                selectedLocation={selectedLocation}
                selectedType={selectedType}
                selectedDate={selectedDate}
                selectedPrice={selectedPrice}
                selectLocation={handleSelectLocation}
                selectType={handleSelectType}
                selectPrice={handleSelectPrice}
                selectDate={handleSelectDate}
                submitForm={handleSubmit}
            />

            {/* Results Component : Displays EmptyView Component when no results to show */}

            <>
                {resultsFound ? <List list={list} /> : <EmptyView />}
            </>
        </div>
    )
}

export default HomePage
