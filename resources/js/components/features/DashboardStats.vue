<template>

    <div>

      <v-layout align-center-start justify-center row wrap style="padding-top:0;" >

       <!-- <v-flex xs12>
         <div style="text-align:left">STATS</div>
       </v-flex> -->

      <!-- <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;       background-image:linear-gradient(rgb(144, 68, 181), rgb(114, 17, 160));">

          <v-layout row wrap>
            <v-flex  style="    padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Sleep Analysis</div>
            </v-flex>
            <v-flex xs4 pr-2>
              <div style="font-size: 26px;    height: 32px;text-align:right">6<span style="font-size:15px">h</span> 30<span style="font-size:15px">m</span></div>
              <div style="font-weight: 300;text-align:right">asleep</div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>


      <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;   background-image: linear-gradient(rgb(220, 103, 18), rgb(158, 74, 14));">

          <v-layout row wrap>
            <v-flex style="    padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Steps</div>
            </v-flex>
            <v-flex xs4 pr-2>
              <div style="font-size: 26px;height: 32px;text-align:right">12,510</div>
              <div style="font-weight: 300;text-align:right">steps</div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>


      <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;    background-image:linear-gradient(rgb(183, 50, 50), rgb(136, 23, 23));">

          <v-layout row wrap>
            <v-flex style="    padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Heart Rate</div>
            </v-flex>
            <v-flex xs4 pr-2>
              <div style="font-size: 26px;    height: 32px;text-align:right">68 <span style="font-size: 15px;">bpm</span></div>
              <div style="font-weight: 300;text-align:right">average</div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex> -->

    </v-layout> 


    <v-layout align-center-start justify-center row wrap style="padding-top:5px;" >

        <v-flex xs12 >
        <v-card dark color="primary" style="padding:10px; background: none !important;border: 1px dashed #327dce !important;    color: #3d99fd;    color: rgb(255, 255, 255);    background: rgb(18, 103, 192) !important;border:0">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs12>
             <div class="text-xs-left" style="font-size:16px;font-weight:400">ACTIONS</div> 
            </v-flex>
           
          </v-layout> 

        </v-card>
      </v-flex>

       
       <v-flex xs12 >
        <v-card dark color="primary" style="padding:10px;     background-image: linear-gradient(rgb(71, 151, 239), rgb(37, 108, 185)); background: none !important;border: 4px solid #1466c0 !important;    background: #1267c024 !important;"  >

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Ibuprofen</div>
              <div class="text-xs-left" style="font-size:14px;font-weight:300">Medications</div>
            </v-flex>
            <v-flex xs4 align-center justify-center pr-2>
              <div style="font-size: 26px;text-align:right">300 <span style="font-size: 15px;">mg</span></div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>


      <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;     background-image: linear-gradient(rgb(71, 151, 239), rgb(37, 108, 185)); background: none !important;border: 4px solid #1466c0 !important;    background: #1267c024 !important;">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Coffee</div>
              <div class="text-xs-left" style="font-size:14px;font-weight:300">Beverages</div>
            </v-flex>
            <v-flex xs4 align-center justify-center pr-2>
              <div style="font-size: 26px;text-align:right">2 <span style="font-size: 15px;">cups</span></div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>


      <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;     background-image: linear-gradient(rgb(71, 151, 239), rgb(37, 108, 185)); background: none !important;border: 4px solid #1466c0 !important;    background: #1267c024 !important;">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Haircut</div>
              <div class="text-xs-left" style="font-size:14px;font-weight:300">Personal</div>
            </v-flex>
             <v-flex xs4 align-center justify-center pr-2>
              <div style="font-size: 26px;text-align:right"><v-icon class="face face1" style="font-size: 40px;color: #fff;    color: rgb(230, 176, 70);">check_box</v-icon></div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>


      <v-flex xs12>
         <div style="text-align:center;    color: #6a93bf;    "><v-chip color="primary" text-color="white" style="    background-color: rgb(18, 103, 192) !important;border-color: rgb(18, 103, 192) !important;padding: 0px 29px;">ADD</v-chip></div>
       </v-flex>

    </v-layout>




    <v-layout align-center-start justify-center row wrap style="padding-top:5px;">

       <v-flex xs12>
        <v-card dark color="primary" style="padding:10px; background: none !important;border:1px dashed rgb(195, 86, 87) !important;    color: #da6061;color: rgb(255, 255, 255);border:0;    background: #c75b5d !important;">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs12>
              <div class="text-xs-left" style="font-size:16px;font-weight:400">EFFECTS</div>
            </v-flex>
         
          </v-layout>

        </v-card>
      </v-flex>

       <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;    background-image: linear-gradient(rgb(220, 115, 116), rgb(179, 69, 69)); background: none !important;border: 4px solid #c75c5d !important;    background: #c75b5d0d !important;">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Back Pain</div>
              <div class="text-xs-left" style="font-size:14px;font-weight:300">Symptom</div>
            </v-flex>
            <v-flex xs4 align-center justify-center pr-2>
              <div style="font-size: 26px;text-align:right">4 <span style="font-size: 15px;">of 10</span></div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;    background-image: linear-gradient(rgb(220, 115, 116), rgb(179, 69, 69)); background: none !important;border: 4px solid #c75c5d !important;    background: #c75b5d0d !important;">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Headache</div>
              <div class="text-xs-left" style="font-size:14px;font-weight:300">Symptom</div>
            </v-flex>
            <v-flex xs4 align-center justify-center pr-2>
              <div style="font-size: 26px;text-align:right"><v-icon class="face face1" style="font-size: 40px;color: #fff;    color: rgb(230, 176, 70);">check_box</v-icon></div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>

       <v-flex xs12>
        <v-card dark color="primary" style="padding:10px;    background-image: linear-gradient(rgb(220, 115, 116), rgb(179, 69, 69)); background: none !important;border: 4px solid #c75c5d !important;    background: #c75b5d0d !important;">

          <v-layout align-center justify-center row wrap>
            <v-flex  style="padding: 5px 10px;" xs8>
              <div class="text-xs-left" style="font-size:20px;font-weight:400">Dream</div>
              <div class="text-xs-left" style="font-size:14px;font-weight:300">Memory</div>
            </v-flex>
            <v-flex xs4 align-center justify-center pr-2>
              <div style="font-size: 26px;text-align:right"><v-icon class="face face1" style="font-size: 40px;color: #fff;    color: rgb(230, 176, 70);">check_box</v-icon></div>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>


       


      

    </v-layout>



    <v-bottom-sheet v-model="sheet" style="    height: 100%;">
      <template v-slot:activator>
        <v-flex xs12>
         <div style="text-align:center;    color: #6a93bf;    "><v-chip color="primary" text-color="white" style="    background-color: #c75b5d !important;border-color: rgb(18, 103, 192) !important;padding: 0px 29px;">ADD</v-chip></div>
       </v-flex>


      </template>
      <v-list style="    height: 100%;">
        <v-subheader>Add Effect</v-subheader>
        <!-- <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile> -->
      </v-list>
    </v-bottom-sheet>



    </div>
       
</template>


<script>

export default {

    components: {
    },

    data : function() {
        return {
           sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ]
        };
    },

    mounted() {

    },

    destroyed() {

    },

    created() {

	},

	computed: {

	},
	
	methods: {


	}
}
</script>
