<template>

	<v-flex xs12 md4>
		<v-item-group class="pb-2" v-model="mood">

			<div style="font-size: 16px;color: #85abca;">How are you feeling today?</div>

			<v-layout wrap>

				<v-flex md3>
					<v-item>
						<v-card
							@click.stop="setMood('100')"
							v-bind:class="{active : mood == '100'}"
							class="d-flex align-center moodselect face_good "
							dark
							height="60">

							<div class="text-xs-center">
								<v-icon class="face face1" style="font-size: 45px;">sentiment_satisfied_alt</v-icon>
							</div>

							<div class="text-xs-left face_title">Great</div>

						</v-card>
					</v-item>
				</v-flex>

				<v-flex md3>
					<v-item>
						<v-card
							@click.stop="setMood('75')"
							v-bind:class="{active : mood == '75'}"
							class="d-flex align-center moodselect face_okay"
							dark
							height="60">

							<div class="text-xs-center">
								<v-icon class="face face2" style="font-size: 45px; ">sentiment_satisfied</v-icon>
							</div>

							<div class="text-xs-left face_title">Okay</div>

						</v-card>
					</v-item>
				</v-flex>

				<v-flex md3>
					<v-item>
						<v-card
							@click.stop="setMood('50')"
							v-bind:class="{active : mood == '50'}"
							class="d-flex align-center moodselect face_bad"
							dark
							height="60">

							<div class="text-xs-center">
								<v-icon class="face face3" style="font-size: 45px;">sentiment_very_dissatisfied</v-icon>
							</div>

							<div class="text-xs-left face_title">Ugh</div>

						</v-card>
					</v-item>
				</v-flex>

				<v-flex md3>
					<v-item>
						<v-card
							@click.stop="setMood('25')"
							v-bind:class="{active : mood == '25'}"
							class="d-flex align-center moodselect face_verybad "
							dark
							height="60">

							<div class="text-xs-center">
								<v-icon class="face face4" style="font-size: 45px; ">mood_bad</v-icon>
							</div>

							<div class="text-xs-left face_title">Bad</div>

						</v-card>
					</v-item>
				</v-flex>

			</v-layout>
		</v-item-group>
	</v-flex>

</template>


<script> 

export default {
	data: () => ({
		mood : 0
	}),
	components: {
		
	},
	created() {
		
	},
	methods: {
		setMood(mood) {
			if (mood==this.mood) {
				this.mood = 0;
			}
			else {
				this.mood = mood;
			}
		}
	}
}
  
</script>