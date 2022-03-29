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


function createNominee() {
    // <li class="vote-card">
    // <input class="checkbox" type="checkbox" name="" id="">
    // <span class="name">
    //     محمد سالم دوماني
    // </span>
    // </li>
    var name = document.createElement('span');
    name.className = 'name';
    
    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = 'checkbox';
        
    var nomineeNode = document.createElement('li');
    nomineeNode.className = 'vote-card';
        
    nomineeNode.appendChild(checkbox);
    nomineeNode.appendChild(name);
        
    
    nomineesNode.prepend(nomineeNode);

    return name;
}

let nomineesNode = document.querySelector('.normal-list');

nominees.forEach((nominee) => {

    var name = createNominee();
    name.innerText = nominee.name;
    
});
