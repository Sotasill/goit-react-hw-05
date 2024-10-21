import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";

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
      <Form>
        <Field name="searchTerm">
          {({ field }) => (
            <input {...field} type="text" autoComplete="off" autoFocus />
          )}
        </Field>
        <button type="submit">Search</button>
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </Formik>
  );
}
