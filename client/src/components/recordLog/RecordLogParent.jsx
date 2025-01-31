import React, { useState } from "react";
import RecordSet from "../recordSet/RecordSet";
import { Heading, LightText } from "../customTypo/CustomTypo";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

const RecordLogParent = () => {
    const [sets, setSets] = useState([{ id: 1, submitted: false, collapsed: false }]);

    // Handle set submission
    const handleSubmitSet = (id) => {
        setSets((prevSets) =>
            prevSets.map(set =>
                set.id === id ? { ...set, submitted: true, collapsed: true } : set
            )
        );
    };

    // Toggle collapse state
    const toggleCollapse = (id) => {
        setSets((prevSets) =>
            prevSets.map(set =>
                set.id === id ? { ...set, collapsed: !set.collapsed } : set
            )
        );
    };

    // Add new set
    const addSet = () => {
        // Check if all sets are submitted
        if (sets.some(set => !set.submitted)) {
            alert("Please submit the current set before adding a new one.");
            return;
        }

        setSets([...sets, { id: sets.length + 1, submitted: false, collapsed: false }]);
    };

    // Remove a set (only if it's not submitted)
    const removeSet = (id) => {
        const setToRemove = sets.find(set => set.id === id);

        if (setToRemove.submitted) {
            alert("You cannot remove a submitted set.");
            return;
        }

        setSets(sets.filter(set => set.id !== id));
    };

    return (
        <div className="recordLog">
            <Heading>Record Logs</Heading>

            {sets.map((set) => (
                <div key={set.id} className="recordSetContainer">
                    {set.collapsed ? (
                        <div className="collapsedSet" onClick={() => toggleCollapse(set.id)}>
                            <span>Set {set.id}</span>
                            <span className="arrow"><IoIosArrowDown/></span>
                        </div>
                    ) : (
                        <div className="setHeader">
                            <RecordSet setId={set.id} onSubmit={() => handleSubmitSet(set.id)} />
                            {!set.submitted && (
                                <button className="removeSetBtn" onClick={() => removeSet(set.id)}>
                                    <IoIosClose size={24} />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ))}

            <LightText className="light-text" style={{ color: "#0785fc" }} onClick={addSet}>
                Add Set <IoIosAdd />
            </LightText>
        </div>
    );
};

export default RecordLogParent;
