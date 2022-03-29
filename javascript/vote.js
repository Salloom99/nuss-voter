var nominees = [
  { name: "سلوم حداد" },
  { name: "باسم ياخور" },
  { name: "أيمن زيدان" },
  { name: "عابد فهد" },
  { name: "جمال سليمان" },
  { name: "بسام طوسا" },
  { name: "خالد تاجا" },
  { name: "دريد لحام" },
  { name: "غسان مسعود" },
  { name: "عباس النوري" },
  { name: "ياسر العظمة" },
  { name: "أيمن رضا" },
  { name: "ماكسيم خليل" },
  { name: "قصي خولي" },
  { name: "أسعد فضة" },
  { name: "عبد الهادي الصباغ" },
  { name: "عبد الحكيم قطيفان" },
  { name: "تيم حسن" },
  { name: "يزن السيد" },
  { name: "سيف الدين سبيعي" },
  { name: "باسل خياط" },
  { name: "سليم صبري" },
];

function filterNominees(text) {
  currentNominees.forEach((nominee) => {
    if (nominee.name.includes(text)) nominee.element.classList.remove("hidden");
    else nominee.element.classList.add("hidden");
  });
}

function clearSearch() {
  filterInput.value = "";
  currentNominees.forEach((nominee) =>
    nominee.element.classList.remove("hidden")
  );
}

function createNominee(nominee) {
  const card = nomineeCardTemplate.content.cloneNode(true).children[0];

  const name = card.querySelector(".manager__item__text");

  name.textContent = nominee.name;

  const checkbox = card.querySelector(".checkbox");

  checkbox.onclick = () => {
    nominee.checked = !nominee.checked;
    votes.textContent = `${nominees.filter(nominee=>nominee.checked).length}/12`;
  };

  nomineesNode.prepend(card);
  return card;
}

const nomineeCardTemplate = document.querySelector("[data-nominee-template]");
const votes = document.getElementById('votes');
const nomineesNode = document.querySelector(".manager__list");
const filterInput = document.getElementById("filter-input");


document.getElementById('clear').addEventListener("click",clearSearch);
filterInput.oninput = (e) => filterNominees(e.target.value);

let currentNominees = nominees.map((nominee) => {
  const nomineeCard = createNominee(nominee);
  return {
    name: nominee.name,
    checked: false,
    hidden: false,
    element: nomineeCard,
  };
});
