import React ,{Component,Fragment} from 'react'
import { SearchBar, Button, WhiteSpace, } from 'antd-mobile';
import {Wrap} from './styledComponent'
import {Wrap1} from './styledComponent1'
import { SearchContainer as Search } from 'pages/search'
import { SegmentedControl, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
class TopContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
          c:'',
          data:[],
          
        }
        this.goSearch = this.goSearch.bind(this)
      }
      
    onChange = (e) => {
        // console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
      }
      onValueChange = (value) => {
        // console.log(value);
      }
    componentDidMount() {
        this.autoFocusInst.focus();
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
      goSearch(){
        this.setState({
          c:this.autoFocusInst.state.value||''
        })
        let url='/api/coupon/list?keyword='+this.setState.c+'&page=1&sort=coupon&mall=taobao'
        fetch(url)
        .then(response=>response.json())
        .then(result => {
        // console.log(result)
        console.log(this)

        this.setState({data: result.list.list})
          // this.setState({
          //   data:result.list.list
          // }, () => {
          //   console.log(0)
          // })
        //  return 

    })
    //  this.props.history.push('/')
  }
      
    render(){
      // console.log(this.props)
        return(
            <div>
            <Wrap>
                <div>
                    <div>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAA2CAYAAABQkNyvAAAAAXNSR0IArs4c6QAAGWRJREFUeAHtnQe4VUWSx0UlKKKYEBNgZIyjro4oIKICYkDUYcSAYAQDO6457LDO6KoozrgmUEZdzGNe+dbsCqOiYxxz1oeiIqA4YkBQmd//cvrSt2+ddM99PnRffd+f7qququ7Tp6vTuU+XWKKZmnuguQfq2gMt6uqt2dli0QMLFizoRENGBI35ukWLFmcHstwsvodidA1YAOaCL8DG+J5N2kz0wNJFeoEO7oD9QZEfBajwNB38MGkzNV0PrEnVpwXVfwZfOKgin+5dLwsvLBnJF+uE8focDVw3aqQmBeF7cBhj9u5IXjgpFFTUvgG4MGjF5fA/qaCis++jzZ1BK6A+0aCZDzals78hbabkHlB/LdbEO1YwbRnTyKdj5DWJiwbVUkatyxiyuoroIAXzKkD1u1nyOQLgy7wV4Wt1bPoZdk/+fwko+kB92CPog7d4/o8DWRwb+87xvTdGfT3DOfg92eN/rOwuMRW9muM5Y1xUiosGlTVDtamsopKjk5dDMqpSanJui6FU7WwJWoMVQH+gbYdPW8M86wsy5veM0bvByWmzVrBJjs+RanthkZMrdfkfyAvajswBI3jZM0h/DFK/Tg4qOhp+bCCLY9vGFSDvBfzznQK1LkHFe9GkejuQz+Ppr6RdRW90LHrIEuK7J/KjwPn4/bulEycrGlSWXw3+JNLh9qQkhRrLFHy10D6GkQb1BE8u39t5fGNnP6eCpj74H8vA2st70BcZXHHBcBW6urCwaPNAqEmjXnQZjlwbu9GGgbRxaoxzBbdFD4ZC/ByGbBxQfAwUj9+bQr04vjGCKq6ukpzGfUcjdbmhlUYznNtCbkt+EPBJZ7N7fUGUV1CuFsjdjB+I41nasRaluxgal9FOBZYjDYSLHUPaGbiX6cSq/xLHBKkf8MoL2nJpn98PhHQz9etM15S0MZULjlq7jJFub8jiRFqNCxPv7t9wMtxztAX5u5F3o+8qVixkOi5omx+S+niyL0R3J/grgBuX2treiHwj/GbZYRW7/fMbkydP48pbK2dHo7XUhkH1ALrhRcgS6B6KbhhUzlWe9BCUXec5u1lkznOMUtrwHclvnYz6FQhhUH2PXlnH6Sal+FE9VlDppTY1TaEBzwBNLppUGkAc/ZWCj8E8oKDxJzhtyzcFjuq1Us3E4WtgI+eYVKviRWC4J1N2h4B37CTeWXny5H1okr8RhGNiOrIvKG+Jfupkl3mlwmFXHLcDPkkW0kroqiMdfUlDXndMQtrGKPvUkNVFRBtV35GGszNo7z8MeZoo12ChfvX9EMPpZOrPtYc3fNRDdD3tGJvR0YHoTrN0ec7RyOseVNR3Pb4VAAeDP4H2QDQM+cmU+++wx8Kiqn8nBpJj4f3JWp8hzgeX4O/rQDeWzRxUeLgSxEW8X4GWz6c9gWa87h4fl21tFMwwZPUSnYAjbf98uo3O03PWQpqh89DuKK8RGCgwc612gX1TsVrJs1KuySfJKe9Kff7fBNHDpBNAb9AKqG8VcI7ixl/4beoIZ0CqCeVU6og7K3qqldklK9km5ayVamZjtIiXsCZ+Tw18vwV/WCDLw+YNquMN5zrLvWDIF3dRnmevW1C5TqHPPiDfB7ijwr6ujHfdgbzOVCE9j91UJ0RvFfLrgU/A7pQdDXIHlPzlWakOQD8c+NsiC89H9yHTMuporsukpOFKNR/9l1Ns/OJML5bOUz23guU8Y21P+9TaiZGfzIOFNuyPzQ5e/cq+Ck4LZD8V1j9DpbU5cz+lOfLLeXfyeyJ9+yCpv8Pp7ut5+cfR9c9Iy1CmbaSu0Kd7ermzmYOKij4MvdOocPskFZ2h3gl1M/BhUE3Bz5cZ7JxK6haE9rZAWdu77ZwRqc4vfamr6KpYCmrqGIG/BvxpcqkiypdHOCYo+AZ+P2wy79udPf40O7d0fJR2DHixbdG9OJA/Sp2aYIpSnqDKNPlZDaL9eyMfb5WFMnSdKFwInFwT/1Hofe4EUXqwZxsUVbF6z/79QUkhc1BVuYsXzIsvSiwJg+qeRO3qwsSgoqN0o6OAOtgzvZe8BnP5Bsgry5t1M7BWwD2AGVTIx4E1gCOtyINpQ55V2dkqPRrEDRxfT/070heQ1/YmLqgG0Gd+O9+jjVcH9mUWXZ1lflcWLMr0XJQt5Vw/BeJMrOpYOZNmNiWNiSL+/MuQco2NEVSzyt7zZdb01DXQdPDMQ7IxiReugS5/+3gKl5I/joFS5CV77kpXyeK1uvbxC1yedpxBXls/R5oIdHN2txPUkD6JjQabT1oNN/UF5FXXo0ATiFZGTeXPgzjalQLB0SQysUFFmVbLfwdpVPNKhWO1f4BRgXYgGstqg49fw1vvYjzyiaAomTuLxgiqt2ts6Qae3R0MNB0Y85AGTRUxkLdGeAPY0CscS/4xcAzl2ioJqwFdy84GCgwFm9tD3EV7boNPIhec2k5siN8u2DQ4A/jjyJ/teFKtEoPQecCT5c5i3zs0oi5tb6cE8i/Q1c1sVvoYRf+TxnsphgqWlw0d9e0qntz1qSfKlqX9H6EppBJ90A6lMw1FTSqn46vWyd9wWUcRDe8FfPoSZs28VWCzvufkB/JbJvmg/BVP32XXCm0oGO8KC6bay5cJX/0Mfx9KAfl2UdkxzgD+nED/dfhNXHm9U3y7NvjV+gFSUSVKy/iKUf6oCqWIoWyooavAMQnd0YH+30zFOgup85KgXsc2+ieLeq9UutcvDa6cfTTE078OH0nbEk+1ImutVP72pUIZRiuKZj3NyFoVtT+2BpK2SpNAGrmVqiFS3Ju3qG2GVsVDI5mSK4B+/FmxdUC3K3JrJXkB3SkyXIyp3uOo0KPSlzvioDypec6eIX+pxzdKNldn0FjtXQVH7jvXfASngMsiHVdekTI4qpZ+9NuidESkOI305AqjbMxU1GYaqtch0+BV0CjYp0f5mbRlHvky0Y51YaygugldbQnTyJ0VVIcCtBt4CvwSOHqRjPrgQuqTTP2mdsi2D9gChDQCwc8pqKrGQPjARXj6tQ32fwb+OJVLTXrDeZdu8pOsUSgxqGjg/dS6NdDNkRCn35KyP0YgMekDpJ2MEgXR6kCDfwAPrQBIo7DDRlqdhez0NEde+WAv72ezzmylwUKddNuCZ3GgVccPKPncPILyWUgD4M4sik2so/eflTIPavpRFy5xYy6uPo2n9YzCa5E14HMlo6yeojlpDdYBs16NqJqheMAe+FcnzAU6tD9PmoWcL72gM7ErdJNDOxSkhxsVP5KjTb65VigFlWga+Apo0vgWqM2CewayJerOv+H7mET9/ofMSHWxS8J2JzXQ2qbH6T9MgSb1etAhOBEam/ZJ64xhtGDZDK1YEp2lUqABVSYG8mYwCgZtgbRCTSLNSq+g+CQYj53SojQQB+sYTi4wZBIpCEPyZZMoPBVoW7cNbZxOGkv0RUcKdb4L6cZQUID321fAjWmaNo58I00oP2tK7AwGw0uN8fQMol741RV1e3AGWBKZZmpdM79OvQq0JDqRwlZSwG79SFEfJ3O/MOw12EZFPvzkFvzd6wty5Cejq5VJE9JBYAxIIn17CQe9JqHbk4wauawrfdPbqGNjQ6YPxb9Arksd7Tr899A50K84ywZlIaudjCbskNRXDhrDq4KngMaTTzpn9wUNQOPFP8bIr2Q60/cE5wKLTkKos7narVVWE6XbZbgUUZnyPF/ZqJyhI7cAc8BnYHqEs8sKRgadw8DXYCyYDULaxDCrEGHwTmgEr9k+N2G3r+HrfWQrxjmjbFfDpsHXp3xipPMmqTUwyuqU3xfp+okmnZoIJ9aV+mzfGTrlNpG3rtT9ttQzf5ffjnrkadytRgP1eSfz1hHdKwwfEmlsW2e0ejS92geVWS/vymrNhRL0twG3gI0kIf0QhPQtgm9SENqIXzuu3jg5Nu1B2AbVvW2cjeSUW0H1nm+DznDgqOI7V6DXDiU9c0j9fb08eRxZ70U3kmr70kAT27ugtDqSWkEV9x7moZ+V9M3x+0D52jzPkqaL73MD/2LVRq3+mQn9NuAxYNFbCDtkdlZEkYp6GC3QUpmJsA0HtOEus2jdTJV6Sni+zvB+gKdiZrHpb9g1+MqUrwLmR3qP+2V+nvJBkY6fvApTGvC+btY8tlZQabIYDLRyOnJb6DCotBMolYV1Ih/qjL1U42BVD5qs2siWdDTw6ZDQZ608To/3HUd5rVD9avGJndr9YuQnTJ5DoNvIVEo8U6VaV58DZKJ9axE6AePXgM5V2rM6kC3TPeRKL60sqb4584qqs3SQ6tF5xyf9fOVGX1BrHj+zqOMB7HcD25PfHtkUw99gQ3YRutZ+3VDNLFJ/3RRoW4E7DR39HjHP2eAd9HV+SaNrUJiQppSlnP4cjt6Fga7asAdt0fkqN2H3OX4VkJoE1wkcbAn/P5TLv25zixGONKPf5WEreYTfAYSU+SyA4UehMbwOvImEjs5xIaWexZxTDPcH2po40lZniCtXCr88MJd85LuBkBp8+8jHAZ7Sg0Z5R8rdauZU1SfLhLp5eOytlcr5V6o6daYtnatItSXUfz1pZ5BYN+VDQUjmqhb1QXeUDwHhN7s8j1ShG/nz35/a8xaoy9kHP13Aa8Ai/R1WeCFS0b5MDE4+DbyX9vvIegVysUWDasO0RlGHFVSZXhq2hwN/IM+A7wk6gyFgHHgJ6Cww1moL8qxBtSy6ft/t4fuj7AIQkmbgQoRD67eJrp5byKxfawXYDnWOovSzWn3VYkedBwK9G58ehdE31boR/lYEjwCLXkBo3YKW6i+6/bMeYmUq3N4qQDadpfPdmDIn1pVlLZT4LLRJs/JooOt4n6bCaMu3li+M8nGztrVtqjLnWXXLeSkF7sp+DPz9yBXUugY+KjB6E/6qQJaZxae2eNrWnmoY6ap7J+p+IizDTn3TLZTH8BsEcm2ZdkWm63RdOes9qB1dQGfQGugXF9pOSkf/RdibSHMT9QzCaAIorbCkGivnAP0A4HvSQoT/LjhYw3Pye/IfAm3Rl/Lkm5PXGetM0jHUrecuU+JALGvly+yIuvakFmnmP9oqaEwZD98R/9rP6+WHFF67vo7CQ0DbtUnAIvdSrbJQdgkCfetQgHYFx4CLwBmgLfBJZ7qKF+QXxuV5PgX5b8B5oAuw6Bt8VwVUpKggiHtnli9ftg7Mvb4gIT+HsrgJN8GstB0/DIVxwA3uj8gfxDM9wvOvC36R6CBb4eGohTe1ByPTZHwx2BE40mRxLjiIuo+hHZNdQaYUI38LA7tAh2+dO3qJyUGX+xViZ52p1vd1rDx2+m+whVQ658XoXxMqe/zH5K8HQ8Faln0oQ28ACOm9UM/xKF7kKWvr2hfoHOdT1oHp3JZSHGhnoFkzjWK3aRhqm9rYpC3bnhWNz8hg94egcXpfKzpz8kcG5fVkFVQlwumvwFVAN4wh3Y9gXynWulIlzdS6mRtRasXCf7Qsa9mfG2GhdOG/C3wmyluyUG1+KIBPslvO0/+a/KNAK5HwErNMki0qVWQ9/6wqrUWCs8jq5WggqC33A5/UP1rBaqGVMNLNlKP3yUwBg50gSpOeUfV3ivQ0YWpFmAY0a38CstLqKGpyUJtC+h39PDEUJvEMUm0bx4Ohkd4MUv035u+MeJd8TOZFoFVsBdARhGNbN3bWuEFcJu0mtAL5VO436n2Kgqdo13Gku0ToQ7oe6At2oqwdaTqhGP7yYS9ZIe8FQro13eNCDQyt71RqYCJhp19vhKR9rkkongJGgZ6glamUQ4iPfUBIf0lygfLRoYHHn55km1SGj/UiPzNJR4JWwPo4/WmSH78M+4eB6HWwtl8Wl0dvdfAysEg3x9qiZib0VwAPRs5006fVSefQVEJvcmTnJwPSDFH+o28Q5csrVZw9eksBPb9+3NAqjOY4u7BDFNFxVI7sOIU6yHXoDSn2oMoMMzpULshb/fZ2ik/N/keC8JbyJWQXpNgmFf8jsj+H5/xcirxYq3/Cd5jk8wgK1a6u4DH87YlvrQQmUa4VSmeKDQyFN5ENxT7zuMCfVhqdazcBjwP9UadWiayUND6z+sisR9s09rRaCuVbFOWTSMuqT1pi42h2XEEd5dagsWR1rLLCVcsKbiGjLVcs0fE/UKgBFtIoytK2JaFNmcd2FtB/5rgUUFGB6qqZ8PUuxidHDjqRPsFAP9ByiLwD8oeBFVAzke+GPwV+HtJW7R2gYO4B8gSU6llW/zQVWTOu1ZZwy9TFUopk6sgi1IcXtWmKA91WhZT3xYX2efgVA2XNVI8GsgqWZzoUwaAK4ULmQsr0P6zTWaheVCio1Ajacxnt2pns3kCDVNuvX5GeSFlpEoBfDV4BtREI6QsE/dFVcOQibOZgUDpi5DJcpGytVHpHiwfRcUuCkLTXlrxXWABvDRzzYdC1zlSGy1TRK2YFBYTUqOfbA1wZukF2NfBJW59YQlFnuW99gyD/LnzqWTK2gqAAX9ZvMjOfqZw7/LQHDcAnHdQ3Ap3BG8Ai3Y51d35+7JS6rXHVN60d2GmCC2lIml1Ybt1ihTrWbYb22prBQtI+/K5QmIPXajMjA8L9+Z9z1JGoSo+uBk5HSVugicCaMbsFTv4U8GUWXwqWO4G/2msbqC2Oo3XITEH3X5ygYBr2j9zlXr1YMbSl3A/MlYOItiHV+UrYMJL5iW5X98JWZ6GmImsnM6+pGlNVLy96U2CRZtfdvALNDptVOUgQoO/PKPqpibVsV3lAbypw9CQZ64xTZZckwEcvcDPwV5R58BUBA78V8OlNGHNyQt4BaFX3SQf/lcDu4Du/gPxXYHBSO7OU4aN74Fds6RCdxT7UwfbXQDdwaTQNha1C+x+Tp/62wGrrxmntwK4uK1VaPbpJGgLiyA2Y/0NBN0C5CJu/g2fAWcCfyRP9oKsrU9n9B6g5oLBtB44Fr4CQ7kRQ9ZUe2bhA0Vqx1W8dgf6Ew6eJMOVZlPwJfqGX13km0wRjdRS223u+XPYDSzerDCfHOEcxqcaCbu2alGhDN6N92o6m9ic6VlAdVPcHoiL/1wBGexdcV/dKG9khD9EVXAKsX2ZogtjWagLyLkC/53Ok7WEVUbgmCM8b/4usauJAdiWwSIG+RZXzDALsrKBqyGAaq4LP34DvQRy9T8EBwFy1Yx3XuYD69ev7kDKNUYysoDJvPWtuNpW0AO96LZxP3vpJ/HjkTXqNmfaQtE8XD3uC+4G1PdA2sk+SH8r1EdPRDDK6bq4gZDrEvwd8uh2mdYVixCBfGtzjK3t5bQ8V/CtZtnEy9LfzfLhs2ne0OHdadfXxPCmgXB1KXwIDY501YgH1rgzmAJ/U7kyTE3pWUB1Q1yZTSXiLdDGy5YE1CKYj/y2wLjbq2q68zmjTSOBPDrBl0hZ0zzSf6OjZHGk7oevlCkLWC3wGHCl4zwWJszflbYCCPY4+pWBkRWUJDLpWUL2RYGIW4Ufv+g5QCz2N0W6m40YSUt+1RkMvy1odtlZQFT7jVtQfNFIvtjRjkmrW/09gzfjaHv0FDAKdwFo/IszVkvr1o9mQ3kawP0j9pQE6w4B71m/I96/oKBhkh4JvgSNdwuwc6sXx6KYF1k1xtqEcX1ZQ5frsgA9dyLwBQpqFQM/aB8wOCw1eV/ADQOLEEj5DXh7/2p6G9DcEqWcpVxe6VlANcuWFUyrYErglXwOq6kCOrCd4CywuNMx6cBqnVdSR8jp0p15woKPJ4/fABZRutyr+VAR+GXAN8OlGmFWstiTJsEkKrNTV1PnGjxVUugJPJWz1O7bTwTzg01yY80F754S8zqb6g70spHGi1X5FZ1+vFJ+/BF8Bn3RxkuvyDH0rqOq3laUC3bA5GhXXASi0BEPAk8AFIdkmoWFWO2mJtmvCmcD/xbqlXpah+yBw9ACZitsteJ2fXnQKpM+BHmUHNWSwV2DdBnzSLiF1EnDVoWsF1S2uPC7FbmOg2d0nvdPrQBfLDnlr8F/ATTxkE0k7mRGWr1pk+NoBfBLUOAG+bV5/2FhB1S+vH/NnSjg/G0c7gB/AKXzIGxPnmDL9ZEW3K+p4zULbAaU6mGsgqI6lgJZ/QdstH7AlXmlRejbGgb416X9SPT2mPE6sZ9HPrvTTnGudEs+p9uuMcx7Q9uID8AdwNXrqs5oJe60I2nKMBidFjm5DXvppUM2OE/6imPq0bR4FjgcuePUc+mitv6p9mdQkyr6lQCvQHaT6CL++qbhIqPHw10Vs7Tnq/FesLwTyKZoK9K5uK3HF/9GzPVPYDQ0dDkTaJu1R2OFP2AHPfzBYzn8E+E7gISDSuexwUHVV7tvUmsfvgeBz0DuPD/TDler5OHt09wINwJFWdN04rhdnEyfHRlvhMeA7EEdnxdlnleN4R+CvqFqpTgPlb4BZffl62Icr1eV+ee48DnV9rvODDqJng3a5nfzMDegTnSF183ku6A+0AjcqUYeuiXPVg74fVLpi3sxvJLz+5koHe10iOJpKRmepXNf3vl+Xx4cuOSaBkPQ5xvy04GzTUuwnRk4VuJrc9gN1mdTw4weVPp8U84uDVYE6Q1u0ZvoJ9wDv0AXVy+QrPmRHZdqFiLTVvBn0BXV/7/gcCN4EjnKfT8LXgKMbwAjQISwryuNTE+WJoFdRX832P7MeYFCsAfYFVSscsrXBE2AkqPtNXNiV1KGP28PAmLCsmW/ugeYeaO6BTD3wT8vnBxiHp+deAAAAAElFTkSuQmCC'/>
                        <span></span>
                    </div>
                    <span>今日发现<i>3390501</i>张优惠券</span>
                    <p>—— 买前先搜券，购物更划算 ——</p>


                    
                    <SegmentedControl
                    values={['搜天猫', '搜淘宝']}
                    tintColor={'#333'}
                    style={{ height: '40px', width: '250px',position:'relative',left:'0',top:'.4rem' }}
                     />
                </div>
            </Wrap>
            <Wrap1>  
            <SearchBar placeholder="请输入关键词或粘贴商品标题" ref={ref => this.autoFocusInst = ref} onBlur = { () => this.goSearch() }  />
            <Search {...this.state}></Search> 
            {/* <li>{this.state.data[0].extension.title}</li> */}
            
          
            </Wrap1>
            </div>
               
        )
    }
}
export default  withRouter(TopContainer)
