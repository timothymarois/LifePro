<template>

	<v-container grid-list-md text-xs-center pa-1>

		<Moods /> 
		<DashboardStats />
		<!-- <Datapoints /> -->

	</v-container>

</template>

<script>

import Moods from "../components/features/Moods";
import DashboardStats from "../components/features/DashboardStats";
import Datapoints from "../components/features/Datapoints";

export default {
	name: 'dashboard',

	components: {
		Moods,
		DashboardStats,
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
