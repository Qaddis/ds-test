<script setup lang="ts">
import { RouterView } from "vue-router"
import AppHeader from "./components/AppHeader.vue"
</script>

<template>
	<app-header />

	<main class="main">
		<div class="main__wrapper">
			<router-view />
		</div>
	</main>
</template>

<style scoped lang="scss">
.main {
	margin-top: 35px;

	&__wrapper {
		max-width: 1140px;
		margin: 0 auto;
	}
}
</style>
