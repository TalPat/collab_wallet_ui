import { AdminLoginAction, AdminLogoutAction, User, UpdateAccountsListAction, UpdateUsersListAction, SelectUserAction, WalletAccount, SelectAccountAction, Transaction, UpdateTransactionsListAction, SelectActiveViewAction } from './types'

export function adminLogin(token: string): AdminLoginAction {
  return {
    payload: {
      token,
    },
    type: 'ADMIN_LOGIN',
  }
}

export function adminLogout(): AdminLogoutAction {
  return {
    type: 'ADMIN_LOGOUT',
  }
}

export function updateUsersList(arrayOfUsers: User[]): UpdateUsersListAction {
  return {
    payload: {
      arrayOfUsers,
    },
    type: 'UPDATE_USERS_LIST',
  }
}

export function selectUser(userID: number): SelectUserAction {
  return {
    payload: {
      userID,
    },
    type: 'SELECT_USER',
  }
}

export function updateAccountsList(arrayOfAccounts: WalletAccount[]): UpdateAccountsListAction {
  return {
    payload: {
      arrayOfAccounts,
    },
    type: 'UPDATE_ACCOUNTS_LIST',
  }
}

export function selectAccount(accountID: number): SelectAccountAction {
  return {
    payload: {
      accountID,
    },
    type: 'SELECT_ACCOUNT',
  }
}

export function updateTransactionsList(arrayOfTransactions: Transaction[]): UpdateTransactionsListAction {
  return {
    payload: {
      arrayOfTransactions,
    },
    type: 'UPDATE_TRANSACTIONS_LIST',
  }
}

export function selectActiveView(newView: string): SelectActiveViewAction {
  return {
    payload: {
      view: newView,
    },
    type: 'SELECT_ACTIVE_VIEW',
  }
}
