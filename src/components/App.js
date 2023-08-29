import styles from "../styles/app.module.css";
import ChatContainer from "./ChatContainer";
import ChatListContainer from "./ChatListContainer";
import { serverData } from "../serverData";
import { useState } from "react";

function App() {
  const [dataStored, setDataStored] = useState(serverData ? serverData : {});
  const [loginUser, setLoginUser] = useState(dataStored.userDetails[0]);
  const [chatingWith, setChatingWith] = useState({});

  // console.log("dataStored", dataStored);
  // console.log("UserDetails", dataStored.userDetails[0]);
  const userDetails = dataStored.userDetails;
  // console.log("loginUser :`", loginUser);

  // first default chat visible configuration
  const firstChatWith = loginUser.ChatIdCollection[0];

  // when we login with other user or we swith default 1st chats
  const handleChatingWithUser = (val) => {
    dataStored.ChatDetails.map((chatObject) => {
      if (chatObject.ChatId === val.ChatIdCollection[0]) {
        console.log(
          "loginUser.ChatIdCollection[0]",
          loginUser.ChatIdCollection[0]
        );
        setChatingWith(chatObject);
      }
    });
  };

  // Select chat from list to see all the chats with that group and person
  const handleSelectedChatingWithUser = (val) => {
    dataStored.ChatDetails.map((chatObject) => {
      if (chatObject.ChatId === val) {
        setChatingWith(chatObject);
      }
    });
  };

  // console.log("firstChatWith", firstChatWith);
  if (Object.keys(chatingWith).length == 0) {
    dataStored.ChatDetails.map((chatObject) => {
      if (chatObject.ChatId === firstChatWith) {
        setChatingWith(chatObject);
      }
    });
  }
  // console.log("chatingWithUser", chatingWith);

  const handleAddMessage = (id, newChat) => {
    console.log(newChat);
    const ChatDetails = dataStored.ChatDetails.map((chatsContains) => {
      if (chatsContains.ChatId === id) {
        chatsContains.Chats.push(newChat);
        return chatsContains;
        // console.log("NewchatsContains:", chatsContains);
      } else {
        return chatsContains;
      }
    });

    const newDataToStore = { ...dataStored, ChatDetails };
    setDataStored(newDataToStore);
    console.log("newDataToStore", dataStored);
  };

  // new user add to group orChat
  const handleAddNewPersonToGroup = (userToAdd, ChatIdInWhichUserToAdd) => {
    const newUser = {
      id: userToAdd.Id,
      chatUser: userToAdd.Name,
    };
    userToAdd.ChatIdCollection.push(ChatIdInWhichUserToAdd.ChatId);
    const userDetails = dataStored.userDetails.map((userData) => {
      if (userData.Id === userToAdd.Id) {
        return userToAdd;
      } else {
        return userData;
      }
    });
    ChatIdInWhichUserToAdd.Users.push(newUser);
    const ChatDetails = dataStored.ChatDetails.map((chatsContains) => {
      if (chatsContains.ChatId === ChatIdInWhichUserToAdd.ChatId) {
        return ChatIdInWhichUserToAdd;
      } else {
        return chatsContains;
      }
    });

    const newDataToStore = { ...dataStored, ChatDetails };
    const newDataToStoreAddedChatDetails = { ...newDataToStore, userDetails };
    setDataStored(newDataToStoreAddedChatDetails);
    console.log(
      "newDataToStoreAddedChatDetails::",
      newDataToStoreAddedChatDetails
    );

    console.log(
      "handleAddNewPersonToGroup",
      userToAdd,
      "::",
      ChatIdInWhichUserToAdd,
      "::newUser::",
      newUser
    );
  };
  // Handle create newChatGroup
  const handleCreateNewChatGroup = (userData) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var today = new Date();
    var date =
      today.getDate() +
      " " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear();
    // var time = today.getHours() + ":" + today.getMinutes();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var time = hours + ":" + minutes + " " + ampm;
    var dateTime = date + " " + time;

    const newChatGroup = {
      ChatId: Date.now(),
      CreatedAt: dateTime,
      Users: [
        {
          id: loginUser.Id,
          chatUser: loginUser.Name,
        },
        {
          id: userData.Id,
          chatUser: userData.Name,
        },
      ],
      Chats: [],
    };
    // create userNewList
    userData.ChatIdCollection.push(newChatGroup.ChatId);
    const newUserData = userData;

    const ChatIdCollection = [
      ...loginUser.ChatIdCollection,
      newChatGroup.ChatId,
    ];
    const newLoginUserData = loginUser;
    newLoginUserData.ChatIdCollection.push(newChatGroup.ChatId);

    const newUserDetails = dataStored.userDetails.map((userData) => {
      if (userData.Id === newUserData.Id) {
        return newUserData;
      } else if (userData.Id === newLoginUserData.Id) {
        return newLoginUserData;
      } else {
        return userData;
      }
    });
    console.log("newDatawithUser:", newUserDetails);
    console.log(
      "handleCreateNewChatGroup:",
      newChatGroup,
      "::",
      newUserData,
      "::",
      newLoginUserData
    );
    // create chatDetails New list
    const tempStoredDataChattingUpdate = dataStored.ChatDetails;
    tempStoredDataChattingUpdate.push(newChatGroup);
    setDataStored((data) => ({ ...data, userDetails: newUserDetails }));
    console.log(dataStored);
  };
  return (
    <div className={styles.App}>
      <select
        className={styles.select}
        defaultValue={loginUser}
        onChange={(e) => {
          setLoginUser(JSON.parse(e.target.value));
          handleChatingWithUser(JSON.parse(e.target.value));
        }}
      >
        {userDetails.map((userData) => (
          <option
            value={JSON.stringify(userData)}
            key={`option-${userData.Id}`}
          >
            {userData.Name}
          </option>
        ))}
      </select>
      <div className={styles.container}>
        <ChatListContainer
          // serverData functions pass
          loginUser={loginUser}
          serverData={dataStored}
          chatingWith={chatingWith}
          handleSelectedChatingWithUser={handleSelectedChatingWithUser}
          handleCreateNewChatGroup={handleCreateNewChatGroup}
        />
        <ChatContainer
          // serverData and new Chat Details
          loginUser={loginUser}
          chatingWith={chatingWith}
          serverData={dataStored}
          handleAddMessage={handleAddMessage}
          handleAddNewPersonToGroup={handleAddNewPersonToGroup}
        />
      </div>
    </div>
  );
}

export default App;
