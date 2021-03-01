import {GET_TWEETS, TOGGLE_TWEET, ADD_TWEET} from '../actions/tweets'

export default function tweets(state={}, action){
    switch(action.type){
        case GET_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true 
                    ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                    : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET:

            const {tweet} = action

            let replyingTo = {}

            // This complex logic is required since we have to add current tweet.id to another tweets replies array
            // and we cannot mutate object
            if(tweet.replyingTo !== null){
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state, 
                [action.tweet.id] : action.tweet,
                ...replyingTo,
            }
        default:
            return state
    }
}