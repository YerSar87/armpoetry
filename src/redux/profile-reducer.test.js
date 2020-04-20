import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 5},
        {id: 2, message: 'Good Morning', likesCount: 3},
        {id: 3, message: 'Good Day', likesCount: 2},
        {id: 4, message: 'Good Evening', likesCount: 11}
    ],
};


test('length of posts should be incremented', () => {
    let action = addPostCreator("Hi friends");

    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(5);
});

test('message of new posts should be correct', () => {
    let action = addPostCreator("Hi friends");

    let newState = profileReducer(state, action);
    expect (newState.posts[4].message).toBe("Hi friends");
});

test('after deleting length og messages should be decrement', () => {

    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(3);
});

test('after deleting length should be decrement if id is incorrect', () => {

    let action = deletePost(1000);

    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(4);
});