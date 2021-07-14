import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const storeData = {
    state : {
        currentUser: {},
        userLogin: {},
        currentId: 3,
        users: [
            {
                id: '1',
                name: 'Hoang Thien',
                email: 'thienho549@gmail.com',
                passWord: '1',
                phoneNumber: '0334298720'
            },
            {
                id: '2',
                name: 'John',
                email: '2',
                passWord: '2',
                phoneNumber: '0334298720'
            },
            {
                id: '3',
                name: 'Alaak',
                email: '3',
                passWord: '3',
                phoneNumber: '0334298720'
            },
        ]
    },
    getters: {
        currentUser: state => state.currentUser,
    },
    mutations: {
        SET_USERLOGIN (state, id){
            state.userLogin = state.users[state.users.findIndex(c => c.id === id)]
        },
        SET_CURRENTUSER (state, id){
            state.currentUser = state.users[state.users.findIndex(c => c.id === id)]
        },
        SET_NAME(state, newInfo) {
            state.users[state.users.findIndex(c => c.id ===  state.currentUser.id)].name = newInfo
        },
        SET_EMAIL(state, newInfo) {
            state.users[state.users.findIndex(c => c.id ===  state.currentUser.id)].email = newInfo
        },
        SET_PHONENUMBER(state, newInfo) {
            state.users[state.users.findIndex(c => c.id ===  state.currentUser.id)].phoneNumber = newInfo
        },
        ADD_USER(state,payload) {
            state.users.push({
                id: (state.currentId + 1).toString(),
                name: payload.name,
                email: payload.email,
                passWord: payload.passWord,
                phoneNumber: payload.phoneNumber
            })
        },
        DELETE_USER(state,payload) {
            state.users = state.users.filter((user) => {
                return user.id !== payload
            })
        },
        GET_USERSBYNAME(state, payload) {
            state.users = state.users.filter((user) => {
                return user.name.includes(payload)
            })
            console.log(state.users)
        }
    },
    actions: {

    }
}

const store = new VueX.Store(storeData)
export default store
