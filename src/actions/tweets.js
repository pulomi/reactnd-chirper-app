import { saveLikeToggle } from "../utils/api"

export const GET_TWEETS = "GET_TWEETS"
export const TOGGLE_TWEET = "TOGGLE_TWEET"

export function getTweets(tweets){
    return {
        type: GET_TWEETS,
        tweets
    }
}

function toggleTweet({id, authedUser, hasLiked}){
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet(info){
    return (dispatch) => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info)
        .catch((e)=>{
            console.warn("Error in handling tweet Toggle", e)
            dispatch(toggleTweet(info))
            alert("Erro Liking the tweet try again")
        })
    }
}