import { LOGIN, ACTIVE_VIEW, SELECT_ACCOUNT, SELECT_TRANSACTION, SELECT_USER, UPDATE_ACCOUNTS_LIST, UPDATE_TRANSACTIONS_LIST, UPDATE_USERS_LIST } from '../constants/action-types'

export function login(payload) {
  return ({
    type: LOGIN,
    payload
  })
}

export function selectActiveView(payload) {
  return({
    type: ACTIVE_VIEW,
    payload
  })
}

export function selectAccount(payload) {
  return({
    type: SELECT_ACCOUNT,
    payload
  })
}

export function selectUser(payload) {
  return({
    type: SELECT_USER,
    payload
  })
}

export function updateAccountsList(payload) {
  return({
    type: UPDATE_ACCOUNTS_LIST,
    payload
  })
}

export function updateTransactionsList(payload) {
  return({
    type: UPDATE_TRANSACTIONS_LIST,
    payload
  })
}

export function updateUsersList(payload) {
  return({
    type: UPDATE_USERS_LIST,
    payload
  })
}