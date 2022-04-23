<template>
  <button @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  font: inherit;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: orange;
  }

  &:active {
    outline: none;
  }
}
</style>
