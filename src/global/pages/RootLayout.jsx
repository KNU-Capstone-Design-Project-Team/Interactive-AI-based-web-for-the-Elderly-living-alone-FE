import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <DisplayLayout>
      <FormLayout>
          <Outlet />
      </FormLayout>
    </DisplayLayout>
  );
}

const DisplayLayout = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
`;

const FormLayout = styled.div`
  width: 100%;
  max-width: 430px;

  background-color: #F9ED69;
  display: flex;
  justify-content: center;
  align-items: center;
`;


