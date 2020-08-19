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
            <ApolloMutation
              :mutation="!item.node.viewerHasStarred ? addStar : removeStar"
              :variables="{ repoid: item.node.id }"
              @done="onDone"
            >
              <template slot-scope="{ mutate, loading }">
                <v-btn text :disabled="loading" @click="mutate()">
                  {{ item.node.stargazers.totalCount }}
                  <v-icon
                    :color="
                      item.node.viewerHasStarred ? 'amber darken-1' : 'black'
                    "
                  >
                    {{ item.node.viewerHasStarred ? "star" : "star_outline" }}
                  </v-icon>
                </v-btn>
              </template>
            </ApolloMutation>

            <v-btn text>
              {{ item.node.watchers.totalCount }}
              <v-icon
                :color="item.node.viewerHasStarred ? 'green darken-3' : 'error'"
              >
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
import { gql } from "apollo-boost";
import { SEARCH } from "../graphql/Search";
// import { ADD_STAR } from "../graphql/addStar";
// import { REMOVE_STAR } from "../graphql/removeStar";

export default {
  name: "HelloWorld",
  props: ["searchString"],
  data() {
    return {
      addStar: gql`
        mutation AddStar($repoid: ID!) {
          addStar(input: { starrableId: $repoid }) {
            starrable {
              viewerHasStarred
            }
          }
        }
      `,
      removeStar: gql`
        mutation RemoveStar($repoid: ID!) {
          removeStar(input: { starrableId: $repoid }) {
            starrable {
              viewerHasStarred
            }
          }
        }
      `,
      viewer: [],
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
    // addStar: {
    //   mutation: ADD_STAR,
    // },
    // removeStar: {
    //   mutation: REMOVE_STAR,
    // },
  },
  methods: {
    onDone: function() {
      this.refetch();
    },
    alert() {
      alert("You already starred this repo!");
    },
    refetch() {
      this.$apollo.queries.search.refetch();
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
