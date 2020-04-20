import React from "react";
import classes from "./users.module.css";
import Paginator from "../Common/Paginator/paginator";
import User from "./user";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div className={classes.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
        {users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} key={u.id} />)}
        </div>
    </div>
};

export default Users;