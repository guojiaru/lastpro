import React ,{Component,Fragment} from 'react'
import { Grid } from 'antd-mobile';
import {Wrap} from './styledComponent'
// const data = Array.from(new Array(9)).map((_val, i) => ({
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//     text: `name${i}`,
//   }));
  
//   const data1 = Array.from(new Array(9)).map(() => ({
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
//   }));
class BottomContainer extends Component {
    
    
    render (){
        let data = this.props.categories && this.props.categories['热门'].slice(0, 17).map((value, index) => {
            return {
              icon: value.img,
              text: value.title
            }
          })
      
          return (
          <Wrap>
              <Grid 
                data={data} 
                columnNum={4} 
                // hasLine={false}
                // onClick={_el => this.props.history.push('/list')}
              />
              </Wrap>
        //     <div>
        //     <Grid data={data} columnNum={4} activeStyle={false} />
        

        //   </div>
           
          )
        }
      }
      
      export default BottomContainer

  