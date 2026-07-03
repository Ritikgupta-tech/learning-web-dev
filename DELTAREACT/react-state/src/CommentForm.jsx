import { useState } from "react";
 import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = "username can not be empty";
   } 
   return errors;
 };


export default function CommentForm({addNewComment}) {
  /*let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });*/

 const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

 /* let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    
    event.preventDefault();
    addNewComment(formData);
    setFormData({
        username:"",
        remarks:"",
        rating:5,
    });
  };*/
  
  return (
    <div>
      <h4>Give a Comment !</h4>
      <form action=""onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="add few remarks"
          value={formik.values.remarks}
         onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating- </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
         onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
