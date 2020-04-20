import React from "react";
import classes from "./login.module.css"
import {Field, reduxForm} from "redux-form";
import {createFieldElement, Input} from "../Common/FormsControls/formsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import val from "../Common/FormsControls/formsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
  return (
      <form onSubmit={handleSubmit} className={classes.form}>
          {/*{createFieldElement("Էլեկտրոնային հասցե", "Էլեկտրոնային հասցե", "email", [required], {Input})}*/}
          {/*{createFieldElement("Գաղտնաբառ", "Գաղտնաբառ", "password", [required], {Input}, {type: "password"})}*/}
          {/*{createFieldElement("Հիշել", null, "rememberMe", [], {Input}, {type: "checkbox"})}*/}
          <label htmlFor="" className={classes.label}>
              <span className={classes.text}>Էլեկտրոնային հասցե:</span>
              <Field type="text" name={"email"} className={classes.input} placeholder="Էլեկտրոնային հասցե" component={Input} validate={[required]}/>
          </label>
          <label htmlFor="" className={classes.label}>
              <span className={classes.text}>Գաղտնաբառ:</span>
              <Field type="password" name={"password"} className={classes.input} placeholder="Գաղտնաբառ" component={Input} validate={[required]}/>
          </label>
          <label htmlFor="" className={classes.label}>
              <Field type={"checkbox"} name={"rememberMe"} className={classes.checkbox} component={Input}/>
              <span>Հիշել:</span>
          </label>
          {error && <div className={val.formSummaryError}>
                {error}
          </div>}
          <button className={classes.btn}>Մտնել</button>
      </form>
  )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth){
        return <Redirect to={"/Profile"}/>
    }

    return <div className={classes.formContainer}>
        <h1 className={classes.title}>Մուտք</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth
  }
};
export default connect(mapStateToProps, {login})(Login);