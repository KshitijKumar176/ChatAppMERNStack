import React, { useContext, useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import ConversationsContext from "../../context/ConversationsContext";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  var { conversations, setConversations, getConversations } =
    useContext(ConversationsContext);

  const handleSearch = async (e) => {
    const search = e.target.value;
    setSearch(search);
    console.log("Search input..." + search);
    await getConversations();
    if (search === "") {
      console.log("Conversation if search is empty ..." + conversations);
      return;
    }
    const filteredConv = conversations.filter((c) => {
      if (c.fullName.toLowerCase().includes(search.toLowerCase())) {
        return c;
      }
    });
    console.log("conversations after search...", filteredConv);
    await setConversations(filteredConv);
  };
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="input input-bordered rounded-full flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </form>
  );
}

export default SearchInput;
