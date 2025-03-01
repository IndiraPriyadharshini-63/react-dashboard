import "./App.css";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Dashboard />
        <Chat />
      </div>
    </div>
  );
}

export default App;
