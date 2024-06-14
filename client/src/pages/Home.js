import React, { useState, useEffect } from 'react';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import styles from './home.module.css';
import { registerUser }  from '../api';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const [state, setState] = useState(true); // true -> SignUp ; false -> SignIn
  // const [data, setData] = useState();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if(data) {
  //     registerUser(data)
  //     .then(result => {
  //       props.sendUser(result);
  //       navigate('/tasks');
  //     })
  //     .catch(err => {
  //       setError(err);
  //     });
  //   }
  // }, [data]);

  const buttonHandler = () => {
    setState(state => !state);
  }

  const getData = ({ callback, values }) => {
    // setData(userData);
    callback(values)
      .then(result => {
        props.sendUser(result.data);
        navigate('/tasks');
      })
      .catch(err => {
        setError(err);
      });
  }

  return (
    <div className={styles.container}>
      <header>
        <button onClick={buttonHandler}>{state ? "SignIn" : "SignUp" }</button>
      </header>

      <main className={styles['form-wrapper']}>
        {state ? <SignUp sendData={getData} /> : <SignIn sendData={getData} /> }
        {error && <div className={styles['error-container']}>{error.err}</div>}
      </main>
    </div>
  );
}

export default Home;