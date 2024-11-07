import styled from "styled-components";

const NextButton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
};

const Button = styled.button`
  width: 80%;
  height: 55px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f08a5d;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);

`;

export default NextButton;