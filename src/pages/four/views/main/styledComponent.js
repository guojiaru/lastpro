import styled from 'styled-components'
import img9 from 'img/9.svg'
const Wrap = styled.div`
    background:url(http://static.m.meguo.com/static/img/loginIndexBg.818eea7.jpg) no-repeat ;
    background-size:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    div{
        height:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        position: relative;
        span{
            position:absolute;
            width: .25rem;
            height: .25rem;
            background:url(${img9}) center center /  25px 25px no-repeat;
            top:-.8rem !important;
            left:.2rem !important;

        }
        img{
            width:.82rem;
            height:.82rem;
        }
    }
span{
    flex:1;
    display:flex;
    flex-direction:column;
    margin-top:1rem;
    /* align-items:center; */
    div{
        width:100%;
        height:.5rem;
        display:flex;
        flex-direction:row;
        button{
            width:1.35rem;
            height:.5rem;
            background:#fff;
            border-radius: .06rem;
            font-size:.16rem;
            color:#000 !important;
        }
      
    }
    button{
        width:3rem;
        height: .5rem;
        background:#12b848;
        border-radius: .06rem;
        font-size:.16rem;
        color:#fff;
        margin: .3rem;
        border:0
    }
    i{
        height: .3rem;
        margin-bottom:.2rem;
        line-height:.3rem;
        text-align:center;
        font-size: .12rem;
        color: #fff;
    }
}    
`
export {
    Wrap
}
