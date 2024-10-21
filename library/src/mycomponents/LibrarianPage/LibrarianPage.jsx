import './librarianpage.css';

function LibrarianPage() {
  return (
    <div className="LibrarianPage">
        <div class ="containerAdds">
            <div id="formContainerAdds" className='fromAdds'>
                <h3 id="formTitle">Add reader</h3>
                <div className='userinput'>
                    <p>Login</p>
                    <input type='text' id ="login" required/>
                    <p>Password</p>
                    <input type='password' id ="password" required/>
                    <p>First Name</p>
                    <input type="text" id="firstname" required/>
                    <p>Last Name</p>
                    <input type="text" id="lastname" required/>
                    <p>Date of birth</p>
                    <input type="date" value="5555-55-55" id="Bdate" required/>
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP'>Save</button>
                    <button className='btnP'>Cancel</button>
                </div>
            </div>
            <div id="formContainerAdds" className='fromAdds'>
                <h3 id="formTitle">Add books</h3>
                <div className='userinput'>
                    <input type ="hidden" id ="editId"/>
                    <p>Title</p>
                    <input type="text" id="name" required/>
                    <p>Author</p>
                    <input type="text" id="author" required/>
                    <p>Year of publication</p>
                    <input type="text" id="yearPublished" required/>
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP'>Save</button>
                    <button className='btnP'>Cancel</button>
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
                        <div className='fromInfo'>
                            <label>1</label>
                            <label>Test_FirstName</label>
                            <label>Test_Lastname</label>
                            <label>Test_19.02.2004</label>
                            <div className='buttonEdit'>
                                <button className='btnP'>Edit</button>
                                <button className='btnP'>Delete</button>
                            </div>
                        </div>
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
                        <div className='fromInfo'>
                            <label>1</label>
                            <label>TestTitle</label>
                            <label>TestAuthor</label>
                            <label>2024</label>
                            <label>Free</label>
                        </div>  
                        <div className='fromInfo'>
                            <label>2</label>
                            <label>TestTitle</label>
                            <label>TestAuthor</label>
                            <label>2022</label>
                            <label>On the hands</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LibrarianPage;
