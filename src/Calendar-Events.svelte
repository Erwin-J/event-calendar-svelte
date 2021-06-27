<script lang="ts">
  import { selectedDate, eventsForMonth } from "./calendar.store";

  export let eventDayIndex: number;

  $: getEvents = (dayIndex: number) => {
    if (!dayIndex || !$eventsForMonth || !$selectedDate) {
      return;
    }

    const eventsForSelectedDate = $eventsForMonth.filter(
      (d) =>
        d.dateWithTime.getFullYear() === $selectedDate.getFullYear() &&
        d.dateWithTime.getMonth() === $selectedDate.getMonth() &&
        d.dateWithTime.getDate() === eventDayIndex
    );

    return eventsForSelectedDate;
  };
</script>

{#each getEvents(eventDayIndex) as event}
  <div class="event">{event.eventName} for day {eventDayIndex}</div>
{/each}

<style>
  .event {
    background: #daddfb;
    padding: 5px;
  }
</style>
