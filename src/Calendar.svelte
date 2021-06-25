<script lang="ts">
  import type { Day } from "./models/Day";

  const currentDate: Date = new Date();

  const weeks = getWeekAmount(
    currentDate.getMonth() + 1,
    currentDate.getFullYear()
  );

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  export const days: Day[] = [
    { position: 0, name: `Monday` },
    { position: 1, name: `Tuesday` },
    { position: 2, name: `Wednesday` },
    { position: 3, name: `Thursday` },
    { position: 4, name: `Friday` },
    { position: 5, name: `Saturday` },
    { position: 6, name: `Sunday` },
  ];

  function startingPosition(dayIndex: number): string {
    const firstWeekDayOfTheMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    console.log(firstWeekDayOfTheMonth);

    // In case of sunday, index 0
    if (firstWeekDayOfTheMonth === 0 && dayIndex === 1) {
      return `grid-column-start: ${7};`;
    }

    if (dayIndex === 1) {
      return `grid-column-start: ${firstWeekDayOfTheMonth};`;
    }

    return "";
  }

  function getWeekAmount(month: number, year: number): number {
    var firstOfTheMonth = new Date(year, month - 1, 1);
    var lastOfTheMonth = new Date(year, month, 0);

    var used = firstOfTheMonth.getDay() + lastOfTheMonth.getDate();

    return Math.ceil(used / 7);
  }
</script>

<!-- style="grid-template-rows: repeat({weeks}, 1fr); -->
<div id="calendar-container">
  {#each days as day}
    <div class="day">{day.name}</div>
  {/each}

  {#each { length: daysInMonth } as _, dayIndex}
    <div class="day" style={startingPosition(dayIndex + 1)}>{dayIndex + 1}</div>
  {/each}
</div>

<style>
  #calendar-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    background: #999;
    height: 100%;
  }

  .day {
    border: 1px solid #444444;
    padding: 20px;
  }
</style>
