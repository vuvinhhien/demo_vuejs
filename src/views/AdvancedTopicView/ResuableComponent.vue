<template>
  <div>
    <h1>Resuable Component</h1>
    <v-button :onClick="button1Click">Click me to console log</v-button>
    <v-button :onClick="button2Click">Click me to alert</v-button>
  </div>
</template>

<script>
import BaseButton from "@/components/Button/BaseButton.vue";
export default {
  components: {
    "v-button": BaseButton,
  },
  methods: {
    button1Click() {
      console.log("You have click button 1");
    },
    button2Click() {
      alert("hello there");
    },
  },
};
</script>

<style></style>
