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
    shotList: [
      {
        name: '샷',
        count: 0 
      },
      {
        name: '바닐라 시럽',
        count: 0
      },
      {
        name: '카라멜 시럽',
        count: 0
      }
    ]
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      return state.orderList.reduce((total, order) => {
        return total + order.menu.price + order.size.price + order.shotCount * 500
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

      const order = {menu: menu, size: size, 
        shot: {...state.shotList[0]},
        banila: {...state.shotList[1]},
        caramel: {...state.shotList[2]},
        shotCount: state.shotList[0].count + state.shotList[1].count + state.shotList[2].count
      }
      state.shotList.forEach(shot => {
        return shot.count = 0
      })
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
    SHOT_CHANGE: function(state, shotstate) {
      if (shotstate[1]) {
        state.shotList.map(shot => {
          if (shot.name === shotstate[0]) {
            shot.count += 1
          }
          return shot
        })
      } else {
        state.shotList.map(shot => {
          if (shot.name === shotstate[0]) {
            if (shot.count === 0) {
              return
            }
            shot.count -= 1
          }
          return shot
        })
      }
    }
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
    },
    ShotChange(context, shotstate) {
      context.commit('SHOT_CHANGE', shotstate)
    },
  },
  modules: {
  }
})