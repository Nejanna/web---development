//-------------------Lab5--------------
//Відобразити використання декількох контекстів 
import React, { useState, useEffect } from 'react';
import { useUserContext } from './ProfileContext';

const UserProfilePage = () => {
  // Отримання user та setUser з контексту
  const { user, setUser } = useUserContext();

  // Локальний стан, що зберігає змінені дані користувача
  const [editedUser, setEditedUser] = useState({ ...user });

  // Викликається при перезавантаженні сторінки, щоб витягнути дані користувача з localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      // Оновлення контексту та локального стану збереженими даними користувача
      setUser(storedUser);
      setEditedUser(storedUser);
    }
  }, [setUser]);

  // Обробник для зміни полів вводу
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Оновлення стану editedUser при зміні будь-якого поля вводу
    setEditedUser((prevEditedUser) => ({
      ...prevEditedUser,
      [name]: value,
    }));
  };

  // Обробник для оновлення профілю
  const handleUpdateProfile = () => {
    // Зберігання змінених даних в контексті
    setUser(editedUser);
    // Зберігання змінених даних в localStorage
    localStorage.setItem('user', JSON.stringify(editedUser));
  };
  return (
    <div className="user-profile">
      <h2>Ваш Профіль</h2>
      <label>
        Ім'я:
        <input
          type="text"
          name="name"
          value={editedUser.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={editedUser.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Адеса:
        <input
          type="text"
          name="address"
          value={editedUser.address}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Номер телефону:
        <input
          type="text"
          name="phoneNumber"
          value={editedUser.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfilePage;
