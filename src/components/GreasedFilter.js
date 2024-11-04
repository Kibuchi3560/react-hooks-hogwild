import React from "react";

function GreasedFilter({ onFilterChange }) {
    function handleChange(event) {
        onFilterChange(event.target.value);
    }

    return (
        <div className="Filter">
           <h3>Filter for  Greased Hog or Not</h3>
            <select name="filter" onChange={handleChange}>
                <option value="All">Filter by greased status</option>
                <option value="True">True</option>
                <option value="False">False</option>
            </select>
            
        </div>
    );
}

export default GreasedFilter;

