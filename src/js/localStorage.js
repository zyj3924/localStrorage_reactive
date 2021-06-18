import Vue from 'vue'

let target = null
let store = {}
let setItem = window.localStorage.setItem
let getItem = window.localStorage.getItem
localStorage.getItem = (key) => {
    if (!store[key]) store[key] = []
    if (target) store[key].push(target)
    return getItem.call(localStorage, key)
}
localStorage.setItem = (key, value) => {
    if (store[key]){
        store[key].forEach(item => {
            item[key] = value
        });
    }
    setItem.call(localStorage,key,value)
}
Vue.mixin({
    beforeCreate () {
        console.log('beforeCreate')
        target = this
    },
    created () {
        console.log('created')
        target = null
    }
})