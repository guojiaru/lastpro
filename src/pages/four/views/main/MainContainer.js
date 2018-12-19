import React ,{Component,Fragment} from 'react'
import { Wrap } from './styledComponent.js'
import { withRouter } from 'react-router-dom'
class MainContainer extends Component {
  handleClick = () => {
    this.props.history.push('/')
  }

    render (){
      return (
              <Fragment>
              <Wrap>
                <div>
                  <span onClick={this.handleClick}></span>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABUFBMVEUAAAD//////////////v7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Gkb/FEH/ED7/Ej//Rmr/GEX/FkP/g5v/HEf/N13/IEv/1Nz/+vv/9vf/0Nn/y9X/V3f/JE7/dZD/aIX/8PL/r77/jaP/iaD/K1T/Bzf/6+//6O3/4+j/W3v/U3T/TnD/Llb/Dz3/Cjn/7fH/3+X/ssH/e5X/9Pb/xM//oLL/kqf/O2H/Mlr/J1H/GUb/v8z/nK//ZYL/SGv/2eD/x9L/mKz/bIj/X37/RGf/PmT/usf/q7v/hZz/eZL/prj/gJj/9/n/gpr/b4v/2+JvwINcAAAAK3RSTlMAsdiJ/vhZJeYMBAmsp4Z4cF9NRhHr4dGdj2dSQC4eFvDNybqBftzCN/GEVTq1wgAABiZJREFUaN7dm9lXGjEUh6d2qrZqrVWrba123y6ZkHQY9h0ERFCpIrgr4m77/7/V0doIEmNmhnno9yae40cyyY/LPVelA9NTrybf9zjExOCz0b4nipAnUw/fvwWHeTQx+XzsTu3Yq/fQJT5/nOavdqQHusj4R86q33yALtPzvJO3dxy6jvrx9jEbVsENhh63eZ+CSwy2mofBNYZu7vZrFdzjKfP29YOLqOxsPwBX+TxzvdHgMi+vvAMT4DLf+q6SAyyQODgtbHkjscM8SMKWbCEpc0e1chbrOiqXo7/8IE3/jBnRj0CWZC2rFzZ2fi+GDvfqWSMVAFlGLsTPQBL1HON46Pqn/LlRLiyAJIMW7pJaKUcP4QbhZnZO1vzisfL4BciRKs+H2554MduQ3G31jdIn+YjXqbFz66ytllMgx4gyClIkVksrcIuwrkue7SHZW1zNRlS4TTrbUEGGceUVyJCokXDH1300DFJIVgCH5QJvJ2IghfIQZGiUl6Aji0YtAQynxbOZzCznfsxpy8BwWrysRbjXO1sFhtPilewRcDgox4HhtPg0ewIc/LQIDKfF8ewBcMh7fCw2HRdXiyHgsND4JSt2jv9AHE6d/rDIefogYFUc/EVKmnVwMW9RHCsRjx1KWz8tif0681o0n1gSr2gem2h7lsRp22IcsSSO2RajLdWKeBPbFVNf0Ip4zr54ftaCOLCP7IpJdNGC+KeP2hWv6X4L4lyGeOxCly2IFw37YrxkQRzyrNkWaysWxOvUY1+csiBOYgfEFQviDc2+GMctiNNOiCMSYn5UE4SIZFh7VaFYHNXI8DZ1JBvWIrE4qnExFDhb9yHJsJYWq21RjZoLcMF2nXbKRorNIotKhDUTC6IaJblnjmDiK8QqsUiNYtL6G90vLc5laOumLfAqMWzsLQev3ux6XMeCsG4Vi6MaFeGKRI22LXcuBPD7JHWaWsoDhItYENYicah1ZbhwXWyvopanS07Nun2ngMsajjbCF8U4FYS1QLxOO9/I2Qxtf0P+nRzAchN7iKYfqbCPRGHNxOKoJvU8XLJM227q0h6h9XgIFhoXQqLFTzL0hvhYIBZHNa7CJXu47aoiRC58xi78nDeNCBNxWDOxOKpJPXy5EYR0jgp0nDKIRFgzsSiqUWZj2582qIcDxkQirJlYXFVTbOiYSBZdq0FZ8VyHUCbEVmUtFrOotl9Z5wVip6tqFtZSYpYT9itrKTGLavuVtaQ4pDskXpEUryOPI2gpvlgc1QRL3F+kEX5lLRZv4Jtf+vb2CLmvN3JcJ8KwNsXiqMabAEfaPbc2cga7mBvWYvHxTXEDILBZuo8Xr+YAqljYBjHF4qheoysAiYJ2D69vGyAcJYKwZmJBVFNj3TSX1u7jzftQa5HIF4sbIMj8MA7GML0zHktm8zLnxcLKmonFVXVmxzzqUcz3IloJAuS3cHtYS4ln2xsgKGpmnz+CESeTteaBGXirWBDWAvFilLT/AZIOAKjJ/Q5hsoa0WjUBAId1JAprJhZGNavczV07S0YMDVPCXkca8e6an/e5GKXcsOaLxVGNo+mrL267kXkda5dgkikehQPmeTzxaUQc1kws0QCh2HexNJOF0NLu0XHsvHq4kwOTYHILUU4bhC8WV9VMXauEz6ANdbvaRIjXBpESp7kBSTV9v7K0nYC/BPMH6aKBkaANIhSzqOZCkIYMX3EzVqnE4nOrUaohItWzZmL5XjWhCF82ARAlspU1Ezvfq+aEtVgc8CI7MnFYM7HzVTULawlxYp6J7UJ3ZFZcc068FpIYx1AdPFyccQbOAMpGySmxxkuuXuhEookdWrDR+Wz184aMwnVHzIhyPhWHuGNVIS/GyCa4NJ+EzvTyB8mCyfiW1x6F3Rx3kOzu0TkV7KDeNTrHhgVdZUhR2EN2k142EOoq/WNs5tdVHiomA+/AZd72KZc8B3dhM+WD4Co9Y9fi6X5wkUejyj+eu3mlPjGvqyky2frPIZ/AJQYHlFaeubPbk6a3ldcunLBHw0oH+h5Al3k3pXSmdwK6SP/wY4XHwMgXFbpDz/CMcidfP30Zd1r69t3L0QFFzMzX3u8PHOPlyNT0k9uSP1s7TtV416LnAAAAAElFTkSuQmCC'/>
                </div>
                <span>
                    <div>
                    <button>登陆</button>
                    <button>注册</button>
                    </div>
                    <button>微信登陆</button>
                    <i>第三方登陆</i>
                </span>
              </Wrap>
                
             </Fragment>
          )
        }
      }
      
      export default  withRouter(MainContainer)