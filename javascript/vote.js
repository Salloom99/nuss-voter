var nominees = [
    {name: 'سلوم حداد'},
    {name: 'باسم ياخور'},
    {name: 'أيمن زيدان'},
    {name: 'عابد فهد'},
    {name: 'جمال سليمان'},
    {name: 'بسام طوسا'},
    {name: 'خالد تاجا'},
    {name: 'دريد لحام'},
    {name: 'غسان مسعود'},
    {name: 'عباس النوري'},
    {name: 'ياسر العظمة'},
    {name: 'أيمن رضا'},
    {name: 'ماكسيم خليل'},
    {name: 'قصي خولي'},
    {name: 'أسعد فضة'},
    {name: 'عبد الهادي الصباغ'},
    {name: 'عبد الحكيم قطيفان'},
    {name: 'تيم حسن'},
    {name: 'يزن السيد'},
    {name: 'سيف الدين سبيعي'},
    {name: 'باسل خياط'},
    {name: 'سليم صبري'},
];


function createNominee(nominee) {

    const card = nomineeCardTemplate.content.cloneNode(true).children[0];

    const name = card.querySelector('.name');
    
    name.textContent = nominee.name;
    
    const checkbox = card.querySelector('.checkbox');
    
    checkbox.onclick = ()=> {
        nominee.checked = !nominee.checked;
    };
    
    nomineesNode.prepend(card);
    return card;
}

const nomineeCardTemplate = document.querySelector('[data-nominee-template]')

const nomineesNode = document.querySelector('.normal-list');
const filterInput = document.getElementById('filter-input');
document.querySelector('.fa-circle-xmark').addEventListener('click', ()=>{
    filterInput.value = '';
    currentNominees.forEach(nominee =>
            nominee.element.classList.remove('hidden'));
}
)

filterInput.oninput = (e)=> { 
    currentNominees.forEach(nominee => {
        if (nominee.name.includes(e.target.value))
            nominee.element.classList.remove('hidden');
        else
            nominee.element.classList.add('hidden');
    } );
}

let currentNominees = nominees.map((nominee) => {
    const nomineeCard = createNominee(nominee);
    return {
        name: nominee.name, 
        checked: false,
        hidden: false,
        element: nomineeCard
        };
});
