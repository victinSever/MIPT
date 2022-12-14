import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
import image from './image.js'
import law from './law.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        image,
        law
    }
})
  
export default store