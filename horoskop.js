const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let number = Math.round(Math.random() * 10);

  function horoskop(number) {
    if (number >= 7) {
      return "hebat!!";
    } else if (number < 7 && number >= 4) {
      return "Boleh Juga";
    } else {
      return "mengerikan";
    }
  }

  const hasil = document.getElementById("hasil");
  const newPara = document.createElement("p");
  newPara.innerHTML = horoskop(number);
  hasil.append(newPara);
});
