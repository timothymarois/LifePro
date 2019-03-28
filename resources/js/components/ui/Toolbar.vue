<template>

    <v-toolbar app fixed clipped-left color="blue darken-3">
        <v-toolbar-side-icon @click.stop="$emit('toggle')"></v-toolbar-side-icon>
        <v-toolbar-title class="title-logo" style="margin:0 auto;">
            <span v-html="svg('lifepro-logo', '')" />
        </v-toolbar-title>
        <!-- <v-spacer></v-spacer> -->
        <v-btn icon>
            <v-icon>settings</v-icon>
        </v-btn>
    </v-toolbar>

</template>


<script> 

export default {
    data: () => ({
        
    }),
    components: {
        
    },
    created() {
        
    },
    props: {
        
    }
}
  
</script>