import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../SupaBase/supabaseClient";
import './readerpage.css';

function ReaderPage() {
    const [readerInfo, setReaderInfo] = useState(null); // Данные о читателе
    const [libraryBooks, setLibraryBooks] = useState([]); // Список книг
    const [handlibraryBooks, setHandLibraryBooks] = useState([]); // Список книг
    const [readhandlibraryBooks, setReadHandLibraryBooks] = useState([]); // Список книг
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReaderData = async () => {
            // Получаем логин авторизованного пользователя из локального хранилища
            const loggedInUsername = JSON.parse(localStorage.getItem('users'))[0];
            
            // Получаем информацию о пользователе из базы данных по логину
            setReaderInfo(loggedInUsername);
            // Получаем список книг
            const { data: books, error: booksError } = await supabase
                .from('books')
                .select();

            if (booksError) {
                console.error('Ошибка при загрузке книг:', booksError);
            } else {
                setLibraryBooks(books);
            }

            const { data, error} = await supabase
                .from('loans')
                .select()
                .eq(
                    'login', loggedInUsername.login
                )
                .eq(
                    'isRead', false
                );

            if (booksError) {
                console.error('Ошибка при загрузке книг:', error);
            } else {
                console.log(data)
                setHandLibraryBooks(data);
            }

            const { data: dataread, error: errorread} = await supabase
                .from('loans')
                .select()
                .eq(
                    'login', loggedInUsername.login
                )
                .eq(
                    'isRead', true
                );

            if (booksError) {
                console.error('Ошибка при загрузке книг:', errorread);
            } else {
                console.log(dataread)
                setReadHandLibraryBooks(dataread);
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

                <div className='tabels'>
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
                    <section id="libraryBooks">
                        <h2>Список книг на руках</h2>
                        {handlibraryBooks.length > 0 ? (
                            <ul id="booksList">
                                {handlibraryBooks?.map((book, index) => 
                                    libraryBooks?.map((book2) =>(
                                        book2.id === book.book_id ? 
                                        <li key={index}>
                                            <strong>{book2.title}</strong> - {book2.author}, {book2.year_published}
                                        </li> 
                                        : ""
                                    )
                                ))}
                            </ul>
                        ) : (
                            <p>Загрузка списка книг  или книги нет...</p>
                        )}
                    </section>
                    <section id="libraryBooks">
                        <h2>Список прочитанных книг</h2>
                        {readhandlibraryBooks.length > 0 ? (
                            <ul id="booksList">
                            {readhandlibraryBooks?.map((book, index) => 
                                libraryBooks?.map((book2) =>(
                                    book2.id === book.book_id ? 
                                    <li key={index}>
                                        <strong>{book2.title}</strong> - {book2.author}, {book2.year_published}
                                    </li> 
                                    : ""
                                )
                            ))}
                        </ul>
                        ) : (
                            <p>Загрузка списка книг или книги нет...</p>
                        )}
                    </section>
                </div>
                
            </div>
        </div>
    );
}

export default ReaderPage;
