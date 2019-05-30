import { IAction } from './actionCreators'
import axios from 'axios'
import {adminToken} from "../development_scaffolding/misc"

interface ISession {
  active: boolean,
  token: string | undefined,
}

const defaultSession: ISession = {
  active: false,
  token: '',
}

export function sessionReducer(oldSession = defaultSession, action: IAction): ISession {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return {
        active: true,
        token: action.payload.token,
      }
    case 'ADMIN_LOGOUT':
      return {
        active: false,
        token: '',
      }
  }
  return oldSession
}

export function usersListReducer(oldUsersList = [], action: IAction) {
  switch (action.type) {
    case 'UPDATE_USERS_LIST':
      return action.payload.arrayOfUsers
  }
  return oldUsersList
}

export function selectedUserReducer(oldSelectedUser = '', action: IAction) {
  switch (action.type) {
    case 'SELECT_USER':
      return action.payload.userID
  }
  return oldSelectedUser
}

export function accountsListReducer(oldAccountsList = [], action: IAction) {
  switch (action.type) {
    case 'UPDATE_ACCOUNTS_LIST':
      return action.payload.arrayOfAccounts
  }
  return oldAccountsList
}

export function selectedAccountReducer(oldSelectedAccount = [], action: IAction) {
  switch (action.type) {
    case 'SELECT_ACCOUNT':
      return action.payload.accountID
  }
  return oldSelectedAccount
}

export function transactionsListReducer(oldTransactionsList = [], action: IAction) {
  switch (action.type) {
    case 'UPDATE_TRANSACTIONS_LIST':
      return action.payload.arrayOfTransactions
  }
  return oldTransactionsList
}

export function activeViewReducer(oldView = 'listView', action: IAction) {
  switch (action.type) {
    case 'SELECT_ACTIVE_VIEW':
      return action.payload.view
  }
  return oldView
}
