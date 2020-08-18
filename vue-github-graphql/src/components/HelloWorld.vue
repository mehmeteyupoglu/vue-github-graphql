<template>
  <v-container>
    <v-app>
      <v-layout row wrap>
        <v-overlay v-if="$apollo.loading">
          <div>
            <v-progress-circular
              :size="70"
              :width="7"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-overlay>

        <v-card
          color="grey lighten-4"
          class="d-flex flex-row flex-wrap mb-5 mr-3 ml-2  "
          max-width="335"
          max-height="250"
          v-for="(item, i) in search.edges"
          :key="i"
          tile
        >
          <v-list-item three-line dense>
            <v-list-item-content>
              <div class="overline font-weight-black text--secondary">
                <span class="black--text font-weight-black" light
                  >{{ item.node.owner.login }}
                </span>
              </div>

              <v-list-item-subtitle>{{
                item.node.description
                  ? item.node.description
                  : "No description in this repository"
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar size="40">
              <v-img :src="item.node.owner.avatarUrl"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>
              {{ item.node.stargazers.totalCount }}
              <v-icon>
                star
              </v-icon>
            </v-btn>
            <v-btn text>
              {{ item.node.watchers.totalCount }}
              <v-icon>
                visibility
              </v-icon>
            </v-btn>
            <a :href="item.node.owner.url" target="_blank">
              <v-btn
                small
                text
                class="ml-6"
                :class="item.node.isPrivate ? 'error--text' : 'success--text'"
              >
                {{ item.node.isPrivate ? "Private" : "Public" }}
                <v-icon>exit_to_app</v-icon>
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-app>
    <!-- {{ search.edges }} -->
  </v-container>
</template>

<script>
import { SEARCH } from "../graphql/Search";
export default {
  name: "HelloWorld",
  props: ["searchString"],
  data() {
    return {
      search: [],
      queryString: "",
    };
  },
  apollo: {
    search: {
      query: SEARCH,
      variables() {
        return {
          queryString: this.searchString,
        };
      },
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
