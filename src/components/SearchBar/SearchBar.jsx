import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from './SearchBar.module.css'

export default function FilmSearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ searchTerm: "" }}
      onSubmit={(values, actions) => {
        
        if (values.searchTerm.trim() === "") {
          toast.error("Please enter a search term");
          return; 
        }

        onSearch(values.searchTerm); 
        actions.resetForm(); 
      }}
    >
      <Form className={css.Form}>
       
            <Field name="searchTerm">
          {({ field }) => (
            <input className={css.input} {...field} type="text" autoComplete="off" autoFocus placeholder="Enter key word"/>
          )}
        </Field>
        <button type="submit" className={css.button}>Search</button>
       
      
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </Formik>
  );
}
