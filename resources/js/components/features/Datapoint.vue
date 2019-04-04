<template>
    <div>

        <v-list-tile>

            <v-list-tile-content>
                <v-list-tile-title>{{ dp.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ dp.desc }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>

                <v-btn-toggle>
                    <v-btn flat @click="dp.val = dp.val-1">
                        <v-icon>remove_circle</v-icon>
                    </v-btn>

                    <v-text-field style="width:60px;height:30px;margin: 0;padding: 0;" class="text-md-center" @change="dataChange" v-model.number="dp.val" :value="dp.val" />

                    <v-btn flat @click="dp.val = dp.val+1">
                        <v-icon>add_circle</v-icon>
                    </v-btn>
                </v-btn-toggle> 

            </v-list-tile-action>

        </v-list-tile>

    </div>
</template>

<script>

export default {
    props: ['dp'],
	data : function() {
        return {};
    },
    watch: {
        dp: function (newValue, oldValue) {
            console.log(newValue+' - '+oldValue);
        }
    },
    methods : {
        dataChange() {
            console.log('changed');
        }
    }
}

</script>
