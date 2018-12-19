import React ,{Component,Fragment} from 'react'
import {connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import { Redirect } from 'react-router-dom';

import {loadDataAsync} from '../../actionCreator'
 import { Wrap } from './styledComponent1.js'
const mapState =(state)=>{
    return {
        shop:state.two.shop
    }
}
const mapDispatch = (dispatch)=>{
    return {
      loadShop(){
        dispatch(loadDataAsync(dispatch))
      }
    }
  }
class BottomItem extends Component{
    constructor(props) {
        super(props);
        this.goXiang = this.goXiang.bind(this)
      }
    componentDidMount (){
        this.props.loadShop()
        
    }
    // this.props.history.push({ pathname: "/PutForwardSubmit", state: { vcode } });
    goXiang(value){
        this.props.history.push({pathname:'/xiang',
            state:{id:value.id}
        })
        // console.log(this.props.history.push.state.id)
    }
  
    render(){
        // if (this.state.redirect) {
        //     return <Redirect push to="/list" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
        //   }
        
        return (
            <Wrap>
              {
                  this.props.shop.map((value)=>{
                      return <li key={value.id}>
                                <img key={value.id} onClick = { () => this.goXiang(value) }
  src={value.thread_img}/>  
                                <div >{value.title}</div>
                                <i>
                                <div>￥{value.extension.price}</div>
                                <span>￥{value.extension.origin_price}</span>
                                </i>
                                <b>天猫|已售{value.extension.volume}</b>
                      
                             </li>
                  })
              }

            </Wrap>
        )
    }
}
export default  withRouter(connect(mapState,mapDispatch)(BottomItem))  

