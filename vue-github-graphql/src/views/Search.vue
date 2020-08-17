<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <HelloWorld :searchString="language" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  props: ["language"],
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
