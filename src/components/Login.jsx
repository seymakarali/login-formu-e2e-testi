import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const emailError =
    email && !emailRegex.test(email) ? 'Geçerli bir email adresi giriniz.' : '';
  const passwordError =
    password && !passwordRegex.test(password)
      ? 'Şifre en az 8 karakter, 1 büyük harf, 1 rakam ve 1 özel karakter içermelidir.'
      : '';

  const isValid =
    emailRegex.test(email) && passwordRegex.test(password) && terms;

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) navigate('/success');
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          {emailError && (
            <p className="error-message" data-testid="email-error">
              {emailError}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi giriniz"
          />
          {passwordError && (
            <p className="error-message" data-testid="password-error">
              {passwordError}
            </p>
          )}
        </div>

        <div className="terms-group">
          <input
            id="terms"
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms">Şartları kabul ediyorum</label>
        </div>

        <button className="submit-btn" type="submit" disabled={!isValid}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;
