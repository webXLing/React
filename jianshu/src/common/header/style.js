import styled from 'styled-components'
import logo from '../../statics/image/logo.png'


// 创建 HeaderWraper 样式组件 
export const HeaderWraper = styled.div`
  height:56px;
  border-bottom:1px solid #f0f0f0
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  height:56px;
  width:100px;
  display:block;
  position:absolute;
  left:0;
  top:0;
  background:url(${logo});
  background-size:contain
`