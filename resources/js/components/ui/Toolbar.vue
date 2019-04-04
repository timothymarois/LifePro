<template>

    <v-toolbar app fixed clipped-left color="blue darken-3">
        <v-toolbar-side-icon @click.stop="$emit('toggle')"></v-toolbar-side-icon>
        
        <v-toolbar-title class="title-logo hidden-sm-and-down" style="margin-right: 20px;margin-left: 10px;">
            <span v-html="svg('lifepro-logo', '')" />
        </v-toolbar-title>

        <!-- <v-spacer></v-spacer> -->
        
        <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search"
        ></v-text-field>

        <Settings />

    </v-toolbar>

</template>


<script> 

import Settings from "../features/Settings";

export default {
    data: () => ({
        
    }),
    components: {
        Settings
    },
    created() {
        
    },
    props: {
        
    }
}
  
</script>