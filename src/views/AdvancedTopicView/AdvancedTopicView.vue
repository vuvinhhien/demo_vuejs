<template>
  <div>
    <h1>Advanced Topic View</h1>
    <ul>
      <li v-for="link in links" :key="link.to">
        <router-link :to="link.to">{{ link.content }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: `/advanced-topic/custom-filter`,
          content: "Custom filter and vue-moment filter component",
        },
      ],
    };
  },
};
</script>
