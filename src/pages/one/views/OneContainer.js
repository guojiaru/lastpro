import React, { Component ,Fragment } from 'react'

import {connect } from 'react-redux'
import OneUi from './OneUi'
import {loadDataAsync} from '../actionCreator'

const mapState = (state)=>{
  return {
    categories:state.one.categories
  }
}

const mapDispatch = (dispatch)=>{
  return {
    loadCategories(){
      dispatch(loadDataAsync(dispatch))
    }
  }
}
class OneContainer extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        this.props.loadCategories()
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
  render () {
    return (
    <OneUi {...this.props}></OneUi>
 )

  }
}

export default connect(mapState,mapDispatch)(OneContainer)