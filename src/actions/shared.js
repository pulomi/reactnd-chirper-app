import {getInitialData} from '../utils/api.js'
import {getUsers} from './users.js'
import {getTweets} from './tweets.js'
import {setAuthedUser} from './authedUser.js'

const AUTHED_USER_ID  = 'tylermcginnis'
export function handleInitialData(){

    return (dispatch) => {
        return getInitialData().then(({users,tweets})=>{ //todo-abs why do we need to return at this step , what are we returning ?
            dispatch(getUsers(users))
            dispatch(getTweets(tweets))
            dispatch(setAuthedUser(AUTHED_USER_ID))
        })
    }
}
