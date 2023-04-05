import moment from "moment";

export default function findAvailableTimes(start, end, duration, events) {
  const availableSlots = [];

  let lastEnd = moment(start);

  for (const event of events) {
    const eventStart = moment(event.start);
    const eventEnd = moment(event.end);

    // If there's a gap between the last event and the current event,
    // add it as an available slot.
    if (eventStart.diff(lastEnd, "minutes") >= duration) {
      availableSlots.push({
        start: lastEnd.toISOString(),
        end: eventStart.toISOString(),
      });
    }

    // Update lastEnd to be the end of the current event.
    lastEnd = eventEnd;
  }

  // Add any remaining time after the last event as an available slot.
  if (moment(end).diff(lastEnd, "minutes") >= duration) {
    availableSlots.push({
      start: lastEnd.toISOString(),
      end: moment(end).toISOString(),
    });
  }

  return availableSlots;
}

//const events = [  {    "start": "Wed, 03 Mar 2021 04:00:15 GMT",    "end": "Wed, 03 Mar 2021 05:00:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 06:00:15 GMT",    "end": "Wed, 03 Mar 2021 06:30:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 08:30:15 GMT",    "end": "Wed, 03 Mar 2021 09:30:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 09:30:15 GMT",    "end": "Wed, 03 Mar 2021 09:50:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 12:50:15 GMT",    "end": "Wed, 03 Mar 2021 13:10:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 11:30:15 GMT",    "end": "Wed, 03 Mar 2021 12:15:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 13:30:15 GMT",    "end": "Wed, 03 Mar 2021 14:00:15 GMT"  },  {    "start": "Wed, 03 Mar 2021 15:00:15 GMT",    "end": "Wed, 03 Mar 2021 15:30:15 GMT"  }];

// const events = [
//   {
//     start: "Wed, 03 Mar 2021 04:00:15 GMT",
//     end: "Wed, 03 Mar 2021 05:00:15 GMT",
//   },
//   {
//     start: "Wed, 03 Mar 2021 06:00:15 GMT",
//     end: "Wed, 03 Mar 2021 06:30:15 GMT",
//   },
// ];
// const start = moment("Wed, 03 Mar 2021 05:00:15 GMT");
// const end = moment("Wed, 03 Mar 2021 05:30:15 GMT");
// const duration = 30;

// const availableSlots = findAvailableTimes(start, end, duration, events);
// console.log(availableSlots);
