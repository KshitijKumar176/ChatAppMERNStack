import React, { useContext, useEffect } from "react";
import Conversation from "./Conversation";
import ConversationsContext from "../../context/ConversationsContext";

function Conversations() {
  const { loading, conversations } = useContext(ConversationsContext);
  console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
