<template>
  <v-app>
    <v-app-bar app dark>
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
    <v-flex row>
      <v-main>
        <HelloWorld :search="search" />
      </v-main>
    </v-flex>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data() {
    return {
      search: "",
    };
  },
};
</script>
<style></style>
