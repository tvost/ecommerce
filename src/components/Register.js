import React, { useState } from 'react';

const Register = ({ onRegister, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Adicione lógica de registro aqui
    onRegister({ username, password });
  };

  return (
    <div className="login-register-card register-card">
      <h2>Registro</h2>
      <label>
        Nome de usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Registrar</button>
      <button onClick={onBack}>Voltar</button>
    </div>
  );
};

export default Register;