import React from "react";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: ""
}

const onSubmit = values => {
    console.log("Form values: ", values)
}
//it is provides the validation form data is requrid .. validate is a function .it is return the objct
const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = "Required"
    }

    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.channel) {
        errors.channel = "Requried"
    }
    return errors
}


function FirstForm() {
    // useFormink return the object its store the object
    const storFormik = useFormik({
        initialValues,
        onSubmit,
        validate
    }
    )
    // console.log("Formik values:: ", storFormik.values) ...its show the value
    // console.log("Formik Errors:: ", storFormik.errors) ...its show the error..>requirde
    console.log("Formik Visisted:: ", storFormik.touched) // we have used usBluer..it's show the user
    // visited or input filed or not
    return (
        <div>
            <form onSubmit={storFormik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder="enter the name"
                        onChange={storFormik.handleChange}
                        onBlur={storFormik.handleBlur}
                        value={storFormik.values.name} />
                    { storFormik.touched.name &&  storFormik.errors.name ? (<div className="errors">{storFormik.errors.name}</div>) : null}
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        id="email"
                        name="email"
                        placeholder="enter your email"
                        onChange={storFormik.handleChange}
                        onBlur={storFormik.handleBlur}
                        value={storFormik.values.email} />
                    {storFormik.touched.email && storFormik.errors.email ? (<div className="errors">{storFormik.errors.email}</div>) : null}
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text"
                        id="channel"
                        name="channel"
                        placeholder="enter your channel name"
                        onChange={storFormik.handleChange}
                        onBlur={storFormik.handleBlur}
                        value={storFormik.values.channel} />
                    {storFormik.touched.channel && storFormik.errors.channel ? (<div className="errors">{storFormik.errors.channel}</div>) : null}
                </div>
                <br /><br />

                <button type="submit ">Submit</button>
            </form>
        </div>
    );
}
export default FirstForm;