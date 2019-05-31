export const ADMIN_LOGIN = 'ADMIN_LOGIN'
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST'
export const SELECT_USER = 'SELECT_USER'
export const UPDATE_ACCOUNTS_LIST = 'UPDATE_ACCOUNTS_LIST'
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'
export const UPDATE_TRANSACTIONS_LIST = 'UPDATE_TRANSACTIONS_LIST'
export const SELECT_ACTIVE_VIEW = 'SELECT_ACTIVE_VIEW'

export interface User {
  id: number,
  userName: string,
  role: string,
  dateCreated: string,
  deletedAt: string,
}

export interface WalletAccount {
  id: number,
  name: string,
  owner: number,
  deletedAt: string,
  lastUpdate: string,
}

export interface Transaction {
  id: number,
  debitAccountID: number,
  creditAccountID: number,
  amount: number,
  date: string,
}

export interface AdminLoginAction {
  type: typeof ADMIN_LOGIN
  payload: {
    token: string
  }
}

export interface AdminLogoutAction {
  type: typeof ADMIN_LOGOUT
}

export interface UpdateUsersListAction {
  type: typeof UPDATE_USERS_LIST
  payload: {
    arrayOfUsers: User[]
  }
}

export interface SelectUserAction {
  type: typeof SELECT_USER
  payload: {
    userID: number
  }
}

export interface UpdateAccountsListAction {
  type: typeof UPDATE_ACCOUNTS_LIST
  payload: {
    arrayOfAccounts: WalletAccount[]
  }
}

export interface SelectAccountAction {
  type: typeof SELECT_ACCOUNT
  payload: {
    accountID: number
  }
}

export interface UpdateTransactionsListAction {
  type: typeof UPDATE_TRANSACTIONS_LIST
  payload: {
    arrayOfTransactions: Transaction[]
  }
}

export interface SelectActiveViewAction {
  type: typeof SELECT_ACTIVE_VIEW
  payload: {
    view: string
  }
}

export interface AppSession {
  active: boolean
  token: string
}