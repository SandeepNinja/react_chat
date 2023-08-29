import { useState } from "react";
import styles from "../styles/creatChatGroup.module.css";
function CreateChatAndGroup(props) {
  const { loginUser, serverData, handleCreateNewChatGroup } = props;
  const [listVisible, setListVisible] = useState(false);
  console.log("serverData:", serverData);

  const handleListVisible = (val) => {
    console.log(val);
    setListVisible(val);
  };

  return (
    <div className={`${styles.commonStyle} ${styles.chatTopContainer}`}>
      <div className={styles.profilePic}>
        <img
          src="https://img.icons8.com/?size=512&id=13042&format=png"
          alt="my profile pic"
        />
      </div>
      <div>{loginUser.Name}</div>
      <div
        className={styles.chatIconDiv}
        onClick={() => handleListVisible(true)}
        onMouseLeave={() => handleListVisible(false)}
      >
        <img
          src="https://img.icons8.com/?size=512&id=47711&format=png"
          alt="chat icon"
        />

        {listVisible && (
          <div
            className={styles.chatListTopFloatingDiv}
            onMouseLeave={() => handleListVisible(false)}
          >
            <ul>
              {serverData.userDetails.map((userData) => {
                if (loginUser.Id !== userData.Id) {
                  return (
                    <li
                      className={styles.chatListTopFloatingDivLi}
                      key={`liKeyFloatDiv-${userData.Id}`}
                      onClick={() => handleCreateNewChatGroup(userData)}
                    >
                      <div className={styles.profilePic}>
                        <img
                          src="https://img.icons8.com/?size=512&id=13042&format=png"
                          alt="my profile pic"
                        />
                      </div>
                      <div>{userData.Name}</div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        )}
      </div>
      {/* <div className={styles.addChat}>...</div> */}
    </div>
  );
}

export default CreateChatAndGroup;
