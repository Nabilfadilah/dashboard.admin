import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Localizer for the calendar
const localizer = momentLocalizer(moment);

// Example events data
const events = [
  {
    title: "Booking Gedung",
    start: new Date(2024, 8, 20), // September 20, 2024
    end: new Date(2024, 8, 20),
    tooltip: "Gedung sudah dibooking",
  },
  {
    title: "Booking 3 Hari",
    start: new Date(2024, 8, 15), // September 15, 2024
    end: new Date(2024, 8, 18), // September 18, 2024
    tooltip: "Gedung dibooking dari tanggal 15 sampai 18",
  },
];

// Event style function
const eventStyleGetter = (event) => {
  const style = {
    backgroundColor: "#3174ad",
    borderRadius: "5px",
    opacity: 0.8,
    color: "white",
    border: "0px",
    display: "block",
  };
  return {
    style,
  };
};

const CalendarComponent = () => {
  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={(event) => event.tooltip} // Set the tooltip message
      />
    </div>
  );
};

export default CalendarComponent;
