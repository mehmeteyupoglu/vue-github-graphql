<template>
  <v-app>
    <v-app-bar app dark color="grey darken-4">
      <div class="d-flex align-center">
        <v-img
          alt="GitHub Logo"
          class="shrink mr-2 "
          contain
          :src="require('../src/assets/GitHub-Mark-Light-64px.png')"
          transition="scale-transition"
          width="40"
        />
        <v-list-item-title>GitHub Personal App</v-list-item-title>
      </div>

      <v-spacer></v-spacer>
      <v-col cols="8" sm="6" md="3" lg="4">
        <v-text-field
          v-model="search"
          hide-details
          height="40px"
          width="200px"
          outlined
          dense
          single-line
          append-icon="search"
          placeholder="Search by repository name"
        ></v-text-field>
      </v-col>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <NavigationDrawer />
          <HelloWorld />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NavigationDrawer from "./components/NavigationDrawer";

export default {
  name: "App",

  components: {
    HelloWorld,
    NavigationDrawer,
  },

  data() {
    return {
      search: "",
    };
  },
};
</script>
<style></style>
