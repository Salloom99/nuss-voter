var nominees = [
    {name: 'سلوم حداد', votes: 255},
    {name: 'باسم ياخور', votes: 245},
    {name: 'أيمن زيدان', votes: 230},
    {name: 'عابد فهد', votes: 214},
    {name: 'جمال سليمان', votes: 201},
    {name: 'بسام طوسا', votes: 195},
    {name: 'خالد تاجا', votes: 184},
    {name: 'دريد لحام', votes: 177},
    {name: 'غسان مسعود', votes: 162},
    {name: 'عباس النوري', votes: 161},
    {name: 'ياسر العظمة', votes: 156},
    {name: 'أيمن رضا', votes: 153},
    {name: 'ماكسيم خليل', votes: 147},
    {name: 'قصي خولي', votes: 123},
    {name: 'أسعد فضة', votes: 111},
    {name: 'عبد الهادي الصباغ', votes: 94},
    {name: 'عبد الحكيم قطيفان', votes: 80},
    {name: 'تيم حسن', votes: 79},
    {name: 'يزن السيد', votes: 50},
    {name: 'سيف الدين سبيعي', votes: 33},
    {name: 'باسل خياط', votes: 20},
    {name: 'سليم صبري', votes: 11},
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
