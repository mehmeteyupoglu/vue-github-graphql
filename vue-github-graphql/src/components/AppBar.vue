<template>
  <v-app-bar app dark color="grey darken-4">
    <router-link to="/">
      <v-avatar>
        <v-img
          alt="GitHub Logo"
          class="shrink mr-4 "
          contain
          :src="require('../assets/GitHub-Mark-Light-64px.png')"
          transition="scale-transition"
        />
      </v-avatar>
    </router-link>
    <v-toolbar-title class="font-weight-black">
      <span class="white--text text--darken-2 font-weight-bold">GitHub</span>
      <span class="grey--text  font-weight-bold ml-2">Personal App</span>
    </v-toolbar-title>

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
        placeholder="Search by repository name"
        v-on:keyup.enter="searchData"
        append-icon="search"
      >
      </v-text-field>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
    searchData() {
      this.$router.push("/search/" + this.search);
    },
  },
};
</script>

<style></style>
