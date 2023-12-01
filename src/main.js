import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import 'vue-loading-overlay/dist/css/index.css'

library.add(faUserSecret)

import { faEyeSlash, faEye, faLock, faUser ,faCartShopping, faCartArrowDown, faHeart, faChevronLeft, faChevronRight, faFilter, faChevronDown, faChevronUp, faArrowRight, faXmarkCircle, faCaretUp, faCaretDown, faArrowLeft, faStar, faGear, faArrowRightFromBracket, faXmark, faCamera, faEnvelope, faX, faMagnifyingGlass, faBars, faTrash, faPlus, faMinus, faPhone, faCircleExclamation, faCreditCard, faBarcode, faMoneyBillTransfer, faCartPlus, faVideo} from '@fortawesome/free-solid-svg-icons'

library.add(faEyeSlash, faEye, faLock, faUser,  faCartShopping, faCartArrowDown, faHeart, faChevronLeft, faChevronRight, faFilter, faChevronDown, faChevronUp, faArrowRight, faXmarkCircle, faCaretUp, faCaretDown, faArrowLeft, faStar, faGear, faArrowRightFromBracket, faXmark, faCamera, faEnvelope, faX, faMagnifyingGlass, faBars, faTrash, faPlus, faMinus, faPhone, faCircleExclamation, faCreditCard, faBarcode, faMoneyBillTransfer, faCartPlus, faVideo)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
