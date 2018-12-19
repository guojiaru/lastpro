import React,{Component,Fragment} from 'react'
import ThreeUi from './ThreeUi'
import {loadDataAsync} from '../actionCreator'
import {connect } from 'react-redux'
const mapState = (state)=>{
    return {
      categories:state.three.categories
    }
  }
  
  const mapDispatch = (dispatch)=>{
    return {
      loadCategories(){
        dispatch(loadDataAsync(dispatch))
      }
    }
  }
class ThreeContainer extends Component{
    render(){
        return(
            <ThreeUi {...this.props}></ThreeUi> 
        )
    }
}
export default connect(mapState,mapDispatch)(ThreeContainer)