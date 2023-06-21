// Get a reference to the "+Add Row" button
const addRowButton = document.querySelector(".add__row");
// Add a click event listener to the button
addRowButton.addEventListener("click", function () {
  // Clone the custom__form element
  const customForm = document.querySelector(".custom__form");
  const clonedForm = customForm.cloneNode(true);

  // Insert the cloned form before the "+Add Row" button
  const formContainer = document.getElementById("form-container");
  formContainer.appendChild(clonedForm, addRowButton);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("plus")) {
    const plusButton = event.target;
    const customForm = plusButton.closest(".custom__form");
    const customFormSelect = document.createElement("div");
    customFormSelect.classList.add("custom__form-select");

    customFormSelect.innerHTML = `
      <div class="custom__form-select">
        <select name="" id="" class="select__container">
          <option>toggle</option>
          <option>yes/no</option>
          <option>date</option>
          <option>textarea</option>
          <option>multitext</option>
        </select>
        <div class="select__inputs">
          <div class="form__number">1.1.1.1</div>
          <div class="form__input">
            <input type="text" placeholder="Enter Field input" />
          </div>
        </div>
      </div>
    `;
    // Insert the new column within the parent row
    const customFormButtons = customForm.querySelector(".custom__form-buttons");
    customForm.insertBefore(customFormSelect, customFormButtons);
  }
});
