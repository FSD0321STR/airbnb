import React from "react";
import {
  RangeDatePicker,
  SingleDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
      />