import styles from "../styles/listChat.module.css";
import React from "react";

function ListOfChat(props) {
  const { handleSelectedChatingWithUser, eachChatGroup, loginUser } = props;
  // console.log("eachChatGroupkjkjbk  :", eachChatGroup);
  const chatArrayLength = eachChatGroup.Chats.length - 1;
  return (
    <div
      className={styles.commonStyle}
      onClick={() => handleSelectedChatingWithUser(eachChatGroup.ChatId)}
    >
      <div className={styles.chatMiniInfo}>
        <div className={styles.profilePic}>
          <img
            src="https://img.icons8.com/?size=512&id=13042&format=png"
            alt="my profile pic"
          />
        </div>
        <div className={styles.nameAndContentMini}>
          <ul className={styles.chattingWithUl}>
            {eachChatGroup.Users.map((chatWith) => {
              if (chatWith.id !== loginUser.Id) {
                return (
                  <li
                    className={styles.chattingWithLi}
                    key={`chatListLi-${chatWith.id}`}
                  >
                    {chatWith.chatUser}
                  </li>
                );
              }
            })}
          </ul>
          <span className={styles.chatContentMini}>
            {eachChatGroup.Chats.length > 0 ? (
              <span key={`chatContent-${Date.now()}`}>
                {eachChatGroup.Chats[chatArrayLength].Content}
              </span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className={styles.displayTime}>
          {eachChatGroup.Chats.length > 0 ? (
            <span key={`chatContent-${Date.now()}`}>
              {/* {console.log("time:", eachChatGroup)} */}
              {eachChatGroup.CreatedAt}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default ListOfChat;
