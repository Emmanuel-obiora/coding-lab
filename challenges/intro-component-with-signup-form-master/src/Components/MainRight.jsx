import React from 'react';
import { BiSolidErrorCircle } from 'react-icons/bi'

const MainRight = () => {

  const sendEmail = (e) =>{
    e.preventDefault();

    const firstName = document.getElementById('fName').value;
    // console.log(firstName);
    const lastName = document.getElementById('lName').value;
    const email = document.getElementById('lName').value;
    const password = document.getElementById('lName').value;

    if(firstName===''){
      const errorUpdate = document.getElementById('fName').parentNode;

      errorUpdate.classList.add('error');
    } else{
      const errorUpdate = document.getElementById('fName').parentNode;

      errorUpdate.classList.remove('error');
    }

    if(lastName===''){
      const errorUpdate = document.getElementById('lName').parentNode;

      errorUpdate.classList.add('error');
    } else{
      const errorUpdate = document.getElementById('lName').parentNode;

      errorUpdate.classList.remove('error');
    }

    if(email===''){
      const errorUpdate = document.getElementById('email').parentNode;

      errorUpdate.classList.add('error');
    } else if(!isValid){
      const errorUpdate = document.getElementById('email').parentNode;

      errorUpdate.classList.add('error');
    } else{
      const errorUpdate = document.getElementById('email').parentNode;

      errorUpdate.classList.remove('error');
    }

    if(password===''){
      const errorUpdate = document.getElementById('password').parentNode;

      errorUpdate.classList.add('error');
    } else{
      const errorUpdate = document.getElementById('password').parentNode;

      errorUpdate.classList.remove('error');
    }

  }

  function isValid(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

  return (
    <article className='main-right'>
        <h2>Try it free 7 days then $20/mo. thereafter</h2>
        <form action="" className='main-right-form' onSubmit={sendEmail}>
          <div className='main-right-form-field'>
            <input type="text" placeholder='First Name' id='fName' />
            <BiSolidErrorCircle />
            <p>First name cannot be empty</p>
          </div>
          <div className='main-right-form-field'>
            <input type="text" placeholder='Last Name' id='lName' />
            <BiSolidErrorCircle />
            <p>Last name cannot be empty</p>
          </div>
          <div className='main-right-form-field'>
            <input type="email" placeholder='Email Address' id='email' />
            <BiSolidErrorCircle />
            <p>It looks like this is not a valid email</p>
          </div>
          <div className='main-right-form-field'>
            <input type="password" placeholder='Password' id='password' />
            <BiSolidErrorCircle />
            <p>Password cannot be empty</p>
          </div>

          <button className='form-btn' >Claim your free trial </button>
          <p>By clicking the button, you are agreeing to our <span className='special'>Terms and Services</span></p>
        </form>
    </article>
  )
}

export default MainRight

  

  