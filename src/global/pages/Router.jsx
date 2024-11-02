import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/global/pages/RootLayout";
import InsideLayout from "@/global/pages/InsideLayout";
import HomePage from "@/global/pages/HomePage";
import ChatPage from "@/supervisor/chart/components/PersonalChart"; //"@/chat/pages/ChatPage";
import RecommendPage from "@/recommend/pages/RecommendPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 루트 경로에서 HomePage를 렌더링
      { path: "", element: <HomePage /> },
      // 그 외의 경로는 InsideLayout을 사용
      {
        path: "",
        element: <InsideLayout />,
        children: [
          { path: "chat", element: <ChatPage /> },
          { path: "recommend", element: <RecommendPage /> },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
