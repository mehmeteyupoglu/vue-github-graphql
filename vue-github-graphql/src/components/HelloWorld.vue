<template>
  <v-container>
    <v-app>
      <v-layout row wrap>
        <v-card
          color="grey lighten-4"
          class="d-flex flex-row flex-wrap mb-5 mr-3  "
          max-width="350"
          max-height="350"
          v-for="(item, i) in filteredRepository"
          :key="i"
          tile
        >
          <v-list-item three-line dense>
            <v-list-item-content>
              <div class="overline font-weight-black text--secondary">
                <span class="black--text font-weight-black" light
                  >{{ item.node.name }}
                </span>
              </div>

              <v-list-item-subtitle>{{
                item.node.description
                  ? item.node.description
                  : "No description in this repository"
              }}</v-list-item-subtitle>
            </v-list-item-content>
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
            <!-- <div>
              <p>{{ item.node.isPrivate ? "Private" : "Public" }}</p>
            </div> -->

            <v-btn
              text
              class="ml-12"
              :class="item.node.isPrivate ? 'error--text' : 'success--text'"
            >
              {{ item.node.isPrivate ? "Private" : "Public" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-app>
    <!-- {{ filteredRepository }} -->
  </v-container>
</template>

<script>
import { Sample } from "../graphql/sample";
export default {
  name: "HelloWorld",
  apollo: {
    viewer: Sample,
  },
  props: ["search"],
  data() {
    return {
      viewer: [],
    };
  },
  computed: {
    filteredRepository() {
      return this.viewer.repositories.edges.filter((item) =>
        item.node.name.match(this.search)
      );
    },
  },
};
</script>
