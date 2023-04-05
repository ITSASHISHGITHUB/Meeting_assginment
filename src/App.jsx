import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Gantt from "./components/Gantt";
import InputBox from "./components/InputBox";
import availableTime from "./handler/event";

// import { parseISO, format } from "date-fns";
import moment from "moment";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(0);
  const [availableSlots, setAvailableSlots] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    const events = [
      {
        start: "Wed, 03 Mar 2021 04:00:15 GMT",
        end: "Wed, 03 Mar 2021 05:00:15 GMT",
      },
      {
        start: "Wed, 03 Mar 2021 06:00:15 GMT",
        end: "Wed, 03 Mar 2021 06:30:15 GMT",
      },
    ];
    const startTime = moment(`${date} ${time}`).format(
      "ddd, DD MMM YYYY HH:mm:ss [GMT]"
    );
    const startTimeMoment = moment(time, "HH:mm:ss");
    const endMoment = moment(startTimeMoment).add(duration, "minutes");
    const endTime = endMoment.format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
    console.log("end time", endTime);

    const available = availableTime(startTime, endTime, duration, events);
    alert(` free from ${available[0].start} to ${available[1].end}`);
    console.log(available);
  }
  return (
    <div className="App grid  w-full min-h-screen bg-indigo-500 grid-cols-12 place-items-center">
      <div className="col-span-full bg-white w-full sm:w-3/4 px-4 pt-10 pb-2 rounded-xl drop-shadow-lg">
        <h1 className="col-span-full font-semibold">Find a free time</h1>
        <form action="" className=" col-span-full w-full mt-7">
          <div className="flex flex-wrap items-center gap-2">
            <InputBox
              type={"date"}
              id={"date"}
              label={"Date"}
              setInput={setDate}
              value={date}
            />
            <InputBox
              type={"time"}
              id={"time"}
              label={"Start Time"}
              setInput={setTime}
              value={time}
            />
            <InputBox
              type={"text"}
              id={"duration"}
              label={"Duration"}
              setInput={setDuration}
              value={duration}
            />
          </div>
          <Button handleClick={handleClick} />
        </form>
        <div className="flex items-center text-white bg-[#98F9FF] my-4">
          <Gantt time={"9:30 AM"} bg={"bg-slate-500"} />
          <Gantt time={"9:30 AM"} bg={"bg-[#17F455]"} />
        </div>
        <div className="flex gap-4 items-center">
          <p className="flex items-center">
            <span className="w-4 h-2 bg-slate-500 mr-2"></span> Free
          </p>
          <p className="flex items-center">
            <span className="w-4 h-2  mr-2 bg-[#17F455]"></span> Busy
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
