import { writable } from "svelte/store";

const initialDate = new Date();

export const viewCurrentDate = writable(
  `${initialDate.getMonth() + 1}/${initialDate.getFullYear()}`
);

export const scheduleDate = writable(<Date>null);
