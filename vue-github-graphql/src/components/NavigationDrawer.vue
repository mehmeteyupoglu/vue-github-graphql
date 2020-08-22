<template>
  <v-navigation-drawer permanent dark app color="grey darken-4">
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="viewer.avatarUrl"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{ viewer.name }}</v-list-item-title>
          <v-list-item-subtitle
            >Username: {{ viewer.login }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list>
      <v-text-field
        hide-details
        height="40px"
        width="150px"
        @keydown.enter="data & login()"
        outlined
        dense
        single-line
        placeholder="Enter Your Token"
        append-icon="lock"
        v-model="token"
      >
      </v-text-field>
    </v-list>
    <v-list nav dense v-for="(item, i) in items" :key="i">
      <router-link :to="item.to">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>

    <v-list>
      <v-btn
        :color="data ? 'red' : 'success'"
        block
        @click="data ? logout() : login()"
      >
        {{ data ? "Logout" : "Login" }}
      </v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { Sample } from "../graphql/sample";
import { SEARCH } from "../graphql/Search";

export default {
  name: "NavigationDrawer",
  apollo: {
    viewer: Sample,
    search: SEARCH,
  },
  data() {
    return {
      search: [],
      viewer: [],
      items: [
        { title: "Home", icon: "home", to: "/" },
        {
          title: "User",
          icon: "account_circle",
          to: "/search/remoteteam",
        },
      ],
      token: "",
      data: localStorage.token,
    };
  },
  methods: {
    refetch() {
      this.$apollo.queries.viewer.refetch();
      this.$apollo.queries.search.refetch();
    },
    login() {
      localStorage.setItem("token", this.token);
      this.token = "";
      this.$router.push("/search/remoteteam");
      this.refetch();
      this.data = localStorage.token;
    },
    logout() {
      localStorage.removeItem("token");
      this.data = localStorage.token;
      this.refetch();
      this.$router.push("/");
      this.token = "";
    },
  },
};
</script>

<style></style>
