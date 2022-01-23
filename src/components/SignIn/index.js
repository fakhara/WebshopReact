import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';
import './styles.scss';
import AuthWrapper from './../AuthWrapper';
import FormInput from "../forms/FormInput";
import Button from './../forms/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});
const SignIn = props => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  useEffect(() => {
    if(currentUser){
      resetForm();
      navigate('/');
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit =  e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }
  const handleGooleSignIn = () => {
     dispatch(googleSignInStart());
  }
  const configAuthWrapper = {
    headline: 'LogIn'
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className='formWrap'>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">LogIn</Button>
          <div className='socialSignin'>
            <div className='row'>
              <Button onClick={handleGooleSignIn}>Sign in with Google</Button>
            </div>
          </div>
          <div className='links'>
            <Link to="/registration">Register</Link>{`|`}
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;