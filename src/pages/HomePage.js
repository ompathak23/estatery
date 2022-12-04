import React, { useEffect } from 'react'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import List from '../components/List'
import { housingData } from './data'
import EmptyView from '../components/EmptyView'



const HomePage = () => {

    const [selectedLocation, setSelectedLocation] = useState("None");
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedType, setSelectedType] = useState("None");

    const [list, setList] = useState(housingData);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const handleSelectLocation = (event) => setSelectedLocation(event.target.value);

    const handleSelectDate = (event) => setSelectedDate(event.target.value);

    const handleSelectPrice = (event) => setSelectedPrice(event.target.value);

    const handleSelectType = (event) => setSelectedType(event.target.value);


    const applyFilters = () => {
        let updatedList = housingData;

        if (selectedLocation !== "None") {
            updatedList = updatedList.filter(
                (item) => item.country === selectedLocation
            );
        }


        if (selectedType !== "None") {
            updatedList = updatedList.filter(
                (item) => item.type === selectedType
            );
        }

        if (selectedPrice) {
            let minPrice = 0;
            let maxPrice = 300000;

            if (selectedPrice === '1') {
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

        if (selectedDate) {
            updatedList = updatedList.filter((item) => {
                let move_date = item.availableFrom.split("-");
                let selected_date = selectedDate.toString().split("-");

                return move_date <= selected_date
            });
        }

        if (searchInput) {
            updatedList = updatedList.filter(
                (item) =>
                    item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }

        setList(updatedList);
        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    }

    // useEffect(() => {
    //     applyFilters();
    // }, [selectedLocation, selectedPrice, selectedType, selectedDate, searchInput])

    useEffect(() => {
        applyFilters();
    }, [searchInput])

    const handleSubmit = (e) => {
        e.preventDefault()
        applyFilters()
    }

    return (
        <div style={{ backgroundColor: '#f8f7fd' }}>
            <SearchBar
                value={searchInput}
                changeInput={(e) => setSearchInput(e.target.value)} />
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
            <>
                {resultsFound ? <List list={list} /> : <EmptyView />}
            </>
        </div>
    )
}

export default HomePage
