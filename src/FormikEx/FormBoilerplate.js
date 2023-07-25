
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel: ""
} 

// in place of this now we use Formik component

const onSubmit = values => {
    console.log("Form values: ", values)

}
//place have vaidation now we use Yap
const  validationSchema = Yup.object({
    name : Yup.string().required('name is required!'),
    email: Yup.string().email("Invalid Email Formate!").required('email is required!'),
    channel: Yup.string().required("Channel is required!")
})

 function FormBoilerplate() {
//     const storFormik = useFormik({
//         initialValues,
//         onSubmit,
//        validationSchema
//     }
//     )
    
    //console.log("Formik Visisted:: ", storFormik.touched) 
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >

            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text"
                        id="name"
                        name="name"
                        placeholder="enter the name" />
                        {/* // onChange={storFormik.handleChange}
                        // onBlur={storFormik.handleBlur}
                        // value={storFormik.values.name} />

                        //in place of three method formik provides to boilerplate
                    //     {...storFormik.getFieldProps('name')} />
                    // { storFormik.touched.name &&  storFormik.errors.name ? (<div className="errors">{storFormik.errors.name}</div>) : null}

                    //in place of this bolierpoint provides ErrorMassage */}
                        <ErrorMessage name="name" />
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="text"
                        id="email"
                        name="email"
                        placeholder="enter your email" />
                        {/* // onChange={storFormik.handleChange}
                        // onBlur={storFormik.handleBlur}
                        // value={storFormik.values.email} 
                    //     {...storFormik.getFieldProps('email')} />
                    // {storFormik.touched.email && storFormik.errors.email ? (<div className="errors">{storFormik.errors.email}</div>) : null} */}
                    <ErrorMessage name="email" />
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text"
                        id="channel"
                        name="channel"
                        placeholder="enter your channel name" />
                        {/* // onChange={storFormik.handleChange}
                        // onBlur={storFormik.handleBlur}
                        // value={storFormik.values.channel} 
                        {...storFormik.getFieldProps('channel')} />
                    {storFormik.touched.channel && storFormik.errors.channel ? (<div className="errors">{storFormik.errors.channel}</div>) : null} */}
                    <ErrorMessage name="channel" />
                </div>
                <br /><br />

                <button type="submit ">Submit</button>
            </Form>
        </Formik>
    );
}
export default FormBoilerplate;