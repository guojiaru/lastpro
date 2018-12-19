import styled from 'styled-components'
// const Wrap = styled.div`

//  .sc-example {
//   padding-bottom: 13px;
// }
// .sub-title {
//   color: #888;
//   font-size: 14px;
//   padding: 30px 0 18px 0;
//     /* margin: 0; */
// }
// .am-segment-item{
//     font-size:.12rem;
//     width:20%
// }
// .am-wingblank.am-wingblank-lg{
//     width:100%;
//     margin-left:0 !important;
//     margin-right:0 !important
// }
// .am-segment{
//     width:100% !important;
//     margin-left:0 !important;
//     margin-right:0 !important
// }

// `

const Wrap = styled.ul`
width:100%;
height:.4rem;
display:flex;
li{
    width:20%;
    text-align:center;
    line-height:.4rem;
    font-size:.14rem;
   .nav{
        width:100%;
        height:100%;
        color: #000;
    }
.active{
    background:#f23c4e
}
}
`


export {
    Wrap
}