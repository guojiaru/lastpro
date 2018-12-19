import styled from 'styled-components'
const Wrap = styled.ul`
/* background:red; */
display:flex;
flex-direction:row;
flex-wrap:wrap;
li{
    width:1.78rem;
    height:2.93rem;
    >img{
        width:1.78rem;
        height:1.78rem;

    }
    div{
        height:.4rem
        display:flex;
        font-size:.14rem;
        overflow:hidden;
    }
    i{
        display:flex;
        height:.4rem;
        width:1.78rem;
        margin-top:.05rem;
        line-height:.4rem;
        text-align:center;
        div{
            font-size:.2rem;
            color:#f23051!important;
         
        }
        span{
            color:#999;
            font-size:.12rem;
        }
    }
    b{
        height:.2rem;
        width:1.78rem; 
        font-weight:100;  
    }
}
`


export {
    Wrap
}