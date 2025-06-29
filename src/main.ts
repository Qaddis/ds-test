import { createApp } from "vue"

import App from "./App.vue"
import "./scss/globals.scss"

import router from "./router"

createApp(App).use(router).mount("#app")
