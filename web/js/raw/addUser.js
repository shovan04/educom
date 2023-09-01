const SelectElement = (x) => document.querySelector(x);
const _URL = "http://localhost/educom/";

const NameInput = SelectElement("#NameInput");
const PhoneInput = SelectElement("#PhoneInput");
const DateInput = SelectElement("#DateInput");
const EmailInput = SelectElement("#EmailInput");
const SubmitBtn = SelectElement("#SubmitData");
const MsgDiv = SelectElement("#msg");

const setCurrentDate = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  DateInput.setAttribute("max", currentDate);
  DateInput.value = currentDate;
};
setCurrentDate();
console.log(MsgDiv);

SubmitBtn.onclick = (e) => {
  e.preventDefault();
  if (
    NameInput.value !== undefined &&
    NameInput.value !== "" &&
    PhoneInput.value !== undefined &&
    PhoneInput.value !== "" &&
    /^\d{10}$/.test(PhoneInput.value) &&
    EmailInput.value !== undefined &&
    EmailInput.value !== "" &&
    DateInput.value !== undefined &&
    DateInput.value !== ""
  ) {
    fetch(_URL, {
      method: "POST",
      body: JSON.stringify({
        name: NameInput.value,
        phone: PhoneInput.value,
        email: EmailInput.value,
        join_date: DateInput.value,
      }),
    })
      .then((res) => res.json()) // Add a return statement here
      .then((data) => {
        console.log(data);
        MsgDiv.innerHTML = `<div class="alert alert-info" role="alert">${data["message"]}</div>`;
      })
      .catch((err) => console.log(err));
  } else {
    MsgDiv.innerHTML =
      '<div class="alert alert-danger fw-medium" role="alert">Please fill all the fields or Check the Pattern</div>';
  }
};
