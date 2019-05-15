<template>
	<v-layout align-center-start justify-center row wrap>

		<v-flex xs12 sm12 md6 lg5 xl4>
			<v-item-group class="pb-2" v-model="mood">

				<div class="pb-1" style="font-size: 16px;color: #85abca;">How are you feeling today?</div>

				<v-layout wrap>

					<v-flex md3>
						<v-item>
							<v-card
								@click.stop="setMood(100)"
								v-bind:class="{active : mood == 100}"
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
								@click.stop="setMood(75)"
								v-bind:class="{active : mood == 75}"
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
								@click.stop="setMood(50)"
								v-bind:class="{active : mood == 50}"
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
								@click.stop="setMood(25)"
								v-bind:class="{active : mood == 25}"
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

	</v-layout>
</template>


<script> 

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	data: () => ({

	}),
	components: {
		
	},
	computed: {
		...mapState({
			mood: state => state.Moods.mood
		})
	},
	created() {
		this.$store.dispatch('Moods/getSavedMood');
	},
	methods: {
		...mapActions({
			setMood: 'Moods/setMood'
		}),
		...mapGetters({
			getMood: 'Moods/getMood'
		})
	}
}
  
</script>

<style scoped>

.theme--dark.v-sheet.moodselect {
    height: 55px;
}

.theme--dark.v-sheet.moodselect.active {
    background-color: #0c0c0c;
    border-color: #000000;
}

.active .theme--dark.v-icon.face1 {
    color: #53b32e;
}
.active .theme--dark.v-icon.face2 {
    color: rgb(175, 179, 46);
}
.active .theme--dark.v-icon.face3 {
    color: rgb(179, 109, 46);
}
.active .theme--dark.v-icon.face4 {
    color: rgb(187, 54, 54);
}

.v-sheet.moodselect {
    background: #4989e9;
}

.v-sheet.moodselect .theme--dark.v-icon.face {
    color: #164892;
}

.v-sheet.moodselect .face_title {
    display:none;
}

.v-sheet.moodselect.active .face_title {
    display:inline-block;
}

.v-sheet.moodselect.face_good.active {
    border-color: rgb(89, 175, 46);
    background: rgb(89, 175, 46);
}

.v-sheet.moodselect.active.face_good .theme--dark.v-icon.face {
    color: #235d0d;
}

.v-sheet.moodselect.face_good .face_title{
    color: #235d0d;
    font-weight: bold;
    text-transform: uppercase;
}

.v-sheet.moodselect.face_okay.active {
    border-color: rgb(221, 226, 44);
    background: rgb(221, 226, 44);
    background: rgb(180, 210, 255);
}

.v-sheet.moodselect.active.face_okay .theme--dark.v-icon.face{
    color: rgb(108, 111, 21);
    color: rgb(76, 112, 167);
}

.v-sheet.moodselect.face_okay .face_title{
    color: rgb(108, 111, 21);
    color: rgb(76, 112, 167);
    font-weight: bold;
    text-transform: uppercase;
}

.v-sheet.moodselect.face_bad.active {
    border-color: rgb(197, 88, 31);
    background: rgb(197, 88, 31);
}

.v-sheet.moodselect.active.face_bad .theme--dark.v-icon.face {
    color: rgb(97, 40, 10);
}

.v-sheet.moodselect.face_bad .face_title{
    color: rgb(97, 40, 10);
    font-weight: bold;
    text-transform: uppercase;
}

.v-sheet.moodselect.face_verybad.active{
    border-color: rgb(175, 39, 39);
    background: rgb(175, 39, 39);
}

.v-sheet.moodselect.active.face_verybad .theme--dark.v-icon.face {
    color: rgb(84, 10, 10);
}

.v-sheet.moodselect.face_verybad .face_title{
    color: rgb(84, 10, 10);
    font-weight: bold;
    text-transform: uppercase;
}






/*

.theme--dark.v-sheet.moodselect {
    height: 55px;
}

.theme--dark.v-sheet.moodselect.active,.theme--dark.v-sheet.moodselect:hover {
    background-color: #0c0c0c;
    border-color: #000000;
}

.active .theme--dark.v-icon.face1,.moodselect:hover .theme--dark.v-icon.face1 {
    color: #53b32e;
}
.active .theme--dark.v-icon.face2,.moodselect:hover .theme--dark.v-icon.face2 {
    color: rgb(175, 179, 46);
}
.active .theme--dark.v-icon.face3,.moodselect:hover .theme--dark.v-icon.face3 {
    color: rgb(179, 109, 46);
}
.active .theme--dark.v-icon.face4,.moodselect:hover .theme--dark.v-icon.face4 {
    color: rgb(187, 54, 54);
}

.v-sheet.moodselect {
    background: #4989e9;
}

.v-sheet.moodselect .theme--dark.v-icon.face {
    color: #164892;
}

.v-sheet.moodselect .face_title {
    display:none;
}

.v-sheet.moodselect.active .face_title,.v-sheet.moodselect:hover .face_title {
    display:inline-block;
}

.v-sheet.moodselect.face_good.active,.v-sheet.moodselect.face_good:hover {
    border-color: rgb(89, 175, 46);
    background: rgb(89, 175, 46);
}

.v-sheet.moodselect.active.face_good .theme--dark.v-icon.face,.v-sheet.moodselect.face_good:hover .theme--dark.v-icon.face {
    color: #235d0d;
}

.v-sheet.moodselect.face_good .face_title{
    color: #235d0d;
    font-weight: bold;
    text-transform: uppercase;
}

.v-sheet.moodselect.face_okay.active,.v-sheet.moodselect.face_okay:hover {
    border-color: rgb(221, 226, 44);
    background: rgb(221, 226, 44);
    background: rgb(180, 210, 255);
}

.v-sheet.moodselect.active.face_okay .theme--dark.v-icon.face,.v-sheet.moodselect.face_okay:hover .theme--dark.v-icon.face {
    color: rgb(108, 111, 21);
    color: rgb(76, 112, 167);
}

.v-sheet.moodselect.face_okay .face_title{
    color: rgb(108, 111, 21);
    color: rgb(76, 112, 167);
    font-weight: bold;
    text-transform: uppercase;
}

.v-sheet.moodselect.face_bad.active,.v-sheet.moodselect.face_bad:hover {
    border-color: rgb(197, 88, 31);
    background: rgb(197, 88, 31);
}

.v-sheet.moodselect.active.face_bad .theme--dark.v-icon.face,.v-sheet.moodselect.face_bad:hover .theme--dark.v-icon.face {
    color: rgb(97, 40, 10);
}

.v-sheet.moodselect.face_bad .face_title{
    color: rgb(97, 40, 10);
    font-weight: bold;
    text-transform: uppercase;
}

.v-sheet.moodselect.face_verybad.active,.v-sheet.moodselect.face_verybad:hover {
    border-color: rgb(175, 39, 39);
    background: rgb(175, 39, 39);
}

.v-sheet.moodselect.active.face_verybad .theme--dark.v-icon.face,.v-sheet.moodselect.face_verybad:hover .theme--dark.v-icon.face {
    color: rgb(84, 10, 10);
}

.v-sheet.moodselect.face_verybad .face_title{
    color: rgb(84, 10, 10);
    font-weight: bold;
    text-transform: uppercase;
}
*/
</style>
