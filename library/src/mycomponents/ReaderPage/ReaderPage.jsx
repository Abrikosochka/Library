import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../SupaBase/supabaseClient";
import './readerpage.css';

function ReaderPage() {
    const [readerInfo, setReaderInfo] = useState(null); // Данные о читателе
    const [libraryBooks, setLibraryBooks] = useState([]); // Список книг
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReaderData = async () => {
            // Получаем логин авторизованного пользователя из локального хранилища
            const loggedInUsername = localStorage.getItem('loggedInUser');
            
            if (loggedInUsername) {
                // Получаем информацию о пользователе из базы данных по логину
                const { data: user, error: userError } = await supabase
                    .from('users')
                    .select('first_name, last_name, Bdate')
                    .eq('login', loggedInUsername)
                    .single();

                if (userError) {
                    console.error('Ошибка при получении данных пользователя:', userError);
                } else {
                    setReaderInfo(user);

                    // Получаем список книг
                    const { data: books, error: booksError } = await supabase
                        .from('books')
                        .select();

                    if (booksError) {
                        console.error('Ошибка при загрузке книг:', booksError);
                    } else {
                        setLibraryBooks(books);
                    }
                }
            } else {
                alert('Вы не авторизованы');
                navigate('/login'); // Перенаправляем на логин, если пользователь не авторизован
            }
        };

        fetchReaderData();
    }, [navigate]);

    return (
        <div className="ReaderPage">
            <div className="textform">
                <h1>Профиль читателя</h1>
                {readerInfo ? (
                    <div id="readerInfo">
                        <p>Фамилия: {readerInfo.last_name}</p>
                        <p>Имя: {readerInfo.first_name}</p>
                        <p>Дата рождения: {new Date(readerInfo.Bdate).toLocaleDateString()}</p>
                    </div>
                ) : (
                    <p>Загрузка информации о читателе...</p>
                )}

                <section id="libraryBooks">
                    <h2>Список книг в библиотеке</h2>
                    {libraryBooks.length > 0 ? (
                        <ul id="booksList">
                            {libraryBooks.map((book, index) => (
                                <li key={index}>
                                    <strong>{book.title}</strong> - {book.author}, {book.year_published}, статус: {book.status ? 'Доступна' : 'Выдана'}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Загрузка списка книг...</p>
                    )}
                </section>
            </div>
        </div>
    );
}

export default ReaderPage;
