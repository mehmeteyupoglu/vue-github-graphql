import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import router from "./router";

Vue.use(VueApollo);

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

Vue.config.productionTip = false;

export const vm = new Vue({
  apolloProvider,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

// token: "8b0d3b6597136d5fbfb56615c1cb0855b8599ce0"
