import {getInitialData} from '../utils/api.js'
import {getUsers} from './users.js'
import {getTweets} from './tweets.js'
import {setAuthedUser} from './authedUser.js'

const AUTHED_USER_ID  = 'dan_abramov'
export function handleReceiveData(){

    return (dispatch) => {
        getInitialData().then((users,tweets)=>{
            dispatch(getUsers(users))
            dispatch(getTweets(tweets))
            dispatch(setAuthedUser(AUTHED_USER_ID))
        })
    }
}
