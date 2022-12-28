import react from 'react';
import SignIn from './signIn';
import SignUp from './signUp';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Home;