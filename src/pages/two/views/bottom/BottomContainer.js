import React ,{Component,Fragment} from 'react'
import { SegmentedControl, WingBlank } from 'antd-mobile';
import { Wrap } from './styledComponent.js'
import { XiangContainer as Xiang } from 'pages/xiang'
import {ShopContainer as Shop} from 'pages/shop'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import BottomItem from './BottomItem'
class BottomContainer extends Component{
  // onChange = (e) => {
  //     console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  //   }
  //   onValueChange = (value) => {
  //     console.log(value);
  //   }
    render() {
      return (
        <Fragment>
        <Router>
          <div>
            <nav>
              <Wrap>
                <li>
                  <NavLink to="/botton" className='nav' activeStyle={{ background:"#f23c4e",color: "#fff"
                  }}>精选</NavLink>
                </li>
                <li>
                  <NavLink to="/botton1" className='nav'  >9块9</NavLink>
                </li>
                <li>
                  <NavLink to="/botton2" className='nav'  >19块9</NavLink>
                </li>
                <li>
                  <NavLink to="/botton3" className='nav'  >29块9</NavLink>
                </li>
                <li>
                  <NavLink to="/botton4" className='nav'  >39块9</NavLink>
                </li>
              </Wrap>
            </nav>
            <Route path="/home" exact component={BottomItemp} />
            <Route path="/botton" exact component={BottomItemp} />
            <Route path="/botton1" exact component={BottomItemp1} />
            <Route path="/botton2" exact component={BottomItemp2} />
            <Route path="/botton3" exact component={BottomItemp3} />
            <Route path="/botton4" exact component={BottomItemp4} />
            <Route path='/xiang'  exact component={Xiang}/>
            <Route exact  path="/shop" component={Shop} />
          </div>
       </Router>
        </Fragment>
      );
    }

}
export default BottomContainer


class BottomItemp extends Component{
    render() {
      return (
        <Fragment>
       <BottomItem {...this.props}></BottomItem>
        </Fragment>
      );
    }

}
class BottomItemp1 extends Component{
  render() {
    return (
      <Fragment>
     1111
      </Fragment>
    );
  }

}
class BottomItemp2 extends Component{
  render() {
    return (
      <Fragment>
   2222
      </Fragment>
    );
  }

}
class BottomItemp3 extends Component{
  render() {
    return (
      <Fragment>
   333
      </Fragment>
    );
  }
}

class BottomItemp4 extends Component{
  render() {
    return (
      <Fragment>
    444
      </Fragment>
    );
  }

}