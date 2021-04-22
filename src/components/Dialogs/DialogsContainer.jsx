import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../../redux/Redusers/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
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

export default compose(
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
