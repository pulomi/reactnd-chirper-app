import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared.js'
import TweetPage from './TweetPage'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import Nav from './Nav'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>{/* so we don't need to use another div that contains loadingBar and mainDiv */}
          <LoadingBar />
          <div className="container">
            <Nav/>
              {
                this.props.loading === true
                ? null
                : <div>
                    <Route path = '/' exact component={Dashboard} />
                    <Route path = '/tweet/:id' exact component={TweetPage} />
                    <Route path = '/new' exact component={NewTweet} />
                  </div>
              }
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)