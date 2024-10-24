import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { supabase } from "../SupaBase/supabaseClient";
import './login.css';

function Login() {
  const [username, setUsername] = useState('введите');
  const [password, setPassword] = useState('введите');
  const [role, setRole] = useState();
  
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    
 
  }, []);


  const handleSignIn = (e) => {

    const fetchData = async () => {
      const { data, error } = await supabase
        .from('users') 
        .select()
        .eq('login', username)
        .eq('password', password)

        console.log(data);
        console.log(username);
        console.log(password);

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          localStorage.setItem('users', JSON.stringify(data));
        }
    };
   
    fetchData();

    e.preventDefault(); // предотвращаем перезагрузку страницы
    
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers[0];
    
    if (user) {
      alert(`Welcome, ${username}!`);
      // Перенаправить на соответствующую страницу в зависимости от роли
      if (role === true) {
        navigate('/librarian'); // Используйте navigate для перенаправления
      } else if (role === false) {
        navigate('/reader'); // Используйте navigate для перенаправления
      }
    } else {
      alert('Incorrect username, password, or role.');
    }
  };

  return (
    <div className="Login">
      <div className='textforms'>
        <h3>Sign in Library</h3>
          <div className='inputs'>
            <p>Input Login</p>
            <input
              type='text'
              id='input'
              value={username} // Связываем значение с состоянием
              onChange={(e) => setUsername(e.target.value)} // Обновляем состояние
            />
            <p>Input password</p>
            <input
              type='password' // Устанавливаем тип как password
              id='input'
              value={password} // Связываем значение с состоянием
              onChange={(e) => setPassword(e.target.value)} // Обновляем состояние
            />
          </div>
          <div className='checkboxes'>
            <p>Check role:</p>
            <input
                type='radio'
                name='role' // Измените на 'role', чтобы избежать конфликта
                value='librarian' // Установите значение для роли
                onChange={(e) => setRole(true)} // Обновляем состояние=
            />
            <p>Librarian</p>
            <input
                type='radio'
                name='role' // Измените на 'role', чтобы избежать конфликта
                value='reader' // Установите значение для роли
                onChange={(e) => setRole(false)} // Обновляем состояние
            />
            <p>Reader</p>
          </div>
          <div className='buttons'>
            <button type="button" onClick={handleSignIn}>Sign in</button> {/* Замените на submit */}
          </div>
      </div>
    </div>
  );
}

export default Login;