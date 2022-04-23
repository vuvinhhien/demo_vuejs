<template>
  <div>
    <h1>Two Ways Binding To Custom Component</h1>
    <v-input v-model="firstInput"></v-input>
    <p>Input: {{ firstInput }}</p>
  </div>
</template>

<script>
import MyInput from "@/components/Input/MyInput.vue";
export default {
  components: {
    "v-input": MyInput,
  },
  data() {
    return {
      firstInput: "",
    };
  },
};
</script>

<style></style>
