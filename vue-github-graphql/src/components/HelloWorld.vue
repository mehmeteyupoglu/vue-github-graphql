<template>
  <v-container>
    <v-app>
      <v-layout row wrap>
        <v-card
          class="d-flex flex-row flex-wrap mb-5 mr-3 "
          max-width="250"
          max-height="300"
          v-for="n in 10"
          :key="n"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">GitHub Repository</div>
              <v-list-item-title class="headline mb-1"
                >Headline 5</v-list-item-title
              >
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img
                src="https://avatars3.githubusercontent.com/u/59320966?u=74fc0e1346eb1cd8980797a06bbcd8f699b33632&v=4"
              >
              </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>
              <v-icon>
                star
              </v-icon>
            </v-btn>
            <v-btn text>
              <v-icon>
                watch_later
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-app>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
