import React, { useState } from 'react'

export const SignUp = () => {
  const[signUpForm,setSignUpForm] = useState([
    {
    FirstName :"",
    LastName:"",
    Email:"",
    Address:"",
    Phoneno:"",
  }
]);
  const handleOnChange = (e,index)=>{
   let data= [...signUpForm]
   data[index][e.target.name] = e.target.value;
   setSignUpForm(data);
  };
  const signup = (e) => {
    e.preventDefault();
  
    let isFormValid = true;
    
    signUpForm.forEach((form) => {
      if (!form.FirstName || !form.LastName || !form.Address || !form.Phoneno) {
        alert("Please fill in all required fields.");
        isFormValid = false;
      } else if (!form.Email.includes("@")) {
        alert("Please enter a valid email address.");
        isFormValid = false;
      } else if (form.Phoneno.length !== 11) {
        alert("Please enter a valid 11-digit phone number.");
        isFormValid = false;
      } 
    });
  
    if (isFormValid) {
      console.log(signUpForm);
      alert("Successfully Sign Up")
    }
  };
   const add = (index) =>{
    let obj = {
      FirstName :"",
      LastName:"",
      Email:"",
      Address:"",
      Phoneno:"",
    };
    setSignUpForm([...signUpForm,obj]);
   };
    const remove = (index)=>{
     let data = [...signUpForm]
     data.splice(index,1)
     setSignUpForm(data)
    }

  return (
    <div className='SignUpContainer'>
    <div className='SignUpBox'>
      <h2>Sign Up</h2>
      {signUpForm.map((form,index)=>{
        return(
          <div className='SignUpInputFieldBox' key={index}>
          <span>FirstName</span>
          <input type="text" placeholder='name' name='FirstName'  onChange={e=>handleOnChange(e, index)} value={form.FirstName}/>
          <span>LastName</span>
          <input type="text" placeholder='name' name='LastName'  onChange={e=>handleOnChange(e, index)} value={form.LastName}/>
          <span>Email</span>
          <input type="text" placeholder='email@gmail.com' name='Email'  onChange={e=>handleOnChange(e, index)} value={form.Email}/>
          <span>Address</span>
          <input type="text" placeholder='address' name='Address' onChange={e=>handleOnChange(e, index)} value={form.Address}/>
          <span>Phone no</span>
          <input type="number" placeholder='+92' name='Phoneno'  onChange={e=>handleOnChange(e, index)} value={form.Phoneno}/>
         {index >0 &&(<button id='delbtn' onClick={() => remove(index)}>Delete</button>)}
          
        </div>
       
        );
      })}
     
      <div className='butttonDiv'>
      <button id='button1' onClick={add}>Add Form</button>
      <button id='button2' onClick={signup}>SignUp</button>
      </div>
    </div>
    </div>
  );
};
