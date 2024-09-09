import React from "react";
import { Formik, Form, Field } from "formik";

function SearchBox({ onSearch }) {
  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
      {({ handleChange, values }) => (
        <Form>
          <label htmlFor="search">Find contacts by name</label>
          <Field
            name="search"
            type="text"
            onChange={(e) => {
              handleChange(e);
              onSearch(e.target.value); // Динамическое обновление при вводе текста
            }}
            value={values.search}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
