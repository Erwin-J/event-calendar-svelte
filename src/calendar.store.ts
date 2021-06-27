import { readable, writable } from "svelte/store";

const startingDate = new Date();

const eventData: Event[] = [
  { eventName: "Example Event", dateWithTime: new Date() },
  { eventName: "Another Event", dateWithTime: new Date() },
  {
    eventName: "Yet another Event",
    dateWithTime: new Date(
      startingDate.getFullYear(),
      startingDate.getMonth() + 1,
      5
    ),
  },
];

export const selectedDate = writable(startingDate);

export const viewCurrentDate = writable(
  `${startingDate.getMonth() + 1}/${startingDate.getFullYear()}`
);

export const daysInMonth = writable(
  new Date(startingDate.getFullYear(), startingDate.getMonth() + 1, 0).getDate()
);

export const scheduleDate = writable(<Date>null);

export const eventsForMonth = writable(eventData);

export const events = readable(() => {
  return "";
});

export interface Event {
  eventName: string;
  dateWithTime: Date;
}
