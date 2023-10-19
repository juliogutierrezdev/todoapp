const formBtn = document.querySelector('#form-btn')
const tareaInput = document.querySelector('.input-form')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const totalTarea = document.querySelector('.total-tasks')
const completadaTarea = document.querySelector('.completed-tasks')
const incompletaTarea = document.querySelector('.incompleted-tasks')

let tareas = [];

const getListItemHtml = ({tarea}) => {

    const listItemHtml = `
    <li class="list-item">
        <button class="delete-task">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>  
        </button>
        <p>${tarea}</p>
        <button class="check-task">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </button>
    </li>
    `;

    return listItemHtml;
}

const renderTareas = () => {
    list.innerHTML = '';
    tareas.forEach(tarea => {
        const listElement = document.createElement('li');
        listElement.id = tarea.id;
        listElement.classList.add('ul');
        listElement.innerHTML = getListItemHtml(tarea);
        list.append(listElement);
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (tareaInput.value === '') {
        alert('Agregar una tarea para continuar')
        return;
      }

    const nuevaTarea = {
        tarea: tareaInput.value,
    }

    tareas = tareas.concat(nuevaTarea);

    localStorage.setItem('tareas', JSON.stringify(tareas));

    renderTareas();

    tareaInput.value = '';
});

const getTareas = () => {
    const tareasJSON = localStorage.getItem('tareas')

    tareas = tareasJSON ? JSON.parse(tareasJSON) : [];

    renderTareas();
}

list.addEventListener('click', e => {
   const borrarTareaBtn = document.querySelector('.delete-task');
   const tareaCompletada = document.querySelector('.check-task');
   

})

getTareas();