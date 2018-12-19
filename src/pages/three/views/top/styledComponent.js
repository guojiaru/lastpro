import styled from 'styled-components'
import img10 from 'img/10.svg'

const Wrap = styled.div`
/* background:red; */
height:2.2rem;display:flex;
flex-direction:column;
div{
    height:2.2rem;
    background:url(http://static.m.meguo.com/static/img/v4_bg2.54f35dd.png) no-repeat;
     background-size:100%;
     div{
       height:.42rem ;
       display:flex;
       align-items:center;
       justify-content: center;
       position: relative;
       img{
        height:.2rem ;
        width:.78rem;
       }
       span{
         width:.18rem;
         height:.2rem;
         position:absolute;
         background:url(${img10}) no-repeat no-repeat;
         background-size:100%;
         right: .10rem;
         top:-.4rem;
       }
     }
     span{
       display:block;
       height:.22rem;
       font-size:.22rem;
       color:#fff;
       line-height:.22rem;
       text-align:center;
       margin-top:.5rem;
     }
     p{
       display:block;
       height:.2rem;
       font-size:.12rem;
       color:#fff;
       line-height:.2rem;
       text-align:center;
     }
}

.am-search {
  border-bottom: 1px solid #ddd;
  height:1rem;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}
.sc-example {
  padding-bottom: 13px;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
    margin: 0;
}

`
export {
    Wrap
}