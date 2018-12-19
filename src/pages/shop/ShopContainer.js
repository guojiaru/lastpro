import React from 'react';
import {Wrap} from './styledComponents.js'
class Shop extends React.Component{
    render(){
        console.log(localStorage.goods)
        return(
            <Wrap>
                <span>购物车</span>
                  {
                    localStorage.goods&&JSON.parse(localStorage.goods).map((value)=>{
                        console.log(value)
                        return(
                            <li key={value.id}>
                                <input type="checkbox" id="firstcheck"/>
                                <img src={value.img} className="smallPic"/>
                                <div>
                                    <span>{value.title}</span>
                                    <div>
                                        <span>{value.price}</span>
                                        <div>
                                            <button className="reduce">-</button>
                                            <input type="text" value={value.num} className="num"/>
                                            <button className="add"> + </button>
                                        </div>
                                     </div>
                                </div>
                                
                            </li>
                        )
                           
                     
                    })
          
        
                     }
            </Wrap>
        )
    }}

export default Shop