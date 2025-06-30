import { EndpointsEnum, key } from "@/constants/api.constants"
import { instance } from "../api.interceptor"

class IncomesService {
	async get(
		dateFrom: string,
		dateTo: string,
		page: number = 1,
		limit: number = 100
	) {
		return await instance.get(EndpointsEnum.INCOMES.GET, {
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

export default new IncomesService()
