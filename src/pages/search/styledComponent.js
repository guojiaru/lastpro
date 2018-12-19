import styled from 'styled-components'

const Warp = styled.ul`
    /* background:red; */
    display:flex;
    flex-wrap:wrap;
    li{
        width:1.78rem;
        height:2.93rem;
        display:flex;
        flex-direction:column;
        img{
            width:1.78rem;
            height:1.78rem; 
        }
        span{
            height:.57rem;
            font-size: .13rem
        }
        b{
            height:.4rem;
            color:#f23051;
            font-size:.2rem;
        }
        i{
            height:.2rem;
            font-size: .13rem;
            color:#666
        }
    }
`
export {
    Warp
}