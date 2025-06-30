import { EndpointsEnum, key } from "@/constants/api.constants"
import { instance } from "../api.interceptor"

class SalesService {
	async get(
		dateFrom: string,
		dateTo: string,
		page: number = 1,
		limit: number = 100
	) {
		return await instance.get(EndpointsEnum.SALES.GET, {
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

export default new SalesService()
