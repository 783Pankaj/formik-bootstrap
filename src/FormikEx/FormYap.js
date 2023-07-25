import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel: ""
}

const onSubmit = values => {
    console.log("Form values: ", values)

}
//it is provides the validation form data is requrid .. valisate is a function .it is return the objct
// const validate = values => {
//     let errors = {}
//     if (!values.name) {
//         errors.name = "Required"
//     }

//     if (!values.email) {
//         errors.email = "Required"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }

//     if (!values.channel) {
//         errors.channel = "Requried"
//     }
//     return errors
// }
 
//place have vaidation now we use Yap
const  validationSchema = Yup.object({
    name : Yup.string().required('name is required!'),
    email: Yup.string().email("Invalid Email Formate!").required('email is required!'),
    channel: Yup.string().required("Channel is required!")
})

function FormYap() {
    const storFormik = useFormik({
        initialValues,
        onSubmit,
       // validate
       validationSchema
    }
    )
    
    console.log("Formik Visisted:: ", storFormik.touched) 
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
export default FormYap;