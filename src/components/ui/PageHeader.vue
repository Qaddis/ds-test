<script setup lang="ts"></script>

<template>
	<h2 class="page-header">
		<slot />
	</h2>
</template>

<style scoped lang="scss">
.page-header {
	font-size: 1.5rem;
	font-family: var(--headers-font);
	text-align: center;
	font-weight: bold;
	color: var(--primary-color);
	margin-bottom: 20px;
}
</style>
