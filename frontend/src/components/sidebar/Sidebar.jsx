import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { ConversationsProvider } from "../../context/ConversationsContext";

function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      {/* provider */}
      <ConversationsProvider>
        <SearchInput />
        <div className="divider my-2 px-3"></div>
        <Conversations />
      </ConversationsProvider>
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
