import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <DisplayLayout>
      <FormLayout>
        <InsideLayout>
          <Outlet />
        </InsideLayout>
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

  background-color: #eceff1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideLayout = styled.div`
  width: 80%;
  height: 85%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
`;
