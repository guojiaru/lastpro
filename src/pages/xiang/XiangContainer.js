import React from 'react';
import {connect } from 'react-redux'
// import {loadDataAsync} from '../two/actionCreator'
import {Wrap} from './styledComponents.js'

import {Wrap1} from './styledComponents1.js'
const mapState =(state)=>{
  return {
      shop:state.two.shop
  }
}

class Xiang extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      d:[],
      
    }
  }
 async componentDidMount() {
   await fetch('/api/threads/hot?page=1&flag=q92aweag30f')
    .then(response=>response.json())
    .then(result => {
      console.log(result.result.list)
      this.setState={
        d:result.result.list||[]
      }
     
    })
    
}

go(value){

    var goods = {}
    if(localStorage.getItem('goods')){
      arr = JSON.parse(localStorage.getItem('goods'));
    }else{
      var arr = [];
    }
    if(arr.length>0){
      console.log(1)
      for(var i=0;i<arr.length;i++){
        var bStop = false;

        if(arr[i].id == value.id){
            arr[i].num++;
            bStop = true;
            break;
        }
    }

    if(!bStop){
        goods.id =value.id;
        goods.num = 1;
        goods.img = value.thread_img;
        goods.title = value.title;
        goods.price = value.extension.price;
        arr.push(goods)
    }

    }else{
        goods.id = value.id;
        goods.num = 1;
        goods.img = value.thread_img;
        goods.title = value.title;
        goods.price = value.extension.price;
        arr.push(goods)
    }
    localStorage.setItem("goods",JSON.stringify(arr));
    this.props.history.push('/shop')

}
  render() {
    console.log(this.setState.d)
    if(this.setState.d==='undefined'){
      return null
  }else{

    return (
     <Wrap>
         {
              this.props.shop.map((value)=>{
                  if(this.props.location.state.id==value.id){
                  
                    return <li key={value.id} onClick = { () => this.go(value) }>
                              <img src={value.thread_img}/>
                              <span><img src='data:image/png;base64,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
'/>{value.title}</span>
                              <b>券后价：￥{value.extension.price}</b>
                              <div>
                                <p>天猫价 ￥{value.extension.origin_price}</p>
                                <p>运费·包邮</p>
                                <p>销量：{value.extension.volume}</p>
                              </div>
                           </li>
                  }
                })
            }
            <Wrap1>
              <p>——— 新品推荐 ———</p>
              {
               this.setState.d&&this.setState.d.map((value)=>{
                  
                    return <li key={value.id}>
                              <img src={value.thread_img}/>
                              <p>{value.title}</p>
                           </li>
                  })
                
            }
            </Wrap1>
     </Wrap>

    );
  }
  }
}

// ReactDOM.render(<App />, mountNode);
export default connect(mapState)(Xiang)
