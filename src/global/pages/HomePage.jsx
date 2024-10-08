import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/global/const/const";
export default function HomePage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h1>Home Page</h1>
      <Link to={ROUTER_PATH.CHAT}>Chat</Link>
      <Link to={ROUTER_PATH.RECOMMEND}>Recommend</Link>
    </div>
  );
}
