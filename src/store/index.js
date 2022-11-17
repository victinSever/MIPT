import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
import image from './image.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        image
    }
})

export default store