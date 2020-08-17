<template>
  <v-app-bar app dark color="grey darken-4">
    <div class="d-flex align-center">
      <v-img
        alt="GitHub Logo"
        class="shrink mr-2 "
        contain
        :src="require('../assets/GitHub-Mark-Light-64px.png')"
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
        placeholder="Search by repository name"
      >
      </v-text-field>
    </v-col>
    <v-btn @click="searchData" icon>
      <v-icon>search</v-icon>
    </v-btn>
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
      this.$router.push("/search/" + this.searchLanguage);
      this.searchLanguage = "";
    },
  },
};
</script>

<style></style>
