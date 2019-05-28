export const adminLogin = (userName: string, token: string) => {
  return {
    type: 'ADMIN_LOGIN',
    payload: {
      userName: userName,
      token: token
    }
  }
}