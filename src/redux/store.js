// import poetryReducer from "./poetry-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// let store = {
//     _state: {
//         poetryPage: {
//             newPostText: "hell",
//             poems: [
//                 {
//                     posts: [
//                         {id: 1, message: 'Hello', likesCount: 5},
//                         {id: 2, message: 'Good Morning', likesCount: 3},
//                         {id: 3, message: 'Good Day', likesCount: 2},
//                         {id: 4, message: 'Good Evening', likesCount: 11}
//                     ],
//                 },
//                 {
//                     posts: [
//                         {id: 1, message: 'Hello', likesCount: 5},
//                         {id: 2, message: 'Good Morning', likesCount: 3},
//                     ],
//                 }
//             ]
//         },
//         dialogsPage: {
//             newMessageText: '',
//             dialogs: [
//                 {id: 1, name: 'User1'},
//                 {id: 2, name: 'User2'},
//                 {id: 3, name: 'User3'},
//                 {id: 4, name: 'User4'},
//                 {id: 5, name: 'User5'},
//                 {id: 6, name: 'User6'},
//                 {id: 7, name: 'User7'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Privet'},
//                 {id: 3, message: 'Barev'},
//                 {id: 4, message: 'Good Morning'},
//                 {id: 5, message: 'Good Day'},
//                 {id: 6, message: 'Good Evening'},
//                 {id: 7, message: 'Yo'}
//             ]
//         },
//
//     },
//     _callSubscriber(){
//         console.log("hhhh")
//     },
//     getState(){
//       return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action){
//         this._state.poetryPage = poetryReducer(this._state.poetryPage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber(this._state);
//
//     }
// };
//
export default store;