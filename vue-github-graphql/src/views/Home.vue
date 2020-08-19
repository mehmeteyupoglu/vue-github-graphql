<template>
  <v-main>
    <v-container fluid>
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
    };
  },
  components: { HelloWorld },
};
</script>
