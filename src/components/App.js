import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import GreasedFilter from "./GreasedFilter";
import HogList from "./HogList";
import AddHogForm from "./AddHogForm";

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hogsList, setHogsList] = useState(hogs);

    function handleFilterChange(category) {
        setSelectedCategory(category);
    }

    const hogsToDisplay = hogsList.filter((hog) => {
        if (selectedCategory === 'All') {
            return !hog.hidden; 
        } else if (selectedCategory === 'True') {
            return hog.greased === true && !hog.hidden;
        } else if (selectedCategory === 'False') {
            return hog.greased === false && !hog.hidden;
        }
        return false;
    });

    const handleHideHog = (id) => {
        setHogsList(prevHogs => 
            prevHogs.map(hog => 
                hog.id === id ? { ...hog, hidden: true } : hog
            )
        );
    };

    const handleAddHog = (newHog) => {
        const id = hogsList.length ? hogsList[hogsList.length - 1].id + 1 : 1; 
        const addedHog = { ...newHog, id, hidden: false };
        setHogsList([...hogsList, addedHog]);
    };

    return (
        <div className="App">
            <Nav />
            <GreasedFilter onFilterChange={handleFilterChange} />
			<AddHogForm onAddHog={handleAddHog} />
            <HogList hogs={hogsToDisplay} onHideHog={handleHideHog} />
        </div>
    );
}

export default App;
