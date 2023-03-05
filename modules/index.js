const container = document.getElementById('root');

function createContent(){
   const createContent = document.createElement('div');
   createContent.classList.add('content');

   const wrapper = createWrapper();
   const formWrap = createFormWrap();
   const textTitle = createTextTitle('h1', 'text_h1', 'ToDo List');
   const buttonDeleteAll = createButton('Delete All', 'button_delete_all');
   const input = createInput();
   const buttonAdd = createButton('Add task', 'button_add')
   const containerMain = createContainerMain()
   const ulForm = createUlForm();
   const textSubTitle = createTextTitle('h2', 'text_h2', 'Your tasks')


 
   container.append(createContent);
   createContent.append(
      textTitle,
      wrapper, 
      containerMain);
   wrapper.append(formWrap);
   formWrap.append(
      buttonDeleteAll, 
      input,
      buttonAdd);
   containerMain.append(
      textSubTitle,
      ulForm);
   
   return createContent
}

function createTextTitle(tagName, className, text) {
   const createTextTitle = document.createElement(tagName);
   createTextTitle.classList.add(className);
   createTextTitle.innerText = text;

   return createTextTitle

}

function createWrapper() {
   const createWrapper = document.createElement('div');
   createWrapper.classList.add('wrapper');

   return createWrapper
}

function createFormWrap() {
   const createFormWrap = document.createElement('div');
   createFormWrap.classList.add('form_wrap');

return createFormWrap
}

function createButton(title, classList) {
   const createButton = document.createElement('button');
   createButton.classList.add('button', classList);
   createButton.innerText = title;

/*    createButton.addEventListener('click', () => {
      console.log("object");;
   }) */

   return createButton
}

function createInput(){
   const createInput = document.createElement('input');
   createInput.classList.add('input');
   createInput.setAttribute('placeholder', 'Enter a task here');

   return createInput
}

/* function createButtonAdd(){
   const createButtonAdd = document.createElement('button');
   createButtonAdd.classList.add('button', 'button_add');
   createButtonAdd.innerText = 'Add task';

return createButtonAdd
} */


/* function createForm() {

   const content = createContent();
   const wrapper = createWrapper();
   const formWrap = createFormWrap();
   const textTitle = createTextTitle('h1', 'text_h1', 'ToDo List');
   const buttonDeleteAll = createButton('Delete All', 'button_delete_all');
   const input = createInput();
   const buttonAdd = createButton('Add task', 'button_add')
   const containerMain = createContainerMain()
   const ulForm = createUlForm();
   const textSubTitle = createTextTitle('h2', 'text_h2', 'Your tasks')


 
   container.append(content);
   content.append(textTitle);
   content.append(wrapper);
   content.append(containerMain);
   wrapper.append(formWrap);
   formWrap.append(buttonDeleteAll);
   formWrap.append(input);
   formWrap.append(buttonAdd);
   containerMain.append(textSubTitle);
   containerMain.append(ulForm);

  
   return 
}
 */


function createContainerMain() {
   const createContainerMain = document.createElement('div')
   createContainerMain.classList.add('container_main');

   return createContainerMain
} 



function createUlForm() {
   const createUlForm = document.createElement('ul');
   createUlForm.classList.add('list_add-task');
   createUlForm.id = 'ul_form';
   return createUlForm
}

/* function createListItem() {
   const createListItem = document.createElement('li');
   createListItem.classList.add('list_item');

   return createListItem;
} */

function createFormTime() {
   const createFormTime = document.createElement('time');
   const date = new Date() ;
   createFormTime.classList.add('time_creation');
   createFormTime.innerHTML = date.toLocaleDateString('en-US');

   return createFormTime;
}

function createTaskText() {
   const createTaskText = document.createElement('p');
   createTaskText.classList.add('list_task_text');
   createTaskText.innerHTML = createInput.value;

   createInput.value = '';

   return createTaskText
}

/* function createButtonDone() {
   const createButtonDone = document.createElement('button');
   createButtonDone.classList.add('button', 'button_done');
   createButtonDone.innerText = 'Done';

   createButtonDone.addEventListener('click', () => {
      createTaskText.classList.toggle('list_task_text_done');
   })

   return createButtonDone
}  */

/* function createButtonDelete() {
   const createButtonDelete = document.createElement('button');
   createButtonDelete.classList.add('button', 'button_delete');
   createButtonDelete.innerText = 'Delete';


   createButtonDelete.addEventListener('click', () => {
      listItem.remove();
   })

   return createButtonDelete
} */

/* function createMain() {
   const main = document.createElement('div')
   main.classList.add('container_main');

   const wrapper = createWrapper();
   const ulForm = createUlForm();
   



   wrapper.append(main);
   main.append(ulForm);

   return createMain
} */



 function createTaskList() {
   const createTaskList = document.createElement('li');
   createTaskList.classList.add('list_item');

   const formTime = createFormTime();
   const taskText = createTaskText();
   const buttonDone = createButton('Done', 'button_done');
   const buttonDelete = createButton('Delete', 'button_delete');

   createTaskList.append(
      formTime,
      taskText,
      buttonDone,
      buttonDelete
      );

   return createTaskList
} 

const ul = document.getElementById('ul_form');
const content= createContent();

container.append(content);

const list = createTaskList();
content.append(list)