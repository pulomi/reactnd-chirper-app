import React from 'react'
import { connect } from 'react-redux'
import {formatTweet} from '../utils/helpers.js'

class Tweet extends React.Component{
    render(){
        return (
            <div className='tweet'>
                <ul>
                <li key={this.props.id}>
                    {this.props.authedUser}:{this.props.tweet.name}:{this.props.tweet.text}
                </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({tweets, users, authedUser}, {id}){
    const tweet = tweets[id]
    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser)
    }
}

export default connect(mapStateToProps)(Tweet)