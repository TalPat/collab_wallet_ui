import {combineReducers, createStore, AnyAction} from 'redux'
import { AdminLoginAction, AdminLogoutAction, SelectActiveViewAction, User, AppSession, ADMIN_LOGIN, ADMIN_LOGOUT, UPDATE_USERS_LIST, SELECT_USER, SELECT_ACCOUNT, UPDATE_ACCOUNTS_LIST, UPDATE_TRANSACTIONS_LIST, SELECT_ACTIVE_VIEW, WalletAccount, Transaction } from './types';
import { selectActiveView } from './actionCreators';

const defaultSession: AppSession = {
  active: false,
  token: ''
}

function sessionReducer(oldSession = defaultSession, action: AdminLoginAction | AdminLogoutAction): AppSession {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        active: true,
        token: action.payload.token,
      }
    case ADMIN_LOGOUT:
      return {
        active: false,
        token: '',
      }
    default:  
      return oldSession
  }
}

function usersListReducer (oldUsersList: User[] = [], action: AnyAction): User[] {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return action.payload.arrayOfUsers
  }
  return oldUsersList
}

function selectedUserReducer(oldSelectedUser: number = 0, action: AnyAction): number {
  switch (action.type) {
    case SELECT_USER:
      return action.payload.userID
  }
  return oldSelectedUser
}

function accountsListReducer(oldAccountsList: WalletAccount[] = [], action: AnyAction): WalletAccount[] {
  switch (action.type) {
    case UPDATE_ACCOUNTS_LIST:
      return action.payload.arrayOfAccounts
  }
  return oldAccountsList
}

function selectedAccountReducer(oldSelectedAccount:number = 0, action: AnyAction): number {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return action.payload.accountID
  }
  return oldSelectedAccount
}

function transactionsListReducer(oldTransactionsList: Transaction[] = [], action: AnyAction): Transaction[] {
  switch (action.type) {
    case UPDATE_TRANSACTIONS_LIST:
      return action.payload.arrayOfTransactions
  }
  return oldTransactionsList
}

function activeViewReducer(oldView: string = 'listView', action: SelectActiveViewAction): string {
  switch (action.type) {
    case SELECT_ACTIVE_VIEW:
      return action.payload.view
  }
  return oldView
}

const rootReducer = combineReducers({
  session: sessionReducer,
  usersList: usersListReducer,
  selectedUser: selectedUserReducer,
  accountsList: accountsListReducer,
  selectedAccount: selectedAccountReducer,
  transactionsList: transactionsListReducer,
  activeView: activeViewReducer,
})

const store = createStore(rootReducer)

const action1 = selectActiveView('newView')
store.dispatch(action1)
const action2 = selectActiveView('updatedView')
store.dispatch(action2)

console.log(store.getState())