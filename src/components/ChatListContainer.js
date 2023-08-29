import styles from "../styles/chatListContainerCss.module.css";
import CreateChatAndGroup from "./CreateChatAndGroup";
import SearchPersonToChat from "./SearchPresonToChat";
import ListOfChat from "./ListOfChat";
import { useState } from "react";

function ChatListContainer(props) {
  const [storeFilteredData, setStoreFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const {
    loginUser,
    serverData,
    handleSelectedChatingWithUser,
    handleCreateNewChatGroup,
  } = props;
  // console.log("loginUser :", loginUser);
  // console.log("serverData :", serverData);

  // list of Chats
  const filteredData = serverData.ChatDetails.filter((chatObject) => {
    return loginUser.ChatIdCollection.some((ids) => {
      return ids === chatObject.ChatId;
    });
  });

  console.log("filteredData", filteredData);
  // function to handle search input
  const handleSearchFilter = (val) => {
    setSearchInput(val);
  };

  if (searchInput.length > 2) {
    console.log(searchInput);
  }

  // Search filter
  const newSearchFilterData = filteredData.filter((eachChat) => {
    return eachChat.Users.some((eachUser) => {
      return eachUser.chatUser
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  });
  console.log("newSearchFilterData:", newSearchFilterData);

  const newServerDataprint =
    searchInput.length < 2 ? filteredData : newSearchFilterData;

  return (
    <div className={styles.chatListContainerCss}>
      <CreateChatAndGroup
        loginUser={loginUser}
        serverData={serverData}
        handleCreateNewChatGroup={handleCreateNewChatGroup}
      />
      <SearchPersonToChat handleSearchFilter={handleSearchFilter} />
      {console.log("print:", newServerDataprint)}
      {newServerDataprint.map((eachChatGroup) => (
        // console.log("eachChatGroup:", eachChatGroup);
        <ListOfChat
          key={`chatListContainer-${eachChatGroup.ChatId}`}
          handleSelectedChatingWithUser={handleSelectedChatingWithUser}
          handleCreateNewChatGroup={handleCreateNewChatGroup}
          eachChatGroup={eachChatGroup}
          loginUser={loginUser}
        />
      ))}
    </div>
  );
}

export default ChatListContainer;
