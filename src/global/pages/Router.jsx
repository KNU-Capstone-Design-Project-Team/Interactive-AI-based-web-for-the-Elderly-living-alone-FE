import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./HomePage";
import ChatPage from "@/chat/pages/ChatPage";
import RecommendPage from "@/recommend/pages/RecommendPage";

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>, children: [
        {path: "chat", element: <ChatPage/>},
        {path: "recommend", element: <RecommendPage/>}
    ]}
  ]);
  
  
  export default function Router() {
    return (
      <RouterProvider router={router}/>
    );
  }