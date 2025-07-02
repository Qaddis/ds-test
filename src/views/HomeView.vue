<script setup lang="ts">
import NavCard from "@/components/pages/Home/NavCard.vue"
import PageHeader from "@/components/ui/PageHeader.vue"
</script>

<template>
	<section class="home-page">
		<page-header>Главная</page-header>

		<nav class="home-page__nav">
			<nav-card link="/incomes" title="Доходы">
				<svg
					height="48"
					viewBox="0 0 48 48"
					width="48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h48v48H0z" fill="none" />
					<path
						d="M42 36v2c0 2.21-1.79 4-4 4H10c-2.21 0-4-1.79-4-4V10c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4v2H24c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h18zm-18-4h20V16H24v16zm8-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
					/>
				</svg>
			</nav-card>

			<nav-card link="/orders" title="Заказы">
				<svg
					height="48"
					viewBox="0 0 48 48"
					width="48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h48v48H0z" fill="none" />
					<path
						d="M40 12h-8V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-12 0h-8V8h8v4z"
					/>
				</svg>
			</nav-card>

			<nav-card link="/sales" title="Продажи">
				<svg
					height="48"
					viewBox="0 0 48 48"
					width="48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"
					/>
					<path d="M0 0h48v48H0z" fill="none" />
				</svg>
			</nav-card>

			<nav-card link="/stocks" title="Склады">
				<svg
					height="48"
					viewBox="0 0 48 48"
					width="48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h48v48H0z" fill="none" />
					<path
						d="M40 8H8v4h32V8zm2 20v-4l-2-10H8L6 24v4h2v12h20V28h8v12h4V28h2zm-18 8H12v-8h12v8z"
					/>
				</svg>
			</nav-card>
		</nav>
	</section>
</template>

<style scoped lang="scss">
.home-page {
	&__nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
