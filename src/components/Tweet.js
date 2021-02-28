import React from 'react'
import { connect } from 'react-redux'
import {formatTweet} from '../utils/helpers.js'

class Tweet extends React.Component{
    render(){

        if(this.props.tweet === null){
            return <p> This tweet does not exist </p>
        }

        return (
            <div className='tweet'>
                <ul>
                <li key={this.props.id}>
                    {this.props.authedUser}:{this.props.tweet.name}:{this.props.tweet.text}:{this.props.tweet.parent}
                </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({tweets, users, authedUser}, {id}){
    const tweet = tweets[id]
    const parentTweet = tweet ? tweet[tweet.replyingTo] : null
    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet)