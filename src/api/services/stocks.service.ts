import { EndpointsEnum, key } from "@/constants/api.constants"
import { instance } from "../api.interceptor"

class StocksService {
	async get(dateFrom: string, page: number = 1, limit: number = 100) {
		return await instance.get(EndpointsEnum.STOCKS.GET, {
			params: {
				dateFrom,
				page,
				limit,
				key
			}
		})
	}
}

export default new StocksService()
