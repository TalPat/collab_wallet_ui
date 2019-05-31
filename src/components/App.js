import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import InfoList from './InfoList'
import { selectActiveView } from '../actions/index'

const mapStateToProps = (state) => {
  return ({
    activeView: state.activeView
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    selectActiveView: (activeView) => dispatch(selectActiveView(activeView))
  })
}



// const App = () => (
//   <div className='row mt-5'>
//     <div className='col-md-4 offset-md-1'>
//       <LoginForm />
//     </div>
//   </div>
// )

class ConnectedApp extends Component {
  constructor(props) {
    super(props)

    console.log(props)
    let token = sessionStorage.getItem('token')
    if (!token) {
      this.props.selectActiveView(LoginForm)
    } else {
      this.props.selectActiveView(InfoList)
    }
  }

  render() {
    const ActiveView = this.props.activeView
    return (
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-1'>
          <ActiveView />
        </div>
      </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App