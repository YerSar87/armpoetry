import React from "react";
import classes from './dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import accountImg from "../../img/default.png";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/formsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;

    return (
        <li>
            <NavLink to={path} className={classes.link} activeClassName={classes.active}>
                {props.name}
            </NavLink>
        </li>
    )
};

const Message = (props) => {
  return (
      <div className={classes.message}>{props.message}</div>
  )
};

const Dialogs = (props) => {
    console.log(props)
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    };

    if(!props.isAuth) return <Redirect to="/login"/>;

    return(
            <div className={classes.dialogs}>
                <nav className={classes.nav}>
                    <ul className={classes.users}>
                        {dialogsElements}
                    </ul>
                </nav>
                <div className={classes.messages}>
                    {messagesElements}
                    <div className={classes.account}>
                        <div className={classes.box}>
                            <img src={accountImg} alt="" className={classes.img}/>
                            <span className={classes.fullName}><a href="/#" className={classes.link}>Name</a></span>
                        </div>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
    )
};

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={classes.form}>
          <label htmlFor="post">
              <span> Հաղորդագրություն </span>
              <Field component={Textarea} name="newMessageText" placeholder='Գրեք Ձեր հաղորդագրությունը' className={classes.messageArea} validate={[required, maxLength50]}/>
          </label>
          <button className={classes.btn} >Ուղարկել</button>
      </form>
  )
};

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;