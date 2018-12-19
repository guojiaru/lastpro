
import { GET_SHOP_DATA} from './actionTypes'
const defaultState = {
    shop:[]
}

export default(state = defaultState,action)=>{
    if(action.type === GET_SHOP_DATA){
        return{
            shop:[...state.shop,...action.shop]
        }
    }
    return state
}