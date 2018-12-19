import React, { Component ,Fragment } from 'react'
import {SearchBar} from 'antd-mobile'
import { Carousel, WingBlank } from 'antd-mobile';
import { Grid } from 'antd-mobile';

import FenLeiContainer from './fenlei/FenLeiContainer'
import NineContainer from './nine/NineContainer'
import DayContainer from './day/DayContainer'
import {
List
} from './styledComponents'


export default class extends React.Component{
    render(){
    return (
      <div>
        <OneUi></OneUi>
        <FenLeiContainer { ...this.props }></FenLeiContainer>
        <NineContainer { ...this.props }></NineContainer>
        <DayContainer></DayContainer>
       </div>
    );
    }
  }
    
    class OneUi extends Component {
        state = {
            data: ['1', '2'],
            imgHeight: 142,
          }
          componentDidMount() {
            // simulate img loading
            setTimeout(() => {
              this.setState({
                data: ['http://images.meguo.com/upload-img/20180920/864f7e3de6d41b6f705ad65cc7312b8d.jpg', 'http://images.meguo.com/upload-img/20180910/ab4cd45658befd2be00a6ed690c53aab1536590001_603443.jpeg','http://images.meguo.com/upload-img/20180910/d1477c0344a1a9ebcc73f2c9f0660f481536588402_804722.jpeg','http://images.meguo.com/upload-img/20181030/6f5f06e24504e647f938dfb6a6bb9c5c.png'],
              });
            }, 100);
          }
      render () {
            return (
                <Fragment>
                <div>
                  <SearchBar placeholder="Search" maxLength={8} />
                </div>
                <WingBlank>
                <Carousel
                  autoplay={true}
                  infinite
                  // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  // afterChange={index => console.log('slide to', index)}
                >
                  {this.state.data.map(val => (
                    <a
                      key={val}
                      // href="http://images.meguo.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img
                        src={`${val}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
              </WingBlank>
              </Fragment>
            );
     
    
      }
    }

