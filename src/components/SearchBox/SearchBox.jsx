import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";

function SearchBox({ onSearch }) {
  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
      {({ handleChange, values }) => (
        <Form className={css.searcForm}>
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
