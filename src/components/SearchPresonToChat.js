import styles from "../styles/searchInput.module.css";
function SearchPersonToChat(props) {
  const { handleSearchFilter } = props;
  return (
    <div className={styles.commonStyle}>
      <input
        placeholder="Search or start new chat"
        onChange={(e) => handleSearchFilter(e.target.value)}
      />
      {/* <div className={styles.floatingChatDiv}>
        <ul>
          <li>skdhvkdsjkvjk</li>
          <li>lsifrhgihedi</li>
        </ul>
      </div> */}
    </div>
  );
}
export default SearchPersonToChat;
