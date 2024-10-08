import {Link} from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/chat">Chat</Link>
      <Link to="/recommend">Recommend</Link>
    </div>
  );
}