export const adminLogin = (userName: string, token: string) => {
  return {
    type: 'ADMIN_LOGIN',
    payload: {
      userName: userName,
      token: token
    }
  }
}

export const selectUser = (userName: string) => {
  return {
    type: 'SELECT_USER',
    payload: {
      userName: userName
    }
  }
}

export const selectAccount = (accountName: string) => {
  return {
    type: 'SELECT_ACCOUNT',
    payload: {
      accountName: accountName
    }
  }
}