import styled from 'styled-components'

const Wrap = styled.div`
/* background:red; */
display:flex;
flex-direction:column;
>span{
    height:.4rem;
    /* background:red; */
    line-height:.4rem;
    text-align:center;
}
>li{
    height:.6rem;
    display:flex;
    >input{
        width:15%;
        height: 20%;
    }
    >img{
        width:15%;
    }
    >div{
        width:70%;
        display:flex;
        flex-direction:column;
        >span{
            height:30%;
            overflow:hidden;
        }
        >div{
        flex:1;
            >button{
                width:30%;
            }
            >input{
                width:40%;
            }
        }
    }
}

`
export {
    Wrap
}