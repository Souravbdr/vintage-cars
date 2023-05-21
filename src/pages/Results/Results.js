import React, { useState, useEffect } from 'react';
import './Results.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Pagination from '../../components/pagination/pagination';
import Table from '../../components/table/table';
import Filter from '../../components/filters/filters';

const Results = ({feedbacks}) => {
    
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
    const [locationFilter, setLocationFilter] = useState('');
    const [descriptionFilter, setDescriptionFilter] = useState('');
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDateFrom, setSelectedDateFrom] = useState(null);
    const [selectedDateTo, setSelectedDateTo] = useState(null);

    

    useEffect(() => {
        let filteredResults = feedbacks;

        if (locationFilter !== '') {
            filteredResults = filteredResults.filter((feedback) =>
                feedback.location.toLowerCase().includes(locationFilter.toLowerCase())
            );
        }

        if (descriptionFilter !== '') {
            filteredResults = filteredResults.filter((feedback) => {
                const descriptionWords = descriptionFilter.toLowerCase().split(' ');
                return descriptionWords.every((word) =>
                    feedback.description.toLowerCase().includes(word)
                );
            });
        }

        if (selectedDateFrom != null) {
            filteredResults = filteredResults.filter((feedback) => {
                const responseDate = new Date(feedback.date);
                return (selectedDateFrom === null || responseDate >= selectedDateFrom);
            });
        }
        if (selectedDateTo != null) {
            filteredResults = filteredResults.filter((feedback) => {
                const responseDate = new Date(feedback.date);
                return selectedDateTo === null || responseDate <= selectedDateTo;
            });
        }

        setFilteredFeedbacks(filteredResults);
    }, [locationFilter, descriptionFilter, selectedDateFrom, selectedDateTo, feedbacks]);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredFeedbacks.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="feedback-page">
            <Filter locationFilter={locationFilter}
                descriptionFilter={descriptionFilter}
                handleLocationFilterChange={(event) => setLocationFilter(event.target.value)}
                handleDescriptionFilterChange={(event) => { setDescriptionFilter(event.target.value) }}
                selectedDateFrom={selectedDateFrom}
                handleDateChangeFrom={setSelectedDateFrom}
                selectedDateTo={selectedDateTo}
                handleDateChangeTo={setSelectedDateTo} />
            <Table currentItems={currentItems} />
            <Pagination totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} />
        </div>
    );
};

export default Results;
