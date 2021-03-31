import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Messages from "./Messages/Messages.jsx";


const Dialogs = (props) => {
  const state = props.messagesPage;

  const dialogElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} time= {d.time} key={d.id} />
  ));
  const messegesElements = state.messages.map((m) => (
    <Messages message={m.message} key={m.id} />
  ));
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
      <input type="search" placeholder="Ҷусту ҷӯ..."/>
        {dialogElements}
      </div>
      <div className={classes.messages}>
        {messegesElements}
          <div className={classes.items}>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Хабари худро ворид намоед!"
            />
            <button className={classes.sendBTN} onClick={onSendMessageClick}>
              Send
            </button>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
