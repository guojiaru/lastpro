import { GET_SHOP_DATA} from './actionTypes'


export const loadDataSync = (shop)=>{
    return {
        type: GET_SHOP_DATA,
        shop
    }
}
export const loadDataAsync = (dispatch)=>{
    return ()=> {
        // fetch('/mock/cookbook-category.json')
        // .then(response => response.json())
        // .then(result=>{
        //     dispatch(loadDataSync(result.data.category))
        // })
        fetch('/api/threads/good-lists?price=1&page=1')
        .then(response => response.json())
        .then(result=>{
            dispatch(loadDataSync(result.result.articals))
            console.log(result.result.articals)
        //    result=result.result.articals
        })
    }
}