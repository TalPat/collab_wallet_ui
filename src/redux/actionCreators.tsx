import { number } from "prop-types";

interface IUser {
  id: number,
  userName: string,
  role: string,
  dateCreated: string,
  deletedAt: string,
}

interface IAccount {
  id: number,
  name: string,
  owner: number,
  deletedAt: string,
  lastUpdate: string,
}

interface ITransaction {
  id: number,
  debitAccountID: number,
  creditAccountID: number,
  amount: number,
  date: string,
}

export interface IAction {
  payload: {
    accountID?: number,
    token?: string,
    userID?: number,
    arrayOfUsers?: IUser[],
    arrayOfAccounts?: IAccount[],
    arrayOfTransactions?: ITransaction[],
    view?: string,
  },
  type: string,
}

export function adminLogin(token: string): IAction {
  return {
    payload: {
      token,
    },
    type: 'ADMIN_LOGIN',
  }
}

export function adminLogout(): IAction {
  return {
    payload: {},
    type: 'ADMIN_LOGOUT',
  }
}

export function updateUsersList(arrayOfUsers: IUser[]): IAction {
  return {
    payload: {
      arrayOfUsers,
    },
    type: 'UPDATE_USERS_LIST',
  }
}

export function selectUser(userID: number): IAction {
  return {
    payload: {
      userID,
    },
    type: 'SELECT_USER',
  }
}

export function updateAccountsList(arrayOfAccounts: IAccount[]): IAction {
  return {
    payload: {
      arrayOfAccounts,
    },
    type: 'UPDATE_ACCOUNTS_LIST',
  }
}

export function selectAccount(accountID: number): IAction {
  return {
    payload: {
      accountID,
    },
    type: 'SELECT_ACCOUNT',
  }
}

export function updateTransactionsList(arrayOfTransactions: ITransaction[]): IAction {
  return {
    payload: {
      arrayOfTransactions,
    },
    type: 'UPDATE_TRANSACTIONS_LIST',
  }
}

export function selectActiveView(newView: string): IAction {
  return {
    payload: {
      view: newView,
    },
    type: 'SELECT_ACTIVE_VIEW',
  }
}
