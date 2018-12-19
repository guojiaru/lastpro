import React from 'react';
import { Warp } from './styledComponent' 
class Search extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextstate,nextprops){
        // console.log(1)
       console.log(nextstate,nextprops)
        return true
    }
    render(){
    //    console.log(this)
       console.log(3)
            return(
                // <div>11</div>
                <Warp>
                {
                    this.props.data&&this.props.data.map((value)=>{
                     return(

                     <li key={value.auctionId}>
                            <img src={value.pictUrl}/>
                            <span>{value.title}</span>
                            <b>￥{value.zkPrice}</b>
                            <i>已售:{value.couponAmount}</i>
                    </li>
                     ) 
               })
             }
             </Warp>
            )

    }
}

export default Search