<script lang="ts">
  import Days from "./Days.svelte";

  const currentDate: Date = new Date();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const rows: number = 6;
  const columns: number = 7;

  let col: string = `repeat(${columns}, 1fr)`;
  let row: string = `repeat(${rows}, 1fr)`;

  export const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
</script>

<div
  class="calendar-container"
  style="grid-template-rows: {row}; grid-template-columns: {col};"
>
  {#each days as day}
    <div class="calendar-cell">{day}</div>
  {/each}

  {#each { length: rows } as _, row}
    {#each { length: columns } as _, column}
      {#if row === 0 && column === 0}
        <div class="calendar-cell">
          <svelte:component
            this={Days}
            {...{
              currentGridColumnPosition: column,
              currentGridRowPosition: row,
            }}
          />
        </div>
      {:else}
        <div class="calendar-cell">{row},{column}</div>
      {/if}
    {/each}
  {/each}
</div>

<style>
  .calendar-container {
    display: grid;
    border: 1px solid #999;
    border-radius: 2px;
    width: 100%;
    height: 100%;
    grid-gap: 1px;
    background: #999;
  }

  .calendar-cell {
    border: 1px solid #444444;
    padding: 20px;
  }
</style>
