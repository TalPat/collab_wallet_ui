import { LOGIN, ACTIVE_VIEW, SELECT_ACCOUNT, SELECT_USER, UPDATE_ACCOUNTS_LIST, UPDATE_TRANSACTIONS_LIST, UPDATE_USERS_LIST } from '../constants/action-types'
import LoginForm from '../components/LoginForm'

const initialState = {
  session: {
    token : '',
    active: false
  },
  activeView: LoginForm,
  userList: [],
  selectedUser: 0,
  accountList: [],
  selectedAccount: 0,
  transactionList: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return (Object.assign({}, state, {session: action.payload}))
    case ACTIVE_VIEW:
      return (Object.assign({}, state, {activeView: action.payload}))
    case SELECT_ACCOUNT:
      return (Object.assign({}, state, {selectedAccount: action.payload}))
    case SELECT_USER:
      return (Object.assign({}, state, {selectedUser: action.payload}))
    case UPDATE_ACCOUNTS_LIST:
      return (Object.assign({}, state, {accountList: action.payload}))
    case UPDATE_TRANSACTIONS_LIST:
      return (Object.assign({}, state, {transactionList: action.payload}))
    case UPDATE_USERS_LIST:
      return (Object.assign({}, state, {userList: action.payload}))
    default:
      return (state)
  }
}

export default rootReducer