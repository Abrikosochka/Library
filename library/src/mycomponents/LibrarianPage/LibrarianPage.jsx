import './librarianpage.css';
import { supabase } from "../SupaBase/supabaseClient";
import { useState, useEffect } from 'react';

function LibrarianPage() {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bDate, setBDate] = useState('');

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [yearPublished, setYearPublished] = useState('');

    const [loanBookId, setLoanBookId] = useState('');
    const [loanReaderLogin, setLoanReaderLogin] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await supabase.from('users').select();
            const bookResponse = await supabase.from('books').select();
    
            if (userResponse.error) {
                console.error('Error fetching users:', userResponse.error);
            } else {
                setUsers(userResponse.data);
            }
    
            if (bookResponse.error) {
                console.error('Error fetching books:', bookResponse.error);
            } else {
                setBooks(bookResponse.data);
            }
        };
        fetchData();
    }, []);

    const AddXmlCodeUsers = () =>{
        const filteredUsers = users.filter(user => !user.is_librarian);
        return filteredUsers.map(user => CreatedXmlCodeUsers(user));
    }
    const CreatedXmlCodeUsers = (element) => {
        return (
            <div className='fromInfo'>
                <label>{element.login}</label>
                <label>{element.first_name}</label>
                <label>{element.last_name}</label>
                <label>{element.Bdate}</label>
                <div className='buttonEdit'>
                    <button id={element.login} className='btnP' onClick={() => handleDeleteUser(element.login)}>Delete</button>
                </div>
            </div> 
          );
    }

    const AddXmlCodeBooks = () =>{
        return books.map(books => CreatedXmlCodeBooks(books));
    }
    const CreatedXmlCodeBooks = (element) => {
        return (
            <div className='fromInfo'>
                <label>{element.id}</label>
                <label>{element.title}</label>
                <label>{element.author}</label>
                <label>{element.year_published}</label>
                <label>{element.status ? 'Free' : 'On hands'}</label>
                <button id={element.id} className='btnP' onClick={() => handleDeleteBooks(element.id)}>Delete</button>
            </div> 
          );
    }

    const handleAddUser = async () => {
        const { error } = await supabase
            .from('users')
            .insert([
                { login, password, first_name: firstName, last_name: lastName, Bdate: bDate, is_librarian: false }
            ]);

        if (error) {
            console.error('Error adding user:', error);
        } else {
            setUsers([...users, { login, first_name: firstName, last_name: lastName, Bdate: bDate }]);
            setLogin('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setBDate('');
        }
    };

    const handleAddBook = async () => {
        const { error } = await supabase
            .from('books')
            .insert([
                {id: books[books.length - 1].id + 1, title: bookTitle, author: bookAuthor, year_published: yearPublished, status: true }
            ]);

        if (error) {
            console.error('Error adding book:', error);
        } else {
            setBooks([...books, {id: books[books.length - 1].id + 1, title: bookTitle, author: bookAuthor, year_published: yearPublished, status: true }]);
            setBookTitle('');
            setBookAuthor('');
            setYearPublished('');
        }
    };

    const handleAddLoan = async () => {
        const { data } = await supabase
            .from('books')
            .select()
            .eq('id', loanBookId);
        if (!data[0].status) {
            const { error: ErrorClose } = await supabase
                .from('books')
                .update({ status: true })
                .eq('id', loanBookId);
            const { error } = await supabase
                .from('loans')
                .update({ isRead: true })
                .eq('book_id', loanBookId)
                .eq('login', loanReaderLogin);
            
            if (error) console.log(error);
            if (ErrorClose) console.log(ErrorClose);

            setLoanBookId('');
            setLoanReaderLogin('');
            return;
        };

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const { error: ErrorInsert } = await supabase
            .from('loans')
            .insert([
                { book_id: loanBookId, login: loanReaderLogin, loan_date: `${year}-${month}-${day}`, return_date: null, isRead: false}
            ]);

        const { error: ErrorUpdate } = await supabase
            .from('books')
            .update({ status: false })
            .eq('id', loanBookId);
        if (ErrorInsert) {
            console.error('Error adding loan:', ErrorInsert);
        } else if (ErrorUpdate) {
            console.error('Error adding loan:', ErrorUpdate);
        }else{
            setLoanBookId('');
            setLoanReaderLogin('');
        }
    };

    const handleDeleteBooks = async (book_id) => {
        const { error } = await supabase
            .from('books')
            .delete()
            .eq('id', book_id)
        if (error) console.log(error);
    };

    const handleDeleteUser = async (login) => {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('login', login)
        if (error) console.log(error);
    };

    return (
    <div className="LibrarianPage">
        <div class ="containerAdds">
            <div id="formContainerAdds" className='fromAdds'>
                <h3 id="formTitle">Add reader</h3>
                    <div className='userinput'>
                        <p>Login</p>
                        <input 
                            type='text' 
                            id="login" 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)} 
                            required 
                        />
                        <p>Password</p>
                        <input 
                            type='password' 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <p>First Name</p>
                        <input 
                            type="text" 
                            id="firstname" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                            required 
                        />
                        <p>Last Name</p>
                        <input 
                            type="text" 
                            id="lastname" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                            required 
                        />
                        <p>Date of birth</p>
                        <input 
                            type="date" 
                            id="Bdate" 
                            value={bDate}
                            onChange={(e) => setBDate(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className='buttonsPopup'>
                        <button className='btnP' onClick={handleAddUser}>Send req</button>
                    </div>
            </div>
            <div id="formContainerAdds" className='fromAdds'>
                <h3 id="formTitle">Add book</h3>
                <div className='userinput'>
                    <p>Title</p>
                    <input 
                        type="text" 
                        id="name" 
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)} 
                        required 
                    />
                    <p>Author</p>
                    <input 
                        type="text" 
                        id="author" 
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)} 
                        required 
                    />
                    <p>Year of publication</p>
                    <input 
                        type="text" 
                        id="yearPublished" 
                        value={yearPublished}
                        onChange={(e) => setYearPublished(e.target.value)} 
                        required 
                    />
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP' onClick={handleAddBook}>Send req</button>
                </div>
            </div>
            <div id="formContainerAdds" className='fromAdds'>
                    <h3 id="formTitle">Add loans / Close loans</h3>
                    <div className='userinput'>
                        <p>Id book</p>
                        <input 
                            type="text" 
                            id="loanBookId" 
                            value={loanBookId}
                            onChange={(e) => setLoanBookId(e.target.value)} 
                            required 
                        />
                        <p>Login reader</p>
                        <input 
                            type="text" 
                            id="loanReaderLogin" 
                            value={loanReaderLogin}
                            onChange={(e) => setLoanReaderLogin(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className='buttonsPopup'>
                        <button className='btnP' onClick={handleAddLoan}>Add loans</button>
                    </div>
                </div>
        </div>
        <div className='Info'>
            <div className='AbsolutInfoContainer'>
                <div className='AbsolutInfo'>
                    <h3 className='fromTitle'>Readers</h3>
                    <div className='fromInfo'>
                        <label>Login</label>
                        <label>Firstname</label>
                        <label>Lastname</label>
                        <label>Date of birth</label>
                        <label>Action</label>
                    </div>
                </div>
                <div className='containerInfo'>
                    <div id="formContainerInfo">
                        {AddXmlCodeUsers()}
                    </div>
                </div>
            </div>
            <div className='AbsolutInfoContainer'>
                <div className='AbsolutInfo'>
                    <h3 className='fromTitle'>Books</h3>
                    <div className='fromInfo'>
                        <label>Id</label>
                        <label>Title</label>
                        <label>Author</label>
                        <label>Year published</label>
                        <label>Status</label>
                    </div>
                </div>
                <div className='containerInfo'>
                    <div id="formContainerInfo">
                        {AddXmlCodeBooks()}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LibrarianPage;