import React from "react";
import classes from './profile.module.css';
import Preloader from "../Common/Preloader/preloader";
import userPhoto from "../../assets/images/default.png"
import {Redirect} from "react-router-dom";
import ProfileStatus from "./profileStatus";
import PostsContainer from "./Posts/postsContainer";
import ProfileStatusWithHooks from "./profileStatusWithHooks";


const Profile = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }


    return <div className={classes.profile}>
        <div>
            <h2>{profile.fullName}</h2>
            <ProfileStatusWithHooks status={"Hello, my friends"} status={status} updateStatus={updateStatus}/>
            <div><img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt=""/></div>
        </div>
        <PostsContainer/>
    </div>

};

export default Profile;