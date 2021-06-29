<script lang="ts">
  import { selectedDate, eventsForMonth } from "./calendar.store";

  export let eventDayIndex: number;

  $: getEvents = (dayIndex: number) => {
    if (!dayIndex || !$eventsForMonth || !$selectedDate) {
      return;
    }

    const eventsForSelectedDate = $eventsForMonth.filter(
      (d) =>
        d.startDateTime.getFullYear() === $selectedDate.getFullYear() &&
        d.startDateTime.getMonth() === $selectedDate.getMonth() &&
        d.startDateTime.getDate() === eventDayIndex
    );
    return eventsForSelectedDate;
  };

  function toTime(date: Date) {
    if (
      date.getHours() === 0 &&
      date.getMinutes() === 0 &&
      date.getSeconds() === 0
    ) {
      return "";
    }

    return date.toLocaleTimeString();
  }
</script>

{#each getEvents(eventDayIndex) as event}
  <div class="event">
    {event.eventName}
    <br />
    {toTime(event.startDateTime)} - {toTime(event.endDateTime)}
  </div>
{/each}

<style>
  .event {
    background: #daddfb;
    padding: 5px;
    margin-bottom: 5px;
    border-bottom: 4px solid #636cee;
  }
</style>
