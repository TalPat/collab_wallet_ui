import { IAction } from './actionCreators'
import axios from 'axios'
import {adminToken} from "../development_scaffolding/misc"

export function accountsListReducer(action: IAction) {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return []
    case 'SELECT_ACCOUNT':
      axios({
        headers: {
          'Authorization': 'Bearer ' + adminToken,
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: 'http://localhost:3000/accounts/' + action.payload.accountID,
      })
      .then((res) => {
        return (res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      break
    case 'SELECT_USER':
      // something
    }
  return // something
}

export function selectedAccountReducer(action: IAction) {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return []
    case 'SELECT_ACCOUNT':
      return action.payload.accountID
    case 'SELECT_USER':
      // something
    }
  return // something
}

export function selectedUserReducer(action: IAction) {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        return []
    case 'SELECT_ACCOUNT':
      axios({
        headers: {
          'Authorization': 'Bearer ' + adminToken,
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: 'http://localhost:3000/accounts/' + action.payload.accountID,
      })
      .then((res) => {
        return (res.data.owner)
      })
      .catch((err) => {
        console.log(err)
      })
      break
    case 'SELECT_USER':
      return action.payload.userID
    }
  return // something
}

export function sessionReducer(action: IAction) {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return {
        token: action.payload.token,
        userID: action.payload.userID,
      }
    case 'SELECT_USER':
      // something
    }
  return // something
}

export function transactionListReducer(action: IAction) {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        return []
    case 'SELECT_ACCOUNT':
      axios({
        headers: {
          'Authorization': 'Bearer ' + adminToken,
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: 'http://localhost:3000/transactions/' + action.payload.accountID,
      })
      .then((res) => {
        return (res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      break
    case 'SELECT_USER':
          // something
    }
  return // something
}

export function usersListReducer(action: IAction) {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        axios({
          headers: {
            'Authorization': 'Bearer ' + adminToken,
            'Content-Type': 'application/json',
          },
          method: 'get',
          url: 'http://localhost:3000/users',
        })
        .then((res) => {
          return (res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        break
    case 'SELECT_USER':
      // something
    return // something
  }
}
