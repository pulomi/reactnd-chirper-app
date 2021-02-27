import {combineReducers} from 'redux'
import {users} from './users'
import {tweets} from './users'
import {authedUser} from './authedUser'

export default combineReducers({
    tweets,
    users,
    authedUser
})