import '../styles/Validator.css'
import {useState} from 'react'
import { useEffect } from 'react'

const Validator = (props) => {
  let [validate, setValidate] = useState(
    {
      userName: props.userName,
      password: props.password,
      passwordConfirm: props.passwordConfirm,
      valid: props.valid 
    }
  )
useEffect(() => {console.log(validate) }, [validate])
  

const usernameChange = (event) => {
setValidate({...validate, username: event.target.value}, () => {
  console.log(validate)
})
  }

  const passwordChange = (event) => {
    setValidate({...validate, password: event.target.value})
  }

const passwordConfirmChange = (event) => {
  setValidate({...validate, passwordConfirm: event.target.value})
}

  const isValid = () => {
if(validate.password === validate.passwordConfirm && validate.password !== '') {
setValidate({...validate, valid: true})
} else {
  setValidate({...validate, valid: false})
}
}

// const signUp = () => {
//   e.preventDefault()
// }



  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" onChange={usernameChange}/>
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={passwordChange} />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm" onChange={passwordConfirmChange}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit">Sign Up</button>
        <p>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
