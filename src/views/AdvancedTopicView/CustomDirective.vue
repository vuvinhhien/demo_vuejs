<template>
  <div>
    <h1>Directives</h1>
    <p
      v-my-highlight:background.delayed.blinked="{
        mainColor: 'orange',
        secondColor: 'purple',
        delay: 500,
      }"
    >
      Hello there
    </p>
  </div>
</template>

<script>
export default {
  directives: {
    "my-highlight": {
      bind(el, binding) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          if (binding.value.delay) {
            delay = binding.value.delay;
          } else delay = 3000;
        }

        if (binding.modifiers["blinked"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setInterval(() => {
            if (currentColor === secondColor) {
              currentColor = mainColor;
            } else currentColor = secondColor;
            if (binding.arg === "background") {
              el.style.backgroundColor = currentColor;
            } else {
              el.style.color = currentColor;
            }
          }, delay);
        } else {
          if (binding.arg === "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }
      },
    },
  },
};
</script>

<style></style>
