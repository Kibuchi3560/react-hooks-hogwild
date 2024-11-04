import React from "react";
import HogItem from "./HogItem";

function HogList({ hogs, onHideHog }) {
    return (
       <ul className="Hogs">
            {hogs.map((hog) => (
                <HogItem 
                    key={hog.id} 
                    hog={hog} 
                    onHideHog={onHideHog} 
                />
            ))}
        </ul>
       
    );
}

export default HogList;
