import React from "react";
import classes from './posts.module.css';
import accountImg from "../../../assets/images/default.png";
import Post from "./Post/post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/formsControls";

const maxLength30 = maxLengthCreator(30);

const Posts = React.memo(props => {
    let state = props.profilePage;
    let postElements = [...state.posts].reverse().map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.posts}>
            <div className={classes.display}>
                {postElements}
            </div>
            <div className={classes.block}>
                <div className={classes.box}>
                    <img src={accountImg} alt="" className={classes.img}/>
                    <span className={classes.fullName}><a href="/#" className={classes.link}>Name</a></span>
                </div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
        </div>
    )
});

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <label htmlFor="">
                <span className={classes.text}>Մեկնաբանություն</span>
                <Field component={Textarea} name="newPostText" placeholder='Գրեք Ձեր հաղորդագրությունը' className={classes.message} validate={[required, maxLength30 ]}/>
            </label>
            <button className={classes.btn}>Ուղարկել</button>
        </form>
    );
};

const AddPostFormRedux = reduxForm({
    form: "profileAddPostForm"
})(AddPostForm);

export default Posts;