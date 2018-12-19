import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PullToRefresh, ListView, Button } from 'antd-mobile';
const mapState = (state) => {
    return {
      list: state.one.list
    }
  }
// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
// const NUM_ROWS = 20;
// let pageIndex = 0;

// function genData(pIndex = 0) {
//   const dataArr = [];
//   for (let i = 0; i < NUM_ROWS; i++) {
//     dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
//   }
//   return dataArr;
// }

class List extends React.Component {
  constructor(props) {
    super(props);
    // this.goBack = this.goBack.bind(this)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

 async componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    this.rData = await this.genData();
    
      console.log( this.rData )
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
  
  }

  genData () {
      return fetch('/api/threads/good-lists?cid=1&channel=5&page=1')
      .then(response=>response.json())
      .then(result => {
            return result.result.articals

      })

  }

  onRefresh = () => {
    // this.setState({ refreshing: true, isLoading: true });
    // // simulate initial Ajax
    // setTimeout(() => {
    //   this.rData = genData();
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     refreshing: false,
    //     isLoading: false,
    //   });
    // }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    // if (this.state.isLoading && !this.state.hasMore) {
    //   return;
    // }
    // console.log('reach end', event);
    // this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.rData = [...this.rData, ...genData(++pageIndex)];
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 1000);
  };
//   goBack=()=>{
//     this.props.history.push('/home')
// }
  render() {
      console.log(mapState.list)
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    // let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
    //   if (index < 0) {
    //     index = data.length - 1;
    //   }
    //   const obj = data[index--];
      return (
        <div key={rowID} style={{height: '293px' ,width: '170px',float:'left','marginRight':'.1rem'}}>
            <img src= {rowData.thread_img} style={{height: '178px' ,width: '178px'}}/>
            <div>{rowData.title}</div>
            <div>{rowData.extension.price}</div>
        </div>
      );
    };
    return (
        <div>
     <NavBar
      mode="light"
      icon={<Icon type="left"  onClick = { () => this.goBack() }/>}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>

    <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '5px 0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
    </div>);
  }
}

// ReactDOM.render(<App />, mountNode);
export default withRouter(connect(mapState)(List))
