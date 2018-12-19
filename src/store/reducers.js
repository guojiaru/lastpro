import { combineReducers} from 'redux'

import { reducer as one} from 'pages/one'
import { reducer as two} from 'pages/two'
import { reducer as three} from 'pages/three'
export default combineReducers({
    one,
    two,
    three
})