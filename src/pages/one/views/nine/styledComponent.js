import styled from 'styled-components'

const Wrap = styled.ul`
/* background:red; */
    h1{
        height:.32rem;
        line-height:.32rem;
        text-align:center;
        margin :.05rem;
    }
    ul{
        height: 1.95rem;
        overflow:hidden;
        overflow-x :auto;
        display:flex;
        flex-direction:row;
        li{
            height:100%;
            width: 1.32rem;
            display:flex;
            flex-direction:column;
            /* margin: .05rem .05rem;  */
            img{
            height:1.2rem;
            width: 1.2rem;    
            }
            span{
            flex:1;
            width: 1.2rem; 
            font-size:.1rem;
            margin: .1rem  0rem ; 
            overflow:hidden; 
            display:flex; 
            }
            div{
              height: .2rem;
              display:flex;
              font-size:.1rem;
               /* margin: .1rem  0rem ;    */
            }
        }
    }
div{
    width:100%;
    height:.2rem;
    border-radius:20%;
    line-height:.2rem;
    text-align:center;
}

`
export {
    Wrap
}