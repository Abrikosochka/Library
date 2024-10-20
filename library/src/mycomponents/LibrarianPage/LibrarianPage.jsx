import './librarianpage.css';

function LibrarianPage() {
  return (
    <div className="LibrarianPage">
        <h1>Библиотекарь</h1>
        <div class ="container">
            <h2>Читатели</h2>
            <div id="formContainer" className='popupBox'>
                <h3 id="formTitle">Добавить пользователя</h3>
                <input type ="hidden" id ="editId"/>
                <label for ="firstname">Имя</label>
                <input type="text" id="firstname" required/>
                <label for ="lastname">Фамилия</label>
                <input type="text" id="lastname" required/>
                <label for ="Bdate">Дата рождения</label>
                <input type="date" id="Bdate" required/>
                <div className='buttonsPopup'>
                    <button className='btnP' onclick="submitForm()">Сохранить</button>
                    <button className='btnP' onclick="hideForm()">Отмена</button>
                </div>
            </div>
            <button onclick="ShowAddReaderForm()">Добавить читателя</button>
            <table id="readersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Действие</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class ="container">
            <h2>Книги</h2>
            <div id="formContainer" className='popupBox'>
                <h3 id="formTitle">Добавить книгу</h3>
                <input type ="hidden" id ="editId"/>
                <label for ="name">Название</label>
                <input type="text" id="name" required/>
                <label for ="author">Автор</label>
                <input type="text" id="author" required/>
                <label for ="yearPublished">Год издания</label>
                <input type="text" id="yearPublished" required/>
                <label for ="count">Кол-во</label>
                <input type="text" id="count" required/>
                <div className='buttonsPopup'>
                    <button className='btnP' onclick="submitForm()">Сохранить</button>
                    <button className='btnP' onclick="hideForm()">Отмена</button>
                </div>
            </div>
            <button onclick="ShowAddBookForm()">Добавить книгу</button>
            <table id="readersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Статус</th>
                        <th>Действие</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  );
}

export default LibrarianPage;
