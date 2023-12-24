import React, { useState } from 'react';

const Login = ({ onLogin, onRegisterView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione lógica de autenticação aqui, por enquanto, apenas chama a prop onLogin
    onLogin({ username, password });
  };

  return (
    <div className="login-register-card">
      <h2>Login</h2>
      <label>
        Nome de Usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={onRegisterView} className="link-button">
        Registrar
      </button>
    </div>
  );
};

export default Login;