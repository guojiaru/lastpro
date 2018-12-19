import styled from 'styled-components'

const Wrap = styled.div `
/* background:red; */
li{
    display:flex;
    flex-direction:column;
    img{
        width:3.75rem;
        height:3.75rem;
    }
    span{
        border-bottom: .01rem solid #ececec;
        color: #595959;
        font-weight: 500;
        font-size: .16rem;
        line-height:.43rem;
        /* text-align:center; */
        img{
            width: .18rem;
            height: .16rem;
        }
        

    }
    b{
        /* height:.4rem; */
        font-size: .24rem;
        line-height:.4rem !important;
        color:#f23c4e;
        font-weight: 700
        /* text-align:center; */
    }
    div{
        height:.4rem;
        display:flex;
        flex-direction:row;
        p{
            width:33%;
            font-size:.1rem;
            color:#676767;
        }
    }
}
`

export {
    Wrap
}