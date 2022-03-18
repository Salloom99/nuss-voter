function handleClick() {
    document.querySelector('.menu__list').classList.toggle("menu__hidden");
    document.querySelector('.menu__btn').classList.toggle("change");
}

const state =  document.querySelector('.state');
const start = document.querySelector("a[href='/start']");
const stop = document.querySelector("a[href='/stop']");


function handleToggleState(e) {
    e.preventDefault();
    if ( state.textContent === "العملية جارية") {

        start.textContent = "بدأ العملية";
        state.textContent = "العملية متوقفة";
    }
    else {
        start.textContent = "إيقاف العملية";
        state.textContent = "العملية جارية";
    }
}

function handleFinishState(e) {
    e.preventDefault();
    state.textContent = "العملية منتهية";
    start.textContent = "بدأ العملية";
}

start.onclick = handleToggleState;
stop.onclick = handleFinishState;


document.querySelector('.menu__btn').onclick = handleClick;
var table = document.querySelector('.nominees-table tbody');


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


nominees.forEach((nominee, index) => {
    var row = table.insertRow(table.rows.length );
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.className = 'col-center';
    cell3.className = 'col-center';
    
    cell1.innerHTML = index +1 ;
    cell2.innerHTML = nominee.name;
    cell3.innerHTML = nominee.votes;
});
