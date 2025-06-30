import type { RouteRecordRaw } from "vue-router"

import { NavigationEnum } from "@/constants/navigation.constants"
import HomeView from "@/views/HomeView.vue"
import IncomesView from "@/views/IncomesView.vue"
import OrdersView from "@/views/OrdersView.vue"
import SalesView from "@/views/SalesView.vue"
import StocksView from "@/views/StocksView.vue"

export const routes: RouteRecordRaw[] = [
	{ name: "home", path: NavigationEnum.HOME, component: HomeView },
	{ name: "incomes", path: NavigationEnum.INCOMES, component: IncomesView },
	{ name: "orders", path: NavigationEnum.ORDERS, component: OrdersView },
	{ name: "sales", path: NavigationEnum.SALES, component: SalesView },
	{ name: "stocks", path: NavigationEnum.STOCKS, component: StocksView }
]
