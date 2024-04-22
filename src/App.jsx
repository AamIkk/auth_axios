import React, { useState } from 'react';
import Header from './components/header/Header';
import SingUp from './components/signUp/SignUp';
import SingIn from './components/signIn/SingIn';

const App = () => {
  const [content, setContent] = useState('');

  const changeSignIn = () => {
    setContent('Sign In');
  };

  const changeSignUp = () => {
    setContent('Sign Up');
  };

  return (
    <div>
      <Header />
      <button onClick={changeSignUp}>Sign Up</button>
      <button onClick={changeSignIn}>Sign In</button>
      {content === 'Sign Up' && <SingUp/>}
      {content === 'Sign In' && <SingIn/>}
    </div>
  );
};

export default App;
