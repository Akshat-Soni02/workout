import React, { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MultiDaySelector = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSelect = (day) => {
    setSelectedDays((prevSelected) =>
      prevSelected.includes(day)
        ? prevSelected.filter((d) => d !== day)
        : [...prevSelected, day] 
    );
  };

  return (
    <div style={styles.container}>
      {daysOfWeek.map((day) => (
        <div
          key={day}
          onClick={() => handleSelect(day)}
          style={{
            ...styles.dayBox,
            backgroundColor: selectedDays.includes(day) ? "#007bff" : "#f0f0f0",
            color: selectedDays.includes(day) ? "#fff" : "#000",
          }}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    margin: "20px",
  },
  dayBox: {
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    border: "1px solid #ccc",
    transition: "0.3s",
  },
};

export default MultiDaySelector;
