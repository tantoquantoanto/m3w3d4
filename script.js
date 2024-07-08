/* Ho creato due funzioni per far si che al passaggio del mouse sull'icona saving, si riempisse, rimuovendo display none
 all'icona savingfill inserita in html in d-none e aggiungendolo invece a saving, in uscita al contrario */

const savings = document.querySelectorAll(".saving");

savings.forEach((saving, index) => {
  const savingFill = document.querySelectorAll(".savingfill")[index];

  const showSavingFill = () => {
    saving.classList.add("d-none");
    savingFill.classList.remove("d-none");
  };

  const hideSavingFill = () => {
    saving.classList.remove("d-none");
    savingFill.classList.add("d-none");
  };

  saving.addEventListener("mouseenter", showSavingFill);
  savingFill.addEventListener("mouseleave", hideSavingFill);
});
