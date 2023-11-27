import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="64698a31-a18f-4bfc-b189-09d677a542af"
      userName="kvng"
      userSecret="kvng8420"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
