export interface IAction {
  type: string,
  payload: {
    accountID?: number,
    token?: string,
    userID?: number,
  }
}

export const adminLogin = (userID: number, token: string) => {
  return {
    payload: {
      token,
      userID,
    },
    type: 'ADMIN_LOGIN',
  }
}

export const selectUser = (userID: number) => {
  return {
    payload: {
      userID,
    },
    type: 'SELECT_USER',
  }
}

export const selectAccount = (accountID: number) => {
  return {
    payload: {
      accountID,
    },
    type: 'SELECT_ACCOUNT',
  }
}
