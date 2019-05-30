export interface IAction {
  type: string,
  payload: {
    accountID?: number,
    token?: string,
    userID?: number,
  }
}

export function adminLogin(userID: number, token: string) {
  return {
    payload: {
      token,
      userID,
    },
    type: 'ADMIN_LOGIN',
  }
}

export function selectUser(userID: number) {
  return {
    payload: {
      userID,
    },
    type: 'SELECT_USER',
  }
}

export function selectAccount(accountID: number) {
  return {
    payload: {
      accountID,
    },
    type: 'SELECT_ACCOUNT',
  }
}
