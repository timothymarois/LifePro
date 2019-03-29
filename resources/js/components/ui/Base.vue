<template>

  <v-app id="inspire" dark>
    
    <v-navigation-drawer
      v-model="drawer"
      clipped
      temporary
      fixed
      app
    >

      <v-list class="pa-1">

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Timothy Marois</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="drawer = !drawer">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
          <v-divider light></v-divider>

        <v-list-tile @click="" :to="'dashboard'">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="" :to="'insights'">
          <v-list-tile-action>
            <v-icon>insert_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Insights</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="" :to="'settings'">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <Toolbar @toggle="drawer = !drawer"></Toolbar>

    <v-content>
      <v-container fluid pa-2>
        <router-view></router-view> 
        <Settings />
      </v-container>
    </v-content>
    
    <!-- <v-card
    class="hide-overflow"
    height="90px"
  >

    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      
      color="transparent"
    >
      <v-btn flat color="teal">
        <span>Dashboard</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>My Data</span>
        <v-icon>insert_chart</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card> -->

    <Footer />

    

  </v-app>
</template>


<script>

  import Toolbar from "./Toolbar";
  import Footer from "./Footer";
  import Settings from "../features/Settings";

  export default {
    components: {
        Footer,
        Toolbar,
        Settings
    },
    data: () => ({
      drawer : null,
      activeBtn: 1,
        showNav: true
    }),
    props: {
      source: String
    }
  }
  
</script>