import styles from "../styles/createNewMessage.module.css";
import { useState } from "react";

function CreateMessage(props) {
  const { handleAddMessage, chatingWith, loginUser } = props;
  // console.log("handleAddMessage");
  console.log("chatingWith", chatingWith);
  console.log("loginUser", loginUser);
  const [text, setText] = useState("");

  const inputValueUpdate = (e) => {
    setText(e);
  };

  const submitHandle = () => {
    if (text) {
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

      const newChatToAdd = {
        IndividualChatId: Date.now(),
        ChatCreatedById: loginUser.ID,
        ChatCreatedByUserName: loginUser.Name,
        Content: text,
        CreatedAt: dateTime,
      };
      handleAddMessage(chatingWith.ChatId, newChatToAdd);
      setText("");
    }
  };
  return (
    <div className={styles.createMesage}>
      <div className={styles.inputSendContainer}>
        <input
          id="messageInput"
          placeholder="Type a message"
          value={text}
          onChange={(e) => inputValueUpdate(e.target.value)}
        />
        <button onClick={() => submitHandle()}>Send</button>
      </div>
    </div>
  );
}

export default CreateMessage;
