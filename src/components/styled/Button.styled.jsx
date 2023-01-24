import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-family: inherit;
  font-size: 20px;
  padding: 15px 35px;
  border-radius: 50px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: ${({ bg }) => bg};
  cursor: pointer;
  margin-right: 25px;

  &:hover {
    transform: scale(0.98);
  }
`;
