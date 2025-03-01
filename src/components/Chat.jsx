import React from "react";

const Chat = () => {
  return (
    <div className="p-5 bg-white shadow rounded-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-3">AI Chat Assistant</h2>
      <div className="h-60 overflow-y-auto border p-3 mb-3 bg-gray-100">
        <div className={"p-2 my-1 rounded-lg  bg-blue-500 text-white "}>
          hello
        </div>
        <div className="flex">
          <input
            className="flex-1 p-2 border rounded-l-lg"
            placeholder="Ask something..."
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
