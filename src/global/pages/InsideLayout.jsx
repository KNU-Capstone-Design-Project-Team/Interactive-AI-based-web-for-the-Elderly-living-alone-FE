import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
        <InsideLayout>
          <Outlet />
        </InsideLayout>
  );
}


const InsideLayout = styled.div`
  width: 80%;
  height: 85%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;
