import type { RouteRecordRaw } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import IncomesView from "@/views/IncomesView.vue"
import OrdersView from "@/views/OrdersView.vue"
import SalesView from "@/views/SalesView.vue"
import StocksView from "@/views/StocksView.vue"

export const routes: RouteRecordRaw[] = [
	{ name: "home", path: "/", component: HomeView },
	{ name: "incomes", path: "/incomes", component: IncomesView },
	{ name: "orders", path: "/orders", component: OrdersView },
	{ name: "stocks", path: "/stocks", component: StocksView },
	{ name: "sales", path: "/sales", component: SalesView }
]
