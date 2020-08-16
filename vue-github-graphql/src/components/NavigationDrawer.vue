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

    <v-list nav dense>
      <v-list-item link v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
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
        { title: "Public Repos", icon: "group" },
        { title: "Watched", icon: "visibility" },
        { title: "Starred", icon: "star" },
      ],
    };
  },
};
</script>

<style></style>
