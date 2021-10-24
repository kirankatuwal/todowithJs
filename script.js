const addBtn = document.querySelector('#add');
const updateLocalStograge = () => {

    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });
    console.log(notes);
    // adding to localstorage
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
<div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>


        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
`;

    note.insertAdjacentHTML('afterbegin', htmlData)
    // console.log(note);


    // getting the reference
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');


    // deleteing note
    deleteButton.addEventListener('click', () => {
        note.remove();
        updateLocalStograge();
    });

    // toggle note
    textarea.value = text;
    mainDiv.innerHTML = text;


    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML = value;
        updateLocalStograge();

    })

    document.body.appendChild(note);

}


// getting data back from localstorage
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach((note) => addNewNote(note))
}


addBtn.addEventListener('click', () => addNewNote());
