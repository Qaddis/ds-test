export const getContentType = () => ({
	"Content-Type": "application/json"
})

export const baseUrl = `http://${import.meta.env.VITE_HOST}/api`
export const key = import.meta.env.VITE_KEY

export const EndpointsEnum = {
	ORDERS: {
		GET: "/orders"
	},
	SALES: {
		GET: "/sales"
	},
	STOCKS: {
		GET: "/stocks"
	},
	INCOMES: {
		GET: "/incomes"
	}
} as const
