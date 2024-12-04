import { Outlet, Link, useLocation } from "react-router-dom";
import { House } from "lucide-react";
import styled from "styled-components";

export default function Layout() {
  const location = useLocation();

  // HomeButton을 활성화할 경로 조건
  const showHomeButton = location.pathname === "/chat" || location.pathname === "/recommend";

  return (
    <DisplayLayout>
      <FormLayout>
        <Header>
          {showHomeButton && (
            <HomeButton to="/senior">
              <House size={40} color="black" />
            </HomeButton>
          )}
        </Header>
        <Content>
          <Outlet />
        </Content>
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
  background-color: #f9ed69;
  display: flex;
  flex-direction: column; /* Header와 Content를 세로로 배치 */
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const HomeButton = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
