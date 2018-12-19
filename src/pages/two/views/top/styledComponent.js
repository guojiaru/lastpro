import styled from 'styled-components'

const Wrap = styled.div`
    height:2.5rem;
    display:flex;
    flex-direction:column;
    /* background-image:url("http://static.m.meguo.com/static/img/v4_bg1.c16055c.png") no-repeat
     */
    background:url(http://static.m.meguo.com/static/img/v4_bg1.c16055c.png) no-repeat 5px 5px;
    div{
        height:.42rem;
        /* line-height:.42rem; */
        text-align:center;
        color:#fff;
        font-size:.16rem;
        padding:0.1rem 0 0.1rem 0;
    }
    SearchBar{
        flex:1;
        .am-search {
            border-bottom: 1px solid #ddd;
            background-color:''
            }
            .sub-title {
            color: #888;
            font-size: 14px;
            padding: 30px 0 18px 0;
            }
    }
    ul{
        height:1.78rem;
        display:flex;
        flex-wrap:wrap;
        padding:0.1rem 0.1rem 0.1rem 0.12rem
        li{
            width:1.12rem;
            height:.75rem;
            margin-right:.056rem
            img{
                width:100%;
                height:100%
            }
        } 
    }
    .am-search-cancel {
        color:#000 !important;
    }

`
export {
    Wrap
}