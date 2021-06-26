<script lang="ts">
  import { fade } from "svelte/transition";
  export let schedulerVisible: boolean;
  export let day: number;

  function handleClickOutside() {
    schedulerVisible = false;
  }
</script>

{#if schedulerVisible}
  <div id="calendar-scheduler" in:fade out:fade>
    <h1>Create new event for day {day}</h1>
    <form>
      <label for="eventName">Event Name:</label>
      <input type="text" id="eventName" name="eventName" />
      <br /><br />
      <label for="timeName">Time:</label>
      <input
        type="time"
        id="appt"
        name="timeName"
        min="09:00"
        max="18:00"
        required
      />
      <input
        type="time"
        id="appt"
        name="timeName"
        min="09:00"
        max="18:00"
        required
      />
      <br /><br />
      <input type="submit" name="submit" value="Create Event" />
    </form>
  </div>
  <div
    class="scheduler-filler"
    in:fade
    out:fade
    on:click={() => (schedulerVisible = false)}
  />
{/if}

<style>
  h1 {
    text-align: center;
  }
  #calendar-scheduler {
    position: absolute;
    top: 0;
    width: 100%;
    background: #ffffffe6;
    height: 300px;
    border-bottom: 5px solid rgba(99, 108, 238, 0.5);
    text-align: center;
    z-index: 100;
  }
  .scheduler-filler {
    position: absolute;
    bottom: 0;
    background: #ffffffe2;
    height: 100%;
    width: 100%;
    z-index: 95;
  }
</style>
