<script setup lang="ts">
import { RouterLink } from "vue-router"

import { NavigationEnum } from "@/constants/navigation.constants"

interface IProps {
	link: (typeof NavigationEnum)[keyof typeof NavigationEnum]
	title: string
}

defineProps<IProps>()
</script>

<template>
	<article class="nav-card">
		<router-link :to="link" class="nav-card__link">
			<p class="nav-card__img">
				<slot />
			</p>

			<h3 class="nav-card__title">{{ title }}</h3>
		</router-link>
	</article>
</template>

<style scoped lang="scss">
.nav-card {
	background-color: var(--main-color);
	border: 3px solid var(--add-color);
	border-radius: 15px;
	transition: border-color 0.35s;

	&__link {
		display: flex;
		gap: 0 20px;
		align-items: center;
		padding: 20px;
	}

	&__img {
		fill: var(--text-color);
		transition: fill 0.35s;
	}

	&__title {
		font-family: var(--headers-font);
		font-size: 1.25rem;
		font-weight: bold;
		color: var(--text-color);
		transition: color 0.35s;
	}

	&:hover {
		border-color: var(--secondary-color);

		.nav-card__img {
			fill: var(--primary-color);
		}

		.nav-card__title {
			color: var(--primary-color);
		}
	}
}
</style>
