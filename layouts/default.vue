<template>
  <v-app dark>
    <v-app-bar fixed app color="primary">
      <!-- Side navbar -->
      <v-navigation-drawer app temporary fixed v-model="sideNav">
        <v-toolbar color="secondary" dark flat>
          <v-app-bar-nav-icon @click="toggleSideNav" />
          <nuxt-link to="/" tag="span" style="cursor: pointer">
            <h1 class="title pl-3">VueShare</h1>
          </nuxt-link>
        </v-toolbar>

        <v-divider></v-divider>
        <!-- Side Navbar links -->
        <v-list>
          <v-list-item :to="item.link" v-for="(item,i) in sideNavItems" :key="i">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{item.title}}</v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in sideNavItems" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar-nav-icon @click="toggleSideNav" />
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
      fixed: true,
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "mdi-comment", title: "Posts", link: "/posts" },
        { icon: "mdi-lock-open", title: "Sign In", link: "/signin" },
        { icon: "mdi-account-plus", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "mdi-comment", title: "Posts", link: "/posts" },
        { icon: "mdi-lock-open", title: "Sign In", link: "/signin" },
        { icon: "mdi-account-plus", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>
