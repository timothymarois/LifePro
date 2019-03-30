<template>

	<v-container grid-list-md text-xs-center pa-0>

		<Moods />   
		<Datapoints />

	</v-container>

</template>

<script>

import Moods from "../components/features/Moods";
import Datapoints from "../components/features/Datapoints";

export default {
	name: 'dashboard',

	components: {
		Moods,
		Datapoints
	},

	data : function() {
		return {
			page : 'Dashboard',
			switch1: false
		};
	},

	mounted() {

	},

	destroyed() {

	},

	created() {

	}
}
</script>
