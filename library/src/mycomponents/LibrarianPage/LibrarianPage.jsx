import './librarianpage.css';

function LibrarianPage() {
  return (
    <div className="LibrarianPage">
        <div className ="container">
            <div id="formContainer" className='popupBox'>
                <h3 id="formTitle">Add reader</h3>
                <div className='userinput'>
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP' >Save</button>
                    <button className='btnP'>Cancel</button>
                </div>
            </div>
            <div id="formContainer" className='popupBox'>
                <h3 id="formTitle">Add books</h3>
                <div className='userinput'>
                </div>
                <div className='buttonsPopup'>
                    <button className='btnP' >Save</button>
                    <button className='btnP' >Cancel</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LibrarianPage;
