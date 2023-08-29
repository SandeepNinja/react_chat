import styles from "../styles/chat.module.css";
function Chats(props) {
  const { chat } = props;
  console.log("chat", chat);
  return (
    // this will show all the chats in the group
    <div className={styles.chatContainer}>
      <div className={styles.chatUser}>{chat.ChatCreatedByUserName}</div>
      <div className={styles.chatContent}>{chat.Content}</div>
      <div className={styles.time}>{chat.CreatedAt}</div>
    </div>
  );
}
export default Chats;
