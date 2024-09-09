import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

// Схема валидации с помощью Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Number is required"),
});

function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onSubmit(newContact);
        resetForm(); // Сбрасываем форму после добавления контакта
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className="error" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
