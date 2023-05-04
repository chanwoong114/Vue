import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: 'https://source.unsplash.com/featured/?espresso'
      },
      {
        title: '카페라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte'
      },
      {
        title: '카푸치노',
        price: 5000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?cappuccino'
      }
    ],
    sizeList: [
      {
        name: 'small',
        price: 500,
        selected: true,
      },
      {
        name: 'medium',
        price: 700,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      }
    ],
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      return state.orderList.reduce((total, order) => {
        return total + order.menu.price + order.size.price
      }, 0)
    }
  },
  mutations: {
    addOrder: function (state) {
      const menu = state.menuList.find(menu => {
        return menu.selected
      })

      const size = state.sizeList.find(size => {
        return size.selected
      })

      const order = {menu: menu, size: size}

      state.orderList.push(order)
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList = state.menuList.map((menu) => {
        if (menu.title === selectedMenu.title) {
          menu.selected = true
        } else {
          menu.selected = false
        }
        return menu
      })
    },
    
    UPDATE_SIZELIST: function (state, selectedSize) {
      state.sizeList = state.sizeList.map((size) => {
        if (size.name === selectedSize.name) {
          size.selected = true
        } else {
          size.selected = false
        }
        return size
      })
    },
  },
  actions: {
    updateMenuListAction: function(context, selectedMenu) {
      context.commit('updateMenuList', selectedMenu)
    },
    updateSizeList: function(context, selectedSize) {
      context.commit('UPDATE_SIZELIST', selectedSize)
    },
    addCart: function(context) {
      context.commit('addOrder')
    }
  },
  modules: {
  }
})