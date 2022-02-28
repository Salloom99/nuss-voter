var nominees = [
    {name: 'محمد سالم دوماني', votes: 255},
    {name: 'محمد جسور حاج رضوان', votes: 245},
    {name: 'سامر القمحة', votes: 230},
    {name: 'محمد حمدان', votes: 214},
    {name: 'خالد باكير', votes: 201},
    {name: 'وليد الأطرش', votes: 195},
    {name: 'فادي بركة', votes: 184},
    {name: 'نهى سليمان', votes: 177},
    {name: 'بشير الحمصاني', votes: 162},
    {name: 'حاتم بركات', votes: 161},
    {name: 'فاتح الهادي', votes: 156},
    {name: 'قاسم العبدالله', votes: 153},
    {name: 'علي حيدر', votes: 147},
    {name: 'جابر الحداد', votes: 123},
    {name: 'أيمن السخني', votes: 111},
    {name: 'ثائر يوسف علي داوود', votes: 94},
    {name: 'غالي جوخدار', votes: 80},
    {name: 'محمد علي الأديب', votes: 79},
    {name: 'قصي لاخولي', votes: 50},
    {name: 'بسام المللا', votes: 33},
    {name: 'محمد حليمة', votes: 20},
    {name: 'فادي نميص', votes: 11},
];

function handleDelete(event) {
    event.target.parentElement.classList.toggle("delete");
    setTimeout(()=>event.target.parentElement.remove(), 1000);
}

function handleEdit(event) {
    var edit = event.target;
    edit.classList.toggle('fa-edit');
    edit.classList.toggle('fa-check');
    var name = event.target.parentElement.querySelector('.name');
    name.contentEditable = !name.isContentEditable;
    name.focus();
}

function addNominee() {
    var nomineeName = addNomineeInput.value;
    addNomineeInput.value = '';
    if (nomineeName === '' ||
        nominees.some( nominee => nominee.name === nomineeName)) {
            createSnackbar('لا يمكنك إضافة اسم فارغ');
            return;
        }

    nominees.push({name: nomineeName, count: 0});
    var name = createNominee();
    name.innerText = nomineeName;
    
}

var addNomineeInput = document.querySelector('.add-nominee .input');
var nomineesNode = document.querySelector('.nominees');

document.querySelector('.fa-circle-plus').onclick = addNominee;
document.querySelector('.menu__btn').onclick = () => { window.location.href = '/dashboard.html'};
document.querySelector('.input').addEventListener('keyup', event => {
    if (event.key === 'Enter')
        addNominee();
})
    

function createNominee() {
    var name = document.createElement('span');
    name.className = 'name';
    
    var editIcon = document.createElement('i');
    editIcon.className = 'fa fa-solid fa-pen-to-square clickable';
    editIcon.onclick = handleEdit;
        
    var trashIcon = document.createElement('i');
    trashIcon.className = 'fa fa-solid fa-trash clickable';
    trashIcon.onclick = handleDelete;
        
    var nomineeNode = document.createElement('li');
    nomineeNode.className = 'nominee delete';
        
    nomineeNode.appendChild(name);
    nomineeNode.appendChild(editIcon);
    nomineeNode.appendChild(trashIcon);
        
    
    nomineesNode.prepend(nomineeNode);

    setTimeout(() => nomineeNode.classList.toggle('delete'), 10)

    return name;
}

nominees.forEach((nominee) => {

    var name = createNominee();
    name.innerText = nominee.name;
    
});
