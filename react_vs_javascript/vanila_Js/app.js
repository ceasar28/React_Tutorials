const button = document.querySelector("button");

// declaring the  modal
let modal;
let backdrop;

// adding event listerner to the button and a showModalHandler callback
button.addEventListener("click", showModalHandler);

// declaring the show modal callback
function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
  modalText.textContent = "Are you sure ?";

  const modalCancelAction = document.createElement("button");
  modalCancelAction.textContent = "cancel";
  modalCancelAction.className = "btn btn--alt";
  // adding event listener tothe cancel button
  modalCancelAction.addEventListener("click", closeModalHandler);

  const modalConfirmAction = document.createElement("button");
  modalConfirmAction.textContent = "Confirm";
  modalConfirmAction.className = "btn";
  modalConfirmAction.addEventListener("click", closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", closeModalHandler);
  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}
