import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
import image from './image.js'
import law from './law.js'
import tool from './tool.js'
import ip from './ip.js'
import passage from './passage.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        image,
        law,
        tool,
        ip,
        passage
    }
})
  
export default store