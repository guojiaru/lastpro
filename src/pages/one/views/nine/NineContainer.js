import React ,{Component} from 'react'

import { Wrap } from './styledComponent.js'
// 分装一个get请求
export  function  get(url,params){  
    if (params) {  
        let paramsArray = [];  
        //拼接参数  
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
        if (url.search(/\?/) === -1) {  
            url += '?' + paramsArray.join('&')  
        } else {  
            url += '&' + paramsArray.join('&')  
        }  
    }  
    //fetch请求  
    return  fetch(url,{  
        method: 'GET',  
    })  
    .then(response => response.json())
    .then(result=>{
        var n=result.result.articals
        console.log(n)
        return n
    }) 
}  

class NineContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
          data:[]
        }
      }
    async componentDidMount() {
        this.setState.data = await get('api/threads/good-lists',6)
        this.state.data=[...this.state.data,...this.setState.data]
    }
    render (){
        if(this.state.data===[]){
            console.log('consoleundefined')
            return null
        }else{
            
            console.log( this.state.data)
            // console.log(1)
            // console.log( this.data)
            return(
                <Wrap>
                    <h1>9块9包邮</h1>
                    <ul>
                    {/* this.props.shop.map((value)=>{
                      return <li key={value.id}>
                                <img src={value.thread_img}/>  
                                <div>{value.title}</div>
                                <i>
                                <div>￥{value.extension.price}</div>
                                <span>￥{value.extension.origin_price}</span>
                                </i>
                                <b>天猫|已售{value.extension.volume}</b>
                      
                             </li>
                  }) */}
                         {
                           this.state.data&&this.state.data.map((value)=>{
                            return(

                            <li key={value.id}>
                            <img src={value.thread_img}/>
                            <span>{value.title}</span>
                            <div>
                                <b>￥{value.extension.price}</b>
                                <b>已售:{value.extension.volume}</b>
                            </div>
                        </li>
                            ) 
                      })
                    }
                    </ul>
                    <div>查看更多</div>
                </Wrap>
            )
        }
       
        
       
    }
}

export default NineContainer