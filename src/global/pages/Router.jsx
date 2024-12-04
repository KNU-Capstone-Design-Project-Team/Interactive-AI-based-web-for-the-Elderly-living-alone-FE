import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/global/pages/RootLayout";
import InsideLayout from "@/global/pages/InsideLayout";
import SeniorHomePage from "@/senior/home/pages/SeniorHomePage";
import ChatPageTest from "@/senior/chat/pages/ChatPageTest";
// import ChatPage from "@/senior/chat/pages/ChatPage";
import RecommendPage from "@/senior/recommend/pages/RecommendPage";
import SupervisorHomePage from "@/supervisor/home/pages/SupervisorHomePage";
import AlarmPage from "@/supervisor/alarm/pages/AlarmPage";
import ChartPage from "@/supervisor/chart/pages/ChartPage";
import LoginPage from "@/start/pages/LoginPage";
import SignUpPage from "@/start/pages/SignUpPage";
import {ProcessStateProvider } from "@/start/context/ProcessStateContext";
import { CommonContextProvider } from "@/start/context/CommonContext";
import { SeniorContextProvider} from "@/start/context/SeniorContext";
import { SupervisorContextProvider } from "@/start/context/SupervisorContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // senior, supervisor 경로에서 각각의 HomePage를 렌더링
      { path: "senior", element: <SeniorHomePage /> },
      { path: "supervisor", element: <SupervisorHomePage /> },

      // 그 외의 경로는 InsideLayout을 사용
      {
        path: "",
        element: <InsideLayout />,
        children: [
          { path: "chat", element: <ChatPageTest /> },
          { path: "recommend", element: <RecommendPage /> },
          { path: "alarm", element: <AlarmPage /> },
          { path: "chart", element: <ChartPage /> },
          { path: "login", element: <LoginPage /> },
          { path: "signup",
            element: (
            <ProcessStateProvider>
              <CommonContextProvider>
                <SupervisorContextProvider>
                <SeniorContextProvider>
              <SignUpPage />
              </SeniorContextProvider>
              </SupervisorContextProvider>
              </CommonContextProvider>
            </ProcessStateProvider>) },

        
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
