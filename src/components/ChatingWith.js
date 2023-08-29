import styles from "../styles/chatWithTop.module.css";
import { useState } from "react";
function ChatingWith(props) {
  const { loginUser, chatingWith, serverData, handleAddNewPersonToGroup } =
    props;
  const [remainingUser, setRemainingUser] = useState({});
  // console.log("chatingWith: ", chatingWith);

  const HandleAddPersonToChat = (userToAdd) => {
    // console.log("userToAdd", userToAdd, chatingWith.ChatId);
    handleAddNewPersonToGroup(userToAdd, chatingWith);
  };
  return (
    <div className={styles.chatTop}>
      <div className={styles.chatWithPhoto}>
        <div className={styles.profilePic}>
          <img
            src="https://img.icons8.com/?size=512&id=13042&format=png"
            alt="my profile pic"
          />
        </div>
      </div>
      <div className={styles.chatWithName}>
        <ul className={styles.chattingWithUl}>
          {chatingWith.Users.map((ele) => {
            if (ele.id != loginUser.Id) {
              return (
                <li
                  className={styles.chattingWithLi}
                  key={`chatDetails${ele.id}`}
                >
                  {ele.chatUser}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className={styles.addMorePerson}>
        +
        <div className={styles.floatAddPersonList}>
          <div>List of User</div>

          <ul className={styles.ulStyle}>
            {serverData.userDetails.map((userData) => {
              // console.log(userData.Name);

              if (chatingWith.Users.some((user) => user.id === userData.Id)) {
                // console.log(userData.Name);
              } else {
                // console.log(userData.Name);
                return (
                  <li
                    className={styles.liStyle}
                    key={`wantToAddInChat${userData.Id}`}
                    onClick={() => HandleAddPersonToChat(userData)}
                  >
                    <div className={styles.profilePic}>
                      <img
                        src="https://img.icons8.com/?size=512&id=13042&format=png"
                        alt="my profile pic"
                      />
                    </div>
                    {userData.Name}
                  </li>
                );
                console.log("I am also triggered");
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatingWith;
