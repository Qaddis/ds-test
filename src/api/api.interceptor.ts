import axios from "axios"

import { baseUrl, getContentType } from "@/constants/api.constants"

export const instance = axios.create({
	baseURL: baseUrl,
	headers: getContentType()
})
