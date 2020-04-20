const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'},
        {id: 6, name: 'User6'},
        {id: 7, name: 'User7'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Privet'},
        {id: 3, message: 'Barev'},
        {id: 4, message: 'Good Morning'},
        {id: 5, message: 'Good Day'},
        {id: 6, message: 'Good Evening'},
        {id: 7, message: 'Yo'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: newMessageText}],
            };

        default:
            return state;
    }
};


export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;