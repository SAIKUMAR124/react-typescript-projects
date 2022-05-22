import { ErrorMessage, Field, Formik, yupToFormErrors } from "formik";
import * as yup from "yup";
import "./FormikForm.css";

interface FormModel {
  name: string;
  email: string;
  password: string;
  age: string;
  gender: string;
  language: string[];
  color: string;
  description: string;
}

const FormikForm = () => {
  return (
    <div role="form">
      <h1 className="regform-heading">Registration Form</h1>
      <Formik<FormModel>
        initialValues={{
          name: "",
          email: "",
          password: "",
          age: "",
          gender: "",
          language: [],
          color: "",
          description: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
          
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required("Please Enter your name")
            .min(3, "Must be 3 characters and more")
            .max(10, "Must be 15 characters and less"),

          email: yup
            .string()
            .required("Email is Required")
            .matches(
              /([a-zA-Z0-9_.-]+)@([a-zA-Z]+)([.])([a-zA-Z]+)/g,
              "Please enter a valid email address."
            ),

          password: yup
            .string()
            .required("Please Enter your password")
            .min(3, "Must be 3 characters and more")
            .max(10, "Must be 15 characters and less"),

          age: yup
            .number()
            .required("Please Enter your age")
            .min(18, "You must have 18 years to signup")
            .max(110, "Are you sure, Your age is correct"),

          gender: yup.string().required("Please Select your gender"),
        })}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          handleBlur,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className="regform-form">
            <Field
              className="regform-input"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name !== "" ? (
              <div className="mb-10px red">{errors.name}</div>
            ) : null}

            <input
              className="regform-input"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email !== "" ? (
              <div className="mb-10px red">{errors.email}</div>
            ) : null}

            <input
              className="regform-input"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password !== "" ? (
              <div className="mb-10px red">{errors.password}</div>
            ) : null}

            <input
              className="regform-input"
              type="number"
              placeholder="Enter your age"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.age && errors.age !== "" ? (
              <div className="mb-10px red">{errors.age}</div>
            ) : null}

            <div className="d-flex mb-10px">
              <div id="my-radio-group" className="mr-1">
                Gender :
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="block">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Male
                </label>
                <label className="block">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Female
                </label>
                <label className="block">
                  <Field
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Other
                </label>
              </div>
            </div>
            {touched.gender && errors.gender !== "" ? (
              <div className="mb-10px red">{errors.gender}</div>
            ) : null}

            <div className="d-flex mb-10px">
              <div id="checkbox-group" className="mr-1">
                Landuages :
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <label className="block">
                  <Field type="checkbox" name="language" value="English" />
                  English
                </label>
                <label className="block">
                  <Field type="checkbox" name="language" value="Hindi" />
                  Hindi
                </label>
                <label className="block">
                  <Field type="checkbox" name="language" value="Telugu" />
                  Telugu
                </label>
              </div>
            </div>

            {/* <div id="select-color">Color :</div>
            <div role="select" aria-labelledby="select-color"> </div> */}
            <div className="mb-10px">
              <label htmlFor="color">Color : </label>
              <Field as="select" id="color" name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <label
              htmlFor="description"
              className="mb-10px regform-description"
            >
              Description :{" "}
            </label>
            <textarea
              placeholder="Enter your description"
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ width: "100%", height: "50px" }}
            />

            <br />
            <button type="submit" className="regform-submit-btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
