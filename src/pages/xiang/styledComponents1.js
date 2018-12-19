import styled from 'styled-components'

const Wrap1 = styled.div `
    display:flex;
    flex-wrap:wrap;
p{
    width:100%;
    height:.4rem ;
    line-height:.4rem;
    text-align:center;
}
li{
    width:1.78rem;
    height:4.8rem;
    img{
        width:100%;
        height:3.64rem;
    }
    p{
        flex:1
    }
}

`

export {
    Wrap1
}