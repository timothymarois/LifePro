<template>

      <v-layout align-center-start justify-center row wrap>

       <!-- <v-flex xs12>
         <v-card dark color="primary">
          {{page}}
        </v-card>
       </v-flex> -->

      <!-- <v-flex xs12 md6>
         <v-card dark color="primary">

          <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-switch color="success" v-model="switch1"></v-switch>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>

        </v-card>
       </v-flex> -->


        <v-flex xs12 md4>
         <v-card dark color="primary">

          <v-list class="actions">
            <v-subheader inset class="actions">ACTIONS</v-subheader>

          <v-list-group
            v-for="item in sorted(actions)"
            :key="item.title"
            v-model="item.active"
             :prepend-icon="item.action"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <!-- <v-list-tile-sub-title>ACTIONS</v-list-tile-sub-title> -->
                </v-list-tile-content>
              </v-list-tile>
            </template>


            <Datapoint
                v-for="dp in sorted(item.items)"
                v-bind:key="dp.title"
                v-bind:dp="dp"
            ></Datapoint>

            <!-- <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                <v-list-tile-sub-title>This is a description for this datapoint</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>

                         <v-btn-toggle v-model="toggle_none">
                  <v-btn flat>
                    <v-icon>remove_circle</v-icon>
                  </v-btn>

                    <v-text-field style="width: 46px;height:30px;margin: 0;padding: 0;" class="text-md-center" value="0" />

                  <v-btn flat>
                    <v-icon>add_circle</v-icon>
                  </v-btn>
                
                </v-btn-toggle> 

              </v-list-tile-action>
              
            </v-list-tile> -->







          </v-list-group>
        </v-list>

        </v-card>
       </v-flex>


       <v-flex xs12 md4>
         <v-card dark color="primary">

          <v-list class="effects" >
            <v-subheader inset class="effects">EFFECTS</v-subheader>
          
          
          <v-list-group
            v-for="item in sorted(effects)"
            :key="item.title"
            v-model="item.active"
              :prepend-icon="item.action"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <!-- <v-list-tile-sub-title>ACTIONS</v-list-tile-sub-title> -->
                </v-list-tile-content>
              </v-list-tile>
            </template>


            <Datapoint
                v-for="dp in sorted(item.items)"
                v-bind:key="dp.title"
                v-bind:dp="dp"
            ></Datapoint>

            <!-- <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                <v-list-tile-sub-title>This is a description for this datapoint</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>

         
                  <v-btn  class="list-check">
                    <v-icon class="bluecheck">check_box</v-icon>
                  </v-btn>
                

              </v-list-tile-action>
              
            </v-list-tile> -->




          </v-list-group>
        </v-list>

         </v-card>
       </v-flex>

       </v-layout> 
       
</template>


<script>

import { mapState, mapGetters, mapActions } from 'vuex'
import Datapoint from "./Datapoint";

export default {

    components: {
        Datapoint
    },

    data : function() {
        return {
            toggle_none: null,
        };
    },

    mounted() {

    },

    destroyed() {

    },

    created() {
		this.$store.dispatch('Datapoints/getActions');
		this.$store.dispatch('Datapoints/getEffects');
	},

	computed: {
		...mapState({
			actions: state => state.Datapoints.actions,
			effects: state => state.Datapoints.effects
		})
	},
	
	methods: {
		...mapActions({
		
		}),
		...mapGetters({
		
		}),

		sorted: function(arr) {

			if (Array.isArray(arr))
			{
				return arr.slice().sort(function(a, b) {
					return a.order - b.order;
				});
			}

			return arr;
		}
	}
}
</script>
