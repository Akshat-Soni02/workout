import React from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MultiDaySelector = ({ selectedDays = [] }) => {
  return (
    <div style={styles.container}>
      {daysOfWeek.map((day) => (
        <div
          key={day}
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
