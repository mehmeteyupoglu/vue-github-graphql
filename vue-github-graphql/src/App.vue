<template>
  <v-app>
    <v-app-bar app color="grey darken-3" dark>
      <div class="d-flex align-center">
        <v-img
          alt="GitHub Logo"
          class="shrink mr-2 "
          contain
          :src="require('../src/assets/GitHub-Mark-Light-64px.png')"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
      <v-col cols="8" sm="6" md="3" lg="4">
        <v-text-field
          hide-details
          height="40px"
          width="200px"
          outlined
          dense
          single-line
          append-icon="search"
          placeholder="Search public repositories!"
        ></v-text-field>
      </v-col>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
