var nominees = [
  { name: "سلوم حداد" },
  { name: "أيمن زيدان" },
  { name: "عابد فهد" },
  { name: "جمال سليمان" },
  { name: "بسام طوسا" },
  { name: "خالد تاجا" },
  { name: "أيمن رضا" },
  { name: "قصي خولي" },
  { name: "أسعد فضة" },
  { name: "تيم حسن" },
  { name: "يزن السيد" },
  { name: "باسل خياط" },
];

document.getElementById('confirm').onclick = () => {
    window.location.href = '/thanks.html';
};
const list = document.querySelector('.normal-list');

nominees.forEach(nominee => {
    const li = document.createElement('li');
    li.textContent = nominee.name;
    list.append(li);
});