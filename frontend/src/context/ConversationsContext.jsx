import React, { createContext, useState } from "react";
import useGetConversations from "../hooks/useGetConversations";

const ConversationsContext = createContext();

export const ConversationsProvider = ({ children }) => {
  const { conversations, setConversations, getConversations } =
    useGetConversations();

  return (
    <ConversationsContext.Provider
      value={{ conversations, setConversations, getConversations }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

export default ConversationsContext;
