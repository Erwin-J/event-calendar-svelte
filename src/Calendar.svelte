<script lang="ts">
  import { writable } from "svelte/store";
  import { viewCurrentDate } from "./calendar.store";
  import { days } from "./utils/date.utils";

  const selectedDate = new Date();

  const daysInMonth = writable(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate()
  );

  const startingDayPosition = (dayIndex: number) => {
    const firstWeekDayOfTheMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();

    if (firstWeekDayOfTheMonth === 0 && dayIndex === 1) {
      return `grid-column-start: ${7};`;
    }

    if (dayIndex === 1) {
      return `grid-column-start: ${firstWeekDayOfTheMonth};`;
    }

    return "";
  };

  function nextMonth(): void {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    viewCurrentDate.set(
      `${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
    );
    SetDaysInMonth();
  }

  function previousMonth(): void {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    viewCurrentDate.set(
      `${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
    );
    SetDaysInMonth();
  }

  function SetDaysInMonth(): void {
    daysInMonth.set(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      ).getDate()
    );
  }
</script>

<div id="calendar-info">
  <div class="leftpicker" on:click={() => previousMonth()}>🥕</div>
  <div class="currentMonthYear">
    {$viewCurrentDate}
  </div>
  <div class="rightpicker" on:click={() => nextMonth()}>🥒</div>
</div>

<div id="calendar-container">
  {#each days as day}
    <div class="day">{day}</div>
  {/each}

  {#each { length: $daysInMonth } as _, dayIndex}
    <div
      class="day"
      style={$daysInMonth ? startingDayPosition(dayIndex + 1) : ""}
    >
      {dayIndex + 1}
    </div>
  {/each}
</div>

<style>
  #calendar-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    background: #eaeaea;
    height: 100%;
  }
  #calendar-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    color: #ffffff;
    background: rgb(99, 108, 238);
    height: 100%;
    padding: 10px;
  }
  .currentMonthYear {
    text-align: center;
  }
  .leftpicker {
    justify-self: start;
  }
  .leftpicker:hover {
    cursor: pointer;
  }
  .rightpicker {
    justify-self: end;
  }
  .rightpicker:hover {
    cursor: pointer;
  }
  .day {
    padding: 20px;
    border: 1px solid #dbdbdb;
  }
</style>
