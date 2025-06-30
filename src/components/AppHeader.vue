<script setup lang="ts">
import { NavigationEnum } from "@/constants/navigation.constants"
import { RouterLink } from "vue-router"
</script>

<template>
	<header class="header">
		<div class="header__wrapper">
			<h1 class="header__title">
				<router-link :to="NavigationEnum.HOME" class="header__title-link">
					WB Stats
				</router-link>
			</h1>

			<nav class="header__nav">
				<router-link
					:to="NavigationEnum.INCOMES"
					class="header__link"
					active-class="header__link--active"
				>
					Доходы
				</router-link>
				<router-link
					:to="NavigationEnum.ORDERS"
					class="header__link"
					active-class="header__link--active"
				>
					Заказы
				</router-link>
				<router-link
					:to="NavigationEnum.SALES"
					class="header__link"
					active-class="header__link--active"
				>
					Продажи
				</router-link>
				<router-link
					:to="NavigationEnum.STOCKS"
					class="header__link"
					active-class="header__link--active"
				>
					Склады
				</router-link>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	width: 100%;
	height: auto;
	background-color: var(--main-color);
	border-bottom: 3px solid var(--add-color);
	padding: 20px;

	position: sticky;
	top: 0;
	left: 0;
	z-index: 12;

	&__wrapper {
		max-width: 1140px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__title {
		font-size: 2rem;
		font-family: var(--headers-font);
		font-weight: bold;

		&-link {
			color: var(--primary-color);
			transition: color 0.35s;

			&:hover {
				color: var(--secondary-color);
			}
		}
	}

	&__nav {
		display: flex;
		align-items: center;
		gap: 0 15px;
	}

	&__link {
		font-size: 1.15rem;
		color: var(--text-color);
		position: relative;
		transition: opacity 0.25s;

		&::after {
			content: "";
			position: absolute;
			bottom: -3px;
			left: 0;

			display: block;
			width: 100%;
			height: 2px;
			border-radius: 1.5px;
			background-color: var(--primary-color);

			opacity: 0;
			transition: opacity 0.35s;
		}

		&--active::after {
			opacity: 1;
		}

		&:not(.header__link--active):hover {
			opacity: 0.65;
		}
	}
}
</style>
