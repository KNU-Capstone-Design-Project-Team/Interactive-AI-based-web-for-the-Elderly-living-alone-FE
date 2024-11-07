import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/global/pages/RootLayout";
import InsideLayout from "@/global/pages/InsideLayout";
import SeniorHomePage from "@/senior/home/pages/SeniorHomePage";
import ChatPage from "@/senior/chat/pages/ChatPage";
import RecommendPage from "@/senior/recommend/pages/RecommendPage";
import SupervisorHomePage from "@/supervisor/global/pages/SupervisorHomePage";
import AlarmPage from "@/supervisor/alarm/pages/AlarmPage";
import ChartPage from "@/supervisor/chart/pages/ChartPage";
import LoginPage from "@/start/pages/LoginPage";
import SignUpPage from "@/start/pages/SignUpPage";



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
          { path: "chat", element: <ChatPage /> },
          { path: "recommend", element: <RecommendPage /> },
          { path: "alarm", element: <AlarmPage /> },
          { path: "chart", element: <ChartPage /> },
          { path: "login", element: <LoginPage /> },
          { path: "signup", element: <SignUpPage /> },

        
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
