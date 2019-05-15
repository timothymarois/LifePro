<template>

    <v-toolbar app fixed clipped-left color="blue darken-3">
        <v-toolbar-side-icon @click.stop="$emit('toggle')"></v-toolbar-side-icon>
        
        <!-- <v-toolbar-title class="title-logo hidden-sm-and-down" style="margin-right: 20px;margin-left: 10px;">
            <span v-html="svg('lifepro-logo', '')" />
        </v-toolbar-title> -->

        <v-toolbar-title class="title-logo" style="margin:0 auto">
            <span v-html="svg('lifepro-logo', '')" />
        </v-toolbar-title>

        <!-- <v-spacer></v-spacer>  -->
        
        <!-- <v-text-field
            flat
            solo-inverted
            clearable
            hide-details
            prepend-inner-icon="search"
            label="Search"
        ></v-text-field> -->

        <!-- <v-autocomplete
             color="info"
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            prepend-inner-icon="search"
            clearable
            class="mx-3"
            flat
            hide-no-data
            hide-details
            label="Search"
            solo-inverted
            ></v-autocomplete> --> 

        <Settings />

    </v-toolbar>

</template>


<script> 

import Settings from "../features/Settings";

export default {
    data: () => ({
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
            'Abdominal pain',
            'Asthma Attacks',
            'Back Pain',
            'Chest Pain',
            'Constipation',
            'Diarrhea',
            'Dizziness',
            'Fever',
            'Headache',
            'Heart Palpitation',
            'Hip Pain',
            'Inset Bites',
            'Joint Pain',
            'Knee Pain',
            'Leg Pain',
            'Nausea or Vomiting',
            'Neck Pain',
            'Night Sweats',
            'Numbness or Tingling',
            'Pelvic Pain',
            'Seizure',
            'Shortness of breath',
            'Shoulder Pain',
            'Skin Rashes',
            'Sore Arms/Hands ',
            'Sore Muscles ',
            'Sunburn',
            'Swelling',
            'Wheezing'
        ]
    }),
    components: {
        Settings
    },
    created() {
        
    },
    props: {
        
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    }
}
  
</script>