<template>
  <v-main>
    <div>
      <v-overlay v-if="!data">
        <div>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col class="shrink">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large x-large v-on="on">
                      Login on the left
                    </v-btn>
                  </template>
                  <span>Go to the left bar and login</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-overlay>
    </div>
    <v-container>
      <v-row>
        <HelloWorld :searchString="homeDefault" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data() {
    return {
      homeDefault: "nodejs",
      data: localStorage.token,
    };
  },
  components: { HelloWorld },
};
</script>
