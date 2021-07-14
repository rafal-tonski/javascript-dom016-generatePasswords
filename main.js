const btn = document.querySelector("button");
const placeForList = document.querySelector("section");

const signsForPasswords = "ABCDEFGHIJKLMNOPRSTUWXYZ0123456789!@#$%^&*";

const codesNumber = 1000;
const signsNumber = 10;

const generatePasswords = () => {
  placeForList.innerHTML = "";
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (j = 0; j < signsNumber; j++) {
      let index = Math.floor(Math.random() * signsForPasswords.length);
      code += signsForPasswords[index];
    }

    const div = document.createElement("div");
    div.textContent = code;
    placeForList.appendChild(div);
  }
};

btn.addEventListener("click", generatePasswords);
    