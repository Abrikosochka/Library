import './librarianpage.css';

function LibrarianPage() {
  return (
    <div className="LibrarianPage">
        <div class ="container">
            <div id="formContainer" className='popupBox'>
                <h3 id="formTitle">Add reader</h3>
                <div className='userinput'>
                    <input type ="hidden" id ="editId"/>
                    <label for ="firstname">First Name</label>
                    <input type="text" id="firstname" required/>
                    <label for ="lastname">Last Name</label>
                    <input type="text" id="lastname" required/>
                    <label for ="Bdate">Date of birth</label>
                    <input type="date" value="5555-55-55" id="Bdate" required/>
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP' onclick="submitForm()">Save</button>
                    <button className='btnP' onclick="hideForm()">Cancel</button>
                </div>
            </div>
            <div id="formContainer" className='popupBox'>
                <h3 id="formTitle">Add books</h3>
                <div className='userinput'>
                    <input type ="hidden" id ="editId"/>
                    <label for ="name">Title</label>
                    <input type="text" id="name" required/>
                    <label for ="author">Author</label>
                    <input type="text" id="author" required/>
                    <label for ="yearPublished">Year of publication</label>
                    <input type="text" id="yearPublished" required/>
                    <label for ="count">Quantity</label>
                    <input type="text" id="count" required/>
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP' onclick="submitForm()">Save</button>
                    <button className='btnP' onclick="hideForm()">Cancel</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LibrarianPage;
