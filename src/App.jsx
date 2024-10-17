import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import UserInfo from './components/UserInfo';
import axiosInstance from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from 'react-bootstrap';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SunIcon from '@mui/icons-material/WbSunny'; 
import MoonIcon from '@mui/icons-material/NightsStay'; 

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      if (searchValue) {
        try {
          const result = await axiosInstance.get(`/users/${searchValue}`);
          setErrorMsg('');
          setUser(result.data);
        } catch (e) {
          setErrorMsg(e.message || ''); // Обработка ошибок
          setUser(null);
        }
      } else {
        setUser(null);
        setErrorMsg('');
      }
    }
    fetchUser();
  }, [searchValue]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Button className='switch-btn' onClick={toggleDarkMode}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
      <SearchInput handleChange={handleSearch} />
      {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
      {user ? (
        <UserInfo user={user} />
      ) : (
        <h4 className='users_not_found_title'>User not found or empty search</h4>
      )}
    </div>
  );
}

export default App;
