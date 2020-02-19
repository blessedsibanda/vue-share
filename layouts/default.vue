<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list-item>
        <v-list-item-icon>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <h1 class="title font-weight-bold">{{title}}</h1>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />

      <v-toolbar-title class="hidden-sm-and-down" v-text="title" />
      <v-spacer />
      <v-text-field flex placeholder="Search posts" color="accent" single-line hide-details>
        <v-icon slot="prepend">mdi-magnify</v-icon>
      </v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn color="primary" :to="item.to" depressed v-for="item in items" :key="item.title">
          <v-icon class="hidden-xs-only" left>{{item.icon}}</v-icon>
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
      <span>&copy; {{(new Date()).getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-comment",
          title: "Posts",
          to: "/posts"
        },
        {
          icon: "mdi-lock-open",
          title: "Sign In",
          to: "/signin"
        },
        {
          icon: "mdi-account-plus",
          title: "Sign Up",
          to: "/signup"
        }
      ],
      miniVariant: false,
      title: "VueShare"
    };
  }
};
</script>
