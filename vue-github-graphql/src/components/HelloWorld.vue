<template>
  <v-container>
    <v-app>
      <v-layout row wrap>
        <div v-if="$apollo.loading">
          <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
        <v-card
          class="d-flex flex-row flex-wrap mb-5 mr-3 "
          max-width="350"
          max-height="350"
          v-for="(item, i) in viewer.repositories.edges"
          :key="i"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                Repo Name:
                <span class="primary--text bold">{{ item.node.name }} </span>
              </div>

              <v-list-item-subtitle>{{
                item.node.description
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="viewer.avatarUrl"> </v-img>
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
          </v-card-actions>
        </v-card>
      </v-layout>
      <!-- <p>{{ viewer }}</p> -->
    </v-app>
  </v-container>
</template>

<script>
import { Sample } from "../graphql/sample";
export default {
  name: "HelloWorld",
  apollo: {
    viewer: Sample,
  },
  data() {
    return {
      viewer: [],
    };
  },
};
</script>
