import './readerpage.css';

function ReaderPage() {

    var readerInfo = { 
        lastName: "Иванов", 
        firstName: "Иван", 
        birthDate: "01.01.1990" 
    }; 
    var readerInfoElement = document.getElementById("readerInfo"); 
    readerInfoElement.innerHTML = "<p>Фамилия: " + readerInfo.lastName + "</p>" + 
                                    "<p>Имя: " + readerInfo.firstName + "</p>" + 
                                    "<p>Дата рождения: " + readerInfo.birthDate + "</p>"; 
    //задаем книги 
    var libraryBooks = [ 
        { author: "Толстой", title: "Война и мир", year: 1869, edition: "Просвещение", quantity: 5 }, 
        { author: "Достоевский", title: "Преступление и наказание", year: 1866, edition: "Русская книга", quantity: 3 }, 
        { author: "Достоевский", title: "Преступление и наказание", year: 1866, edition: "Русская книга", quantity: 3 }, 
        { author: "Достоевский", title: "Преступление и наказание", year: 1866, edition: "Русская книга", quantity: 3 } 
    ]; 
    //отображаем книги на странице 
    var booksListElement = document.getElementById("booksList"); 
    var booksHTML = ""; 

    for (var i = 0; i < libraryBooks.length; i++) { 
        booksHTML += "<li><strong>" + libraryBooks[i].title + "</strong> - " + 
                        libraryBooks[i].author + ", " + libraryBooks[i].year +  
                        ", издание: " + libraryBooks[i].edition +  
                        ", количество: " + libraryBooks[i].quantity + "</li>"; 
    } 

    booksListElement.innerHTML = booksHTML; 
    
  return (
    <div className="ReaderPage">
        <div className='textform'>
            <h1>Профиль читателя</h1> 
            <div id="readerInfo"> 
                <p>Фамилия: <lastName></lastName></p> 
                <p>Имя: <firstName></firstName></p> 
                <p>Дата рождения: <birthDate></birthDate></p> 
            </div> 
            <section id="libraryBooks"> 
                <h2>Список книг в библиотеке</h2> 
                <ul id="booksList"> 
                </ul> 
            </section> 
        </div>   
    </div>
  );
}

export default ReaderPage;
