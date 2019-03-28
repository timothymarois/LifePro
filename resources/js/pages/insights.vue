<template>
    <v-container grid-list-md text-xs-center>


        <v-layout align-center justify-center row wrap>

      <v-flex sm12 md6>
        <v-card
              class="mx-auto text-xs-center"
              color="green"
              dark
          >
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">
                    {{ item.value }}
                  </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Avg. Sleep</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block flat>Go to Report</v-btn>
            </v-card-actions>
        </v-card>

        </v-flex>

       <v-flex sm12 md6>
        <v-card
              class="mx-auto text-xs-center"
              color="green"
              dark
          >
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">
                    {{ item.value }}
                  </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Avg. Steps</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block flat>Go to Report</v-btn>
            </v-card-actions>
        </v-card>
        </v-flex>

     </v-layout>

        <!-- <v-layout align-start justify-center row wrap>

        <v-flex xs12 md6>

            <v-expansion-panel focusable>
                <v-expansion-panel-content
                v-for="(item,i) in 5"
                :key="i"
                >
                    <template v-slot:header>
                        <div>Item</div>
                    </template>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-flex>

        <v-flex xs12 md6>

            <v-expansion-panel focusable>
                <v-expansion-panel-content
                v-for="(item,i) in 5"
                :key="i"
                >
                    <template v-slot:header>
                        <div>Item</div>
                    </template>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-flex>

        </v-layout> -->


    </v-container>

</template>


<style lang="scss" scoped>

    // .page {
    //     min-height: 100vh;
    // }

</style>

<script>
   export default {
       name: 'dashboard',

       data : function() {
           return {
               page : 'Insights',

               value: [
        5.46,
        6.65,
        6.54,
        8.55,
        5.42,
        5.64,
        5.6
      ]
           
           };
       },

       mounted: function () {

       },

       destroyed: function () {

       }
   }
</script>
