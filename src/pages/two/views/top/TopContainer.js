import React ,{Component,Fragment} from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Wrap } from './styledComponent.js'
class TopContainer extends Component {
  state = {
    value: '美食',
  };

  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
    render (){
      return (
              // <Fragment>
              <Wrap>
              <div>白菜价精选</div>
              <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
              />
              <ul>
                <li><img src="https://img.alicdn.com/imgextra/i3/62752115/TB2OaoexkCWBuNjy0FaXXXUlXXa-62752115.png"/></li>
                <li><img src="https://img.alicdn.com/imgextra/i1/62752115/TB22nEfxkOWBuNjSsppXXXPgpXa-62752115.png"/></li>
                <li><img src="https://img.alicdn.com/imgextra/i3/62752115/TB272oXxb1YBuNjSszhXXcUsFXa-62752115.png"/></li>
                <li><img src="https://img.alicdn.com/imgextra/i2/62752115/TB2i54kxqmWBuNjy1XaXXXCbXXa-62752115.png"/></li>
                <li><img src="https://img.alicdn.com/imgextra/i2/62752115/TB2XvCBoZyYBuNkSnfoXXcWgVXa-62752115.png"/></li>
                <li><img src="https://img.alicdn.com/imgextra/i3/62752115/TB245nNxbGYBuNjy0FoXXciBFXa-62752115.png"/></li>
              </ul>
            </Wrap>
            //  </Fragment>
          )
        }
      }
      
      export default  TopContainer