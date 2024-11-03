import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/global/pages/RootLayout";
import InsideLayout from "@/global/pages/InsideLayout";
import SeniorHomePage from "@/global/pages/SeniorHomePage";
import ChatPage from "@/chat/pages/ChatPage";
import RecommendPage from "@/recommend/pages/RecommendPage";
import SupervisorHomePage from "@/supervisor/global/pages/SupervisorHomePage";
import AlarmPage from "@/supervisor/alarm/pages/AlarmPage";
import ChartPage from "@/supervisor/chart/pages/ChartPage";
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
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
