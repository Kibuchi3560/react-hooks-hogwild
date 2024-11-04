import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
    const [newHog, setNewHog] = useState({
        name: '',
        image: '',
        specialty: '',
        weight: '',
        greased: false,
        highestMedalAchieved: ''
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setNewHog(prevHog => ({
            ...prevHog,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleAddHog = (event) => {
        event.preventDefault();
        onAddHog(newHog);
        setNewHog({
            name: '',
            image: '',
            specialty: '',
            weight: '',
            greased: false,
            highestMedalAchieved: ''
        });
    };

    return (
        <form onSubmit={handleAddHog}>
            <h3>Add New Hog</h3>
            <input 
                type="text" 
                name="name" 
                value={newHog.name} 
                onChange={handleInputChange} 
                placeholder="Name" 
                required 
            />
            <input 
                type="text" 
                name="image" 
                value={newHog.image} 
                onChange={handleInputChange} 
                placeholder="Image URL" 
                required 
            />
            <input 
                type="text" 
                name="specialty" 
                value={newHog.specialty} 
                onChange={handleInputChange} 
                placeholder="Specialty" 
                required 
            />
            <input 
                type="text" 
                name="weight" 
                value={newHog.weight} 
                onChange={handleInputChange} 
                placeholder="Weight" 
                required 
            />
            <label>
                Greased:
                <input 
                    type="checkbox" 
                    name="greased" 
                    checked={newHog.greased} 
                    onChange={handleInputChange} 
                     placeholder="Greased"

                />
            </label>
            <input 
                type="text" 
                name="highestMedalAchieved" 
                value={newHog.highestMedalAchieved} 
                onChange={handleInputChange} 
                placeholder="Highest Medal Achieved" 
                required 
            />
            <button type="submit">Add Hog</button>
        </form>
    );
}

export default AddHogForm;
