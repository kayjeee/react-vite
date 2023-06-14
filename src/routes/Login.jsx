import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '@/components/Header';
import { useAuthContext } from '@/context/AuthContext';
import styles from '@/styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    setUsername('');
    navigate(from, { replace: true });
  };

  return (
    <>
      <Header>
        <h1>Login</h1>
      </Header>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
