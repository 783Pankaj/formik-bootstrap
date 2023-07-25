
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
    name: [""],
    email: [""],
    channel: [""],
    comment: [""],
    address: [""],
    social:{
        faceBook:[""],
        twitter:[""]
    },
    phoneNumber : ["",""]
}
const onSubmit = values => {
    console.log("Form values: ", values)

}

const validationSchema = Yup.object({
    name: Yup.string().required('name is required!'),
    email: Yup.string().email("Invalid Email Formate!").required('email is required!'),
    channel: Yup.string().required("Channel is required!")
})

function Boilerplate() {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >

            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text"
                        id="name"
                        name="name"
                        placeholder="enter the name" />
                    <ErrorMessage name="name" />
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="text"
                        id="email"
                        name="email"
                        placeholder="enter your email" />
                    <ErrorMessage name="email" />
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text"
                        id="channel"
                        name="channel"
                        placeholder="enter your channel name" />
                    <ErrorMessage name="channel" />
                </div>
                <br /><br />

                <div className="form-control">
                    <label htmlFor="comment">Comment</label>
                    <Field as="textarea" id="comment" name="comment" placeholder="enter your think" />
                    {/* <ErrorMessage name="comment" /> */}
                </div>

                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    
                    <Field name="address">
                        {
                            (props)=>{
                                const {field, /*from */ meta} = props
                                console.log('Render props: ', props)
                                return (
                                   <div>
                                       <input type="text" id="address" {...field}/>
                                       {meta.touched && meta.error ? <div>{meta.error} </div> : null}
                                    </div>
                                    )
                            }
                        }

                    </Field>
                </div>

                <div className="form-control">
                    <label htmlFor="faceBook">FaceBook</label>
                    <Field type="text" id="faceBook" name="social.faceBook" />
                </div>

                <div className="form-control">
                    <label htmlFor="twitter">Twitter</label>
                    <Field type="text" id="twitter" name="social.twitter" />
                </div>

                <div className="form-control">
                    <label htmlFor="PrimaryPh">Primary Number</label>
                    <Field type="text" id="PrimaryPh" name="phoneNumber[0]" />
                </div>

                <div className="form-control">
                    <label htmlFor="SecondryPh">Second Number</label>
                    <Field type="text" id="SecondryPh" name="phoneNumber[1]" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}
export default Boilerplate;