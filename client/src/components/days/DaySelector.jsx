import React, { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MultiDaySelector = ({ selectedDays = [], onSelectionChange }) => {
    const [selected, setSelected] = useState(selectedDays);

    const toggleDay = (day) => {
        const updatedSelection = selected.includes(day)
            ? selected.filter((d) => d !== day)
            : [...selected, day];
        setSelected(updatedSelection);
        onSelectionChange(updatedSelection);
    };

    return (
        <div style={styles.container}>
            {daysOfWeek.map((day) => (
                <div
                    key={day}
                    style={{
                        ...styles.dayBox,
                        backgroundColor: selected.includes(day) ? "#007bff" : "#f0f0f0",
                        color: selected.includes(day) ? "#fff" : "#000",
                    }}
                    onClick={() => toggleDay(day)}
                >
                    {day}
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: { display: "flex", gap: "10px", justifyContent: "center", margin: "20px" },
    dayBox: { padding: "10px 15px", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", border: "1px solid #ccc", transition: "0.3s", userSelect: "none" }
};

export default MultiDaySelector;
