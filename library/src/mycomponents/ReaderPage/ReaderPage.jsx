import React, { useEffect, useState } from 'react';
import './readerpage.css';

function ReaderPage() {
    // Задаем состояние для информации о читателе и книгах
    const [readerInfo, setReaderInfo] = useState({
        lastName: "Иванов",
        firstName: "Иван",
        birthDate: "01.01.1990"
    });

    const [libraryBooks, setLibraryBooks] = useState([
        { author: "Толстой", title: "Война и мир", year: 1869, edition: "Просвещение", quantity: 5 },
        { author: "Достоевский", title: "Преступление и наказание", year: 1866, edition: "Русская книга", quantity: 3 },
        { author: "Достоевский", title: "Преступление и наказание", year: 1866, edition: "Русская книга", quantity: 3 },
        { author: "Достоевский", title: "Преступление и наказание", year: 1866, edition: "Русская книга", quantity: 3 }
    ]);

    return (
        <div className="ReaderPage">
            <div className='textform'>
                <h1>Профиль читателя</h1>
                <div id="readerInfo">
                    <p>Фамилия: {readerInfo.lastName}</p>
                    <p>Имя: {readerInfo.firstName}</p>
                    <p>Дата рождения: {readerInfo.birthDate}</p>
                </div>
                <section id="libraryBooks">
                    <h2>Список книг в библиотеке</h2>
                    <ul id="booksList">
                        {libraryBooks.map((book, index) => (
                            <li key={index}>
                                <strong>{book.title}</strong> - {book.author}, {book.year}, издание: {book.edition}, количество: {book.quantity}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default ReaderPage;
