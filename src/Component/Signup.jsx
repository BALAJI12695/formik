import '../Css/Signup.css'
import { useFormik } from "formik";


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i.test(values.password)) {
    errors.password = 'Must contain Min 8 characters, One uppercase, one lowercase, One special Character, One numeral ';
  }

  if (!values.mobile) {
    errors.email = 'Required';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i.test(values.mobile)) {
    errors.mobile = 'Invalid Mobile Number';
  }

  return errors;
};


function Signup() {

  const Formik = useFormik({
  initialValues:{
    fName:"",
    email:"",
    password:"",
    mobile:""
  },
  validate,
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
});
  
return (
    <div className="sample">

    <form onSubmit={Formik.handleSubmit}>
      <div>
    <label htmlFor="fName">First Name</label>
    <input
      id="fName"
      name="fName"
      type="text"
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      value={Formik.values.fName}
    />
    </div>
     {Formik.touched.fName && Formik.errors.fName ? (
         <div>{Formik.errors.fName}</div>
       ) : null}
      
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      value={Formik.values.email}
    />
     {Formik.touched.email && Formik.errors.email ? (
         <div>{Formik.errors.email}</div>
       ) : null}
    
    <label htmlFor="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      value={Formik.values.password}
    />
     {Formik.touched.password && Formik.errors.password ? (
         <div>{Formik.errors.password}</div>
       ) : null}
    
    
    <label htmlFor="mobile">Mobile</label>
    <input
      id="mobile"
      name="mobile"
      type="mobile"
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      value={Formik.values.mobile}
    />
     {Formik.touched.mobile && Formik.errors.mobile ? (
         <div>{Formik.errors.mobile}</div>
       ) : null}

    <button type="submit">Submit</button>
  </form>
  </div>
);
};
  

export default Signup;