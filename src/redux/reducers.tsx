import { IAction } from './actionCreators'
import axios from 'axios'
import {adminToken} from "../development_scaffolding/misc"

export function sessionReducer(action: IAction) {
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
  return // something
}

export function usersListReducer(action: IAction) {
  switch (action.type) {
    case 'UPDATE_USERS_LIST':
      return action.payload.arrayOfUsers
  }
  return // something
}

export function selectedUserReducer(action: IAction) {
  switch (action.type) {
    case 'SELECT_USER':
      return action.payload.userID
  }
  return // something
}

export function accountsListReducer(action: IAction) {
  switch (action.type) {
    case 'UPDATE_ACCOUNTS_LIST':
      return action.payload.arrayOfAccounts
  }
  return // something
}

export function selectedAccountReducer(action: IAction) {
  switch (action.type) {
    case 'SELECT_ACCOUNT':
      return action.payload.accountID
  }
  return // something
}

export function transactionsListReducer(action: IAction) {
  switch (action.type) {
    case 'UPDATE_TRANSACTIONS_LIST':
      return action.payload.arrayOfTransactions
  }
  return // something
}

export function activeViewReducer(action: IAction) {
  switch (action.type) {
    case 'SELECT_ACTIVE_VIEW':
      return action.payload.view
  }
  return // something
}
