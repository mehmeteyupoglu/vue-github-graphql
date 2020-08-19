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
        outlined
        dense
        single-line
        placeholder="Enter Your Token"
        v-on:keyup.enter="sendToken"
        append-icon="lock"
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
  </v-navigation-drawer>
</template>

<script>
import { Sample } from "../graphql/sample";
export default {
  name: "NavigationDrawer",
  apollo: {
    viewer: Sample,
  },
  data() {
    return {
      viewer: [],
      items: [
        { title: "Home", icon: "home", to: "/" },
        {
          title: "User",
          icon: "account_circle",
          to: "/",
        },
      ],
    };
  },
};
</script>

<style></style>
