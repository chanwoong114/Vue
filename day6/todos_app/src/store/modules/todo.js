const todo =  {
  state: () => ({
		// todo 리스트 Array
    list: [
			// 개별 todo Object
      {
        id: 1638771553377,                // nowDateObj.getTime()
        content: 'Vue',                   // Todo 내용
        dueDateTime: '2021-12-09T00:00',  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: true,				        // 중요 할 일
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-10T00:00',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T00:00',
        isCompleted: true,
        isImportant: false,
      },
    ],
  }),
  getters: {
    importTodo(state) {
      const todos= state.list.filter(todo => {
        return todo.isImportant
      })
      return todos.filter(todo => {
        return !todo.isCompleted
      })
    },
    todayTodo(state) {
      var today = new Date()

      return state.list.filter(todo => {
        return Math.round(today.getTime()/(1000*60*60*24)) == Math.round(todo.id/(1000*60*60*24)) && !todo.isCompleted
      })
    }
  },
  mutations: {
    CREATE_LIST(state, todoContent, importSelect) {
      console.log(importSelect)
      var today = new Date()
      const todo = {
        id: today.getTime(),
        content: todoContent[0],
        dueDateTime: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}T00:00`,
        isCompleted: false,
        isImportant: todoContent[1],
      }
      state.list.push(todo)
    },
    SELECT_IMPORTANT(state, selectTodo) {
      state.list = state.list.map(todo => {
        if (todo === selectTodo) {
          todo.isImportant = !todo.isImportant
        }
        return todo
      })
    },
    SELECT_COMPLETED(state, selectTodo) {
      state.list = state.list.map(todo => {
        if (todo === selectTodo) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    },
    UPDATE_TODO(state, selectTodo) {
      state.list = state.list.map(todo => {
        if (todo === selectTodo[0]) {
          todo.content = selectTodo[1]
          todo.dueDateTime = `${selectTodo[2].getFullYear()}-${selectTodo[2].getMonth()+1}-${selectTodo[2].getDate()}T00:00`
        }
        return todo
      })
    }
  },
  actions: {
    createList(context, todoContent) {
      context.commit('CREATE_LIST', todoContent)
    },
    selectImportant(context, todo) {
      context.commit('SELECT_IMPORTANT', todo)
    },
    selectCompleted(context, todo) {
      context.commit('SELECT_COMPLETED', todo)
    },
    updateTodo(context, todo) {
      context.commit('UPDATE_TODO', todo)
    }
  }
}

export default todo
