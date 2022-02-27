function handleClick() {
    document.querySelector('.menu__list').classList.toggle("menu__hidden");
    document.querySelector('.menu__btn').classList.toggle("change");
}

document.querySelector('.menu__btn').onclick = handleClick;
var table = document.querySelector('.nominees-table tbody');


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
