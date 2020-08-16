<template>
  <div>
    <App />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src

import App from "../App.vue";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  components: { App, HelloWorld },
};
</script>
