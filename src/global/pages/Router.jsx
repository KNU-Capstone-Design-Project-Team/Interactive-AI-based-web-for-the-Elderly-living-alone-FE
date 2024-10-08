import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "@/global/pages/Layout";
import HomePage from "@/global/pages/HomePage";
import ChatPage from "@/chat/pages/ChatPage";
import RecommendPage from "@/recommend/pages/RecommendPage";


const router = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
        {path: "", element: <HomePage/>},
        {path: "chat", element: <ChatPage/>},
        {path: "recommend", element: <RecommendPage/>}
    ]}
  ]);
  
  
  export default function Router() {
    return (
      <RouterProvider router={router}/>
    );
  }