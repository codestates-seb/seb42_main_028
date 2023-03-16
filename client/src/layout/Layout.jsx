import styled from "styled-components"


const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto auto;
`

const Layout = ({children, style})=>{
  return <Wrapper style={style}>{children}</Wrapper>
}

export default Layout