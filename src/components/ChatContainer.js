import styles from "../styles/chatContainerCss.module.css";
import ChatingWith from "./ChatingWith";
import CreateMessage from "./CreateMesage";
import Chats from "./Chats";

function ChatContainer(props) {
  const {
    loginUser,
    chatingWith,
    serverData,
    handleAddMessage,
    handleAddNewPersonToGroup,
  } = props;
  // console.log("chatingWith : ", chatingWith);
  return (
    <div className={styles.chatContainerCss}>
      <ChatingWith
        loginUser={loginUser}
        chatingWith={chatingWith}
        serverData={serverData}
        handleAddNewPersonToGroup={handleAddNewPersonToGroup}
      />
      <div className={styles.chatWholeMessage}>
        {chatingWith.Chats.map((chat) => (
          <Chats chat={chat} key={chat.IndividualChatId} />
        ))}
      </div>
      <CreateMessage
        handleAddMessage={handleAddMessage}
        chatingWith={chatingWith}
        loginUser={loginUser}
      />
    </div>
  );
}

export default ChatContainer;
