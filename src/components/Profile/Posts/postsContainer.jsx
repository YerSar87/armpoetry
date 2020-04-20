import React from "react";
import {addPostCreator} from "../../../redux/profile-reducer";
import Posts from "./posts";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText))
        }
    }
};


export default
    connect(mapStateToProps, mapDispatchToProps)(Posts);