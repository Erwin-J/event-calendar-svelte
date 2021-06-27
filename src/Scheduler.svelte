<script lang="ts">
  import { fade } from "svelte/transition";
  import { scheduleDate } from "./calendar.store";

  $: $scheduleDate, showScheduler();
  $: isVisible = false;

  function showScheduler() {
    if (!$scheduleDate) {
      return;
    }
    isVisible = true;
  }

  function hideScheduler() {
    isVisible = false;
  }

  function getEventCreationDate(): string {
    if (!$scheduleDate) {
      return;
    }

    console.log($scheduleDate);

    return `${$scheduleDate.getDate()}/${
      $scheduleDate.getMonth() + 1
    }/${$scheduleDate.getFullYear()}`;
  }
</script>

{#if isVisible}
  <div id="calendar-scheduler" in:fade out:fade>
    <h1>Create new event for {getEventCreationDate()}</h1>
    <form>
      <label for="eventName">Event Name:</label>
      <input type="text" id="eventName" name="eventName" />
      <br /><br />
      <label for="timeName">Time:</label>
      <input type="time" id="appt" name="timeName" min="09:00" max="18:00" />
      <input type="time" id="appt" name="timeName" min="09:00" max="18:00" />
      <br /><br />
      <button>Create Event</button>
      <button on:click={() => hideScheduler()}>Cancel</button>
    </form>
  </div>
  <div
    class="scheduler-filler"
    in:fade
    out:fade
    on:click={() => hideScheduler()}
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
    background: #ffffff;
    height: 300px;
    border-bottom: 5px solid rgba(99, 108, 238, 0.5);
    text-align: center;
    z-index: 100;
  }
  .scheduler-filler {
    position: absolute;
    bottom: 0;
    background: #48484866;
    height: 100%;
    width: 100%;
    z-index: 95;
  }
</style>
