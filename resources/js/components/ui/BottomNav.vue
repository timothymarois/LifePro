<template>
	<v-card
	class="hide-overflow"
	height="200px"
	>
		<v-bottom-nav
			:active.sync="activeBtn"
			fixed
			app
			dark
			value="1"
		>
			<v-btn flat color="teal">
				<span>Recents</span>
				<v-icon>history</v-icon>
			</v-btn>

			<v-btn flat color="teal">
				<span>Favorites</span>
				<v-icon>favorite</v-icon>
			</v-btn>

			<v-btn flat color="teal">
				<span>Nearby</span>
				<v-icon>place</v-icon>
			</v-btn>
		</v-bottom-nav>
	</v-card>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 1
      }
    }
  }
</script>