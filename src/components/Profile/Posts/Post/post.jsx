import React from "react";
import classes from './post.module.css';
import postImg from '../../../../assets/images/default.png';

const Post = (props) => {
    return  (
                <div className={classes.post}>
                    <table className={classes.table}>
                        <tr>
                            <td className={classes.rowImg} rowSpan='3'><img src={postImg} alt="" className={classes.img}/></td>
                            <td className={classes.fullname}>Name</td>
                        </tr>
                        <tr>
                            <td className={classes.date}>0000-00-00 00:00:00</td>
                        </tr>
                        <tr>
                            <td className={classes.message}>{props.message}</td>
                        </tr>
                    </table>
                    <span className={classes.like}>like {props.likesCount}</span>
                </div>
    )
};

export default Post;