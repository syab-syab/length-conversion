import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: #5E17EB;
`

const Title = styled.a`
  color: white;
  margin: 0;
  text-decoration: none;
  font-size: 4rem;
`

const Header = () => {
  return (
    <Wrapper>
      <Title href='https://homemade-apps.vercel.app/' target='_blank'>
        長さ変換
      </Title>
    </Wrapper>
  )
}

export default Header