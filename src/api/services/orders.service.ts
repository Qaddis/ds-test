import { EndpointsEnum, key } from "@/constants/api.constants"
import { instance } from "../api.interceptor"

class OrdersService {
	async get(
		dateFrom: string,
		dateTo: string,
		page: number = 1,
		limit: number = 100
	) {
		return await instance.get(EndpointsEnum.ORDERS.GET, {
			params: {
				dateFrom,
				dateTo,
				page,
				limit,
				key
			}
		})
	}
}

export default new OrdersService()
