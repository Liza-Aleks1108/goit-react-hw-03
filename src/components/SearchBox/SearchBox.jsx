import React from "react";
import { Formik, Form, Field } from "formik";

function SearchBox({ onSearch }) {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => onSearch(values.search)}
    >
      {({ setFieldValue }) => (
        <Form>
          <label htmlFor="">Find contacts by name</label>
          <Field
            name="search"
            type="text"
            onChange={(e) => setFieldValue("search", e.target.value)}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
