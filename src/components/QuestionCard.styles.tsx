import styled from "styled-components";

export const Wrapper = styled.div `
 p {
  font-size: 1rem;
 }
`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
`
