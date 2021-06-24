<script lang="ts">
  const currentDate: Date = new Date();

  const rows: number = 5;
  const columns: number = 7;

  $: col = `repeat(${columns}, 1fr)`;
  $: row = `repeat(${rows}, 1fr)`;
</script>

<div
  class="calendar-container"
  style="grid-template-rows: {row}; grid-template-columns: {col};"
>
  {#each { length: rows } as _, i (i)}
    {#each { length: columns } as _, j (j)}
      <div class="calendar-cell">{i},{j}</div>
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
