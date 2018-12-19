import React ,{Component} from 'react'

import {Grid} from 'antd-mobile'
import { withRouter } from 'react-router-dom'
// import List from './ListContainer'
import { Wrap } from './styledComponent.js'
class FenLeiContainer extends Component {
    render (){
        let data = this.props.categories && this.props.categories['热门'].slice(0, 10).map((value, index) => {
            return {
              icon: value.img,
              text: value.title
            }
          })
      
          return (
              <Wrap>
              <Grid 
                data={data} 
                columnNum={5} 
                // hasLine={false}
                onClick={_el => this.props.history.push('/list')}
              />
             </Wrap>
          )
        }
      }
      
      export default withRouter(FenLeiContainer)
