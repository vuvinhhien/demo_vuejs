<template>
  <div>
    <h1>Custom Filter</h1>
    <p>{{ someText | toLowerCase | toUpperCase }}</p>
    <div>Normal date: {{ someDate }}</div>
    <div>
      Formatted with vue-moment: {{ someDate | moment("dddd, MMMM Do YYYY") }}
    </div>
    <div>moment from: {{ someDate | moment("from") }}</div>
    <div>moment calendar: {{ someDate | moment("calendar") }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someText: "Hello World",
      someDate: new Date(),
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
    toLowerCase(value) {
      return value.toLowerCase();
    },
  },
};
</script>
