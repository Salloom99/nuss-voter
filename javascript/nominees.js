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

function handleDelete(event) {
  event.target.parentElement.classList.toggle("delete");
  setTimeout(() => event.target.parentElement.remove(), 1000);
}

function handleEdit(event) {
  var edit = event.target;
  edit.classList.toggle("fa-edit");
  edit.classList.toggle("fa-check");
  var name = event.target.parentElement.querySelector(".name");
  name.contentEditable = !name.isContentEditable;
  name.focus();
}

function addNominee() {
  var nomineeName = addNomineeInput.value;
  addNomineeInput.value = "";
  if (
    nomineeName === "" ||
    nominees.some((nominee) => nominee.name === nomineeName)
  ) {
    createSnackbar("لا يمكنك إضافة اسم فارغ");
    return;
  }

  nominees.push({ name: nomineeName, count: 0 });
  createNominee({name: nomineeName});
}

function createNominee(nominee) {
  const card = nomineeCardTemplate.content.cloneNode(true).children[0];

  const name = card.querySelector(".manager__item__text");
  name.textContent = nominee.name;

  const editIcon = card.querySelector("#edit");
  editIcon.onclick = handleEdit;

  const trashIcon = card.querySelector("#delete");
  trashIcon.onclick = handleDelete;

  nomineesNode.prepend(card);

  setTimeout(() => card.classList.toggle("delete"), 10);
}



const nomineeCardTemplate = document.querySelector("[data-nominee-template]");

var addNomineeInput = document.getElementById("addInput");
const nomineesNode = document.querySelector("[data-nominees-container]");

document.getElementById("add").onclick = addNominee;
document.querySelector(".menu__btn").onclick = () => {
  history.back();
};
document.querySelector(".input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") addNominee();
});


nominees.forEach((nominee) => createNominee(nominee));
