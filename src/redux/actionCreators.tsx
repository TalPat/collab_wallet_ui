export interface IAction {
  type: string,
  payload: {
    accountName?: string,
    token?: string,
    userName?: string,
  }
}

export const adminLogin = (userName: string, token: string) => {
  return {
    payload: {
      token,
      userName,
    },
    type: 'ADMIN_LOGIN',
  }
}

export const selectUser = (userName: string) => {
  return {
    payload: {
      userName,
    },
    type: 'SELECT_USER',
  }
}

export const selectAccount = (accountName: string) => {
  return {
    payload: {
      accountName,
    },
    type: 'SELECT_ACCOUNT',
  }
}
