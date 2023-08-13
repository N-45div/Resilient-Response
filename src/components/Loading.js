import React from 'react'
import styled from 'styled-components';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: white
    url("https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif") center
    no-repeat;
    z-index: 1;
`;

const Loading = () => {
  return (
    <LoadingContainer/>
  )
}

export default Loading