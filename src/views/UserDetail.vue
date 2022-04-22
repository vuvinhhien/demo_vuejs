<template>
  <div>
    <h1>This is {{ this.$route.params.id }} detail page</h1>
    <button @click="doLoadProfile">Load Profile</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    doLoadProfile() {
      this.$router.push(`/user/${this.$route.params.id}/profile`);
    },
  },
};
</script>
