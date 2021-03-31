const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
const initialState = {
  dialogs: [
    { id: 1, name: "Masha", time:"12:45" },
    { id: 2, name: "Nastiya",time: "1:52" },
    { id: 3, name: "Medved",time: "3:33" },
    { id: 4, name: "Valera",time: "22:00" },
    { id: 5, name: "Dimitriy",time: "00:12" },
    { id: 6, name: "Volk",time: "8:40" },
  ],
  messages: [
    { id: 1, message: "Hello how are you?" },
    { id: 3, message: "I am fine thank you!" },
    { id: 3, message: "Evrybody in this country..." },
    { id: 4, message: "Yo" },
    { id: 5, message: "Саломалайкум" },
    { id: 6, message: "Чӣ хел шумо?" },
    { id: 7, message: "My name is MY" },
    { id: 8, message: "Do you know?" },
    { id: 9, message: "Yo" },
    { id: 10, message: "Yo" },
    { id: 11, message: "Yo" },
    { id: 12, message: "Yo" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state, 
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      const body = state.newMessageBody;
       return {
        ...state, 
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
