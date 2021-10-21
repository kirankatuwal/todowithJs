const addBtn = document.querySelector('#add');


const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
<div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>


        <div class="main"></div>
        <textarea class="a"></textarea>
`;

    note.insertAdjacentHTML('afterbegin', htmlData)
    // console.log(note);


    // getting the reference
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');


    // deleteing note
    deleteButton.addEventListener('click', () => note.remove
        ());

    document.body.appendChild(note);

}

addBtn.addEventListener('click', () => addNewNote());