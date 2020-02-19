<template>
  <v-app dark>
    <v-app-bar fixed app color="primary">
      <v-app-bar-nav-icon />
      <v-toolbar-title class="hidden-sm-and-down">
        <nuxt-link to="/" tag="span" style="cursor:pointer">VueShare</nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search input-->
      <v-text-field flex placeholder="Search posts" color="accent" single-line hide-details>
        <v-icon color="black" slot="prepend">mdi-magnify</v-icon>
      </v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          color="primary"
          :to="item.link"
          depressed
          v-for="item in horizontalNavItems"
          :key="item.title"
        >
          <v-icon class="hidden-sm-and-down" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: true
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "mdi-comment", title: "Posts", link: "/posts" },
        { icon: "mdi-lock-open", title: "Sign In", link: "/signin" },
        { icon: "mdi-account-plus", title: "Sign Up", link: "/signup" }
      ];
    }
  }
};
</script>
