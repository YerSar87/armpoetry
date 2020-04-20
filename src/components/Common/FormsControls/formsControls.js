import React from "react";
import classes from "./formsControls.module.css"
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return <div className={classes.formControl + ' ' + (hasError ? classes.error: '')}>
        {children}
        {hasError && <span className={classes.text}>{error}</span>}
    </div>
};


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
};

export const createFieldElement = (text = "", placeholder, name, validators, component, props = {}) => {
    return (
        <label htmlFor="" className={classes.label}>
            <span className={classes.text}>{text}</span>
            <Field name={name} className={classes.input} placeholder={placeholder} component={component} validate={validators} {...props}/>
        </label>
    )
};