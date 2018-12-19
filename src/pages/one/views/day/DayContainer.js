import React ,{Component} from 'react'
import ReactDOM from 'react-dom';
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import {
  Wrap
  } from './styledComponents'
  
// const data = [
//     {
//       img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//       title: 'Meet hotel',
//       des: '不是所有的兼职汪都需要风吹日晒',
//     },
//     {
//       img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//       title: 'McDonald\'s invites you',
//       des: '不是所有的兼职汪都需要风吹日晒',
//     },
//     {
//       img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//       title: 'Eat the week',
//       des: '不是所有的兼职汪都需要风吹日晒',
//     },
//   ];
//   const NUM_ROWS = 20;
//   let pageIndex = 0;
  
//   function genData(pIndex = 0) {
//     const dataArr = [];
//     for (let i = 0; i < NUM_ROWS; i++) {
//       dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
//     }
//     return dataArr;
//   }
  
  class DayContainer extends React.Component {
    constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
  
      this.state = {
        dataSource,
        refreshing: true,
        isLoading: true,
        height: document.documentElement.clientHeight,
        useBodyScroll: false,
        damping	:500,
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
    
    genData(){
        return fetch('/api/threads/good-lists?cid=0&channel=5&page=1')
        .then(response=>response.json())
        .then(result => {
              return result.result.articals
              
            })
            
        }
        damping=()=>{
         return  500
        }  
    onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
      // simulate initial Ajax
      setTimeout(() => {
        this.rData = this.genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          refreshing: false,
          isLoading: false,
        });
      }, 600);
    };
  
    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      //   if (this.state.isLoading && !this.state.hasMore) {
    //     return;
    //   }
    //   console.log('reach end', event);
    //   this.setState({ isLoading: true });
    //   setTimeout(() => {
        //     this.rData = [...this.rData, ...thid.genData(++pageIndex)];
        //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //       isLoading: false,
    //     });
    //   }, 1000);
};

render() {
    console.log( this.rData)
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
    //   let index = data.length - 1;
      const row = (rowData, sectionID, rowID) => {
        // if (index < 0) {
        //   index = data.length - 1;
        // }
        // const obj = data[index--];
        return (
          <div key={rowID} style={{height: '293px' ,width: '178px',float:'left'}}>
             <img src= {rowData.thread_img} style={{height: '178px' ,width: '178px'}}/>
             <div >{rowData.title}</div>
          </div>
        );
      };
      return (< Wrap>
        <div style={{height: '.52rem','lineHeight':'52px','textAlign':'center'}}>每日精选</div>
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
      </ Wrap>);
    }
  }

export default DayContainer