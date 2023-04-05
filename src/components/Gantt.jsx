import React from "react";

export default function Gantt({ time, bg }) {
  return <div className={`${bg} py-2 px-4`}>{time}</div>;
}
