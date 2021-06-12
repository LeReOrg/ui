export const disabledMainLayout = (open) => {
  let mainLayout = document.getElementById("main-container");
  let bodyTag = document.getElementsByClassName("bodyTag")[0];
  if (!open) {
    bodyTag.classList.add("noscrolldown");
    mainLayout.classList.add("disabled");
  } else {
    bodyTag.classList.remove("noscrolldown");
    mainLayout.classList.remove("disabled");
  }
};
