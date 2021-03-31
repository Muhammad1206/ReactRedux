import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../../redux/Redusers/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = (dispatch) => {
return {
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  },
  sendMessage: () => {
    dispatch(sendMessageActionCreator());
  }
}
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
