import { IAction } from './actionCreators'
import axios from 'axios'
import {adminToken} from "../development_scaffolding/misc"

export const accountsListReducer = (action: IAction) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return []
    case 'SELECT_ACCOUNT':
      // somehting
    case 'SELECT_USER':
      // something
    return // something
  }
}

export const selectedAccountReducer = (action: IAction) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        return []
    case 'SELECT_ACCOUNT':
      // somehting
    case 'SELECT_USER':
      // something
    return // something
  }
}

export const selectedUserReducer = (action: IAction) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        return []
    case 'SELECT_ACCOUNT':
      // somehting
    case 'SELECT_USER':
      // something
    return // something
  }
}

export const sessionReducer = (action: IAction) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return {
        token: action.payload.token,
        userID: action.payload.userID,
      }
    case 'SELECT_ACCOUNT':
      // somehting
    case 'SELECT_USER':
      // something
    return // something
  }
}

export const transactionListReducer = (action: IAction) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        return []
    case 'SELECT_ACCOUNT':
      // somehting
    case 'SELECT_USER':
      // something
    return // something
  }
}

export const usersListReducer = (action: IAction) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
        axios({
          headers: {
            'Authorization': 'Bearer ' + adminToken,
            'Content-Type': 'application/json',
          },
          method: 'get',
          url: 'http://localhost:3000/users',
        }) // .then(function(response){return response.json() })
        .then((res) => {
          return (res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        break
    case 'SELECT_ACCOUNT':
      // somehting
    case 'SELECT_USER':
      // something
    return // something
  }
}
