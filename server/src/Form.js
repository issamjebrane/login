import React from "react"
function Form(){
    return   (
  <form action="" method='POST' class="shadow p-3 mb-5 bg-white rounded">
    <h1 className='text-center'>Login</h1>
    <div className='form-groupe mb-4 '>
      <label htmlFor="username">username</label>
      <input type='text' name="username" id="username" className='form-control'></input>
    </div> 
    <div className='form-groupe mb-4'>
      <label htmlFor="email">email</label>
      <input type='text' name="email" id="email" className='form-control'></input>
    </div> 
    <div className='form-groupe mb-4'>
      <label htmlFor="password">password</label>
      <input type='password' name="password" id="password" className='form-control'></input>
    </div> 
    <button className='btn btn-primary' type="submit">save</button>
  </form>
    );
}

export default Form;