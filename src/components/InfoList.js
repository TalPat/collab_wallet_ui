import React from 'react'
import { connect } from 'react-redux'
import { selectAccount, selectUser, updateAccountsList, updateTransactionsList, updateUsersList } from '../actions/index'
import axios from 'axios'
import { decode } from 'jsonwebtoken'

const mapStateToProps = (state) => {
  return ({
    userList: state.userList,
    selectedUser: state.selectedUser,
    accountList: state.accountList,
    selectedAccount: state.selectedAccount,
    transactionList: state.transactionList
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    selectAccount: (accountId) => dispatch(selectAccount(accountId)),
    selectUser: (userId) => dispatch(selectUser(userId)),
    updateAccountsList: (accountArr) => dispatch(updateAccountsList(accountArr)),
    updateTransactionsList: (transactionArr) => dispatch(updateTransactionsList(transactionArr)),
    updateUsersList: (userArr) => dispatch(updateUsersList(userArr))
  })
}

class ConnectedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: [],
      transactionList: '',
      accountList: []
    };
    let token = sessionStorage.getItem('token')


    /**** */console.log(props)


    axios.get('http://localhost:3000/users/', {
      headers: {
        'Authorization': 'bearer '+ token
      }
    }).then(response => {
      console.log(response)
      props.updateUsersList(response.data)
      this.setState({
        userList: response.data.map((data, index) => {
          console.log(data)
          return (
            <div 
              key={index}
              userid={data.id}
              onClick={() => this.selectUser(data.id)}
            >
              {'username: '+data.userName}
            </div>
          );
        })
      })
    })


    this.selectAccount = this.selectAccount.bind(this)
    this.selectUser = this.selectUser.bind(this)
  }

  selectAccount(account) {
    let transArr = []
    console.log('http://localhost:3000/transactions/?account='+account)
    axios.get('http://localhost:3000/transactions/?account='+account, {
      headers: {
        'Authorization': 'bearer '+ sessionStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      this.props.updateTransactionsList(response.data)
      transArr = response.data.map((data, index) => {
        console.log(data)
        return (
          <div
            key={index}
          >
            <div className="row">
              <div className="eight columns">{data.debitAccountId===account ? data.creditAccountId : account}</div>
              <div className="two columns">{data.debitAccountId===account ? '-'+data.amount : '_'}</div>
              <div className="two columns">{data.debitAccountId===account ? '_' : data.amount}</div>
            </div>
          </div>
        );
      })
      axios.get('http://localhost:3000/accounts/'+account, {
        headers: {
          'Authorization': 'bearer '+ sessionStorage.getItem('token')
        }
      }).then(response => {
        console.log(response)
        this.setState({
          transactionList: 
            <div>
              <div className="row">
                <div className="eight columns">
                  Balance:
                </div>
                <div className="four columns">
                  {response.data.balance}
                </div>
              </div><br/>
              <div className="row">
                <div className="eight columns">Transaction id</div>
                <div className="two columns">Debit</div>
                <div className="two columns">Credit</div>
              </div>
              <div>
                {transArr}
              </div>
            </div>
        })
      })
    })
    .catch(error => {
      this.setState({
        transactionList: "Unable to fetch data"
      })
    })
  }

  selectUser(id) {
    console.log('http://localhost:3000/accounts/?owner='+id)
    axios.get('http://localhost:3000/accounts/?owner='+id, {
      headers: {
        'Authorization': 'bearer '+ sessionStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      this.props.updateAccountsList(response.data)
      this.props.updateTransactionsList([])
      this.setState({
        accountList: response.data.map((data, index) => {
          console.log(data)
          return (
            <div 
              key={index}
              accountid={data.id}
              onClick={() => this.selectAccount(data.id)}
            >
              {'account name: '+data.name}
            </div>
          );
        }),
        transactionList: ''
      })
    })
    .catch(error => {
      this.setState({
        accountList: "Unable to fetch data"
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h2>View</h2>
        <div className="row">
          <div className="three columns"><h4>Users</h4></div>
          <div className="three columns"><h4>Accounts</h4></div>
          <div className="six columns"><h4>Transactions</h4></div>
        </div>
        <div className="row">
          <div className="three columns">{this.state.userList}</div>
          <div className="three columns">{this.state.accountList}</div>
          <div className="six columns">{this.state.transactionList}</div>
        </div>
      </div>
    )
  }
}





const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)

export default List