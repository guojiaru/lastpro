import React,{Component ,Fragment,Wrap} from 'react'

import TopContainer from './top/TopContainer'
import BottomContainer from './bottom/BottomContainer'

export default class extends React.Component{
    render (){
        return(
            <Fragment>
                <TopContainer></TopContainer>
                <BottomContainer></BottomContainer>

            </Fragment>
           
        )
    }
}