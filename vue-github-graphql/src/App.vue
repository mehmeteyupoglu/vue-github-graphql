<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <router-view />
  </v-app>
</template>

<script>
import AppBar from "../src/components/AppBar";
import NavigationDrawer from "../src/components/NavigationDrawer";
export default {
  name: "App",

  components: {
    AppBar,
    NavigationDrawer,
  },
};
</script>
<style></style>
