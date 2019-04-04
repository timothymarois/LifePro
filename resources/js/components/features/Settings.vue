<template>

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Settings</v-btn> -->
        
        <v-btn icon dark v-on="on">
            <v-icon>settings</v-icon>
        </v-btn>

      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Done</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Mood Tracking</v-list-tile-title>
              <v-list-tile-sub-title>Track and display your daily mood.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </v-list>

        <v-list three-line subheader>
          <v-subheader>Your Data</v-subheader>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Download My Data</v-list-tile-title>
              <v-list-tile-sub-title>You can download all your data into a CSV for backup or import into a spreadsheet for further analysis.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Delete All Data</v-list-tile-title>
              <v-list-tile-sub-title>You can delete all your data from the LifePro app. This can NOT be undone.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </v-list>


      </v-card>
    </v-dialog>

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    }
  }
</script>