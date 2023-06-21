// Get a reference to the "+Add Row" button
const addRowButton = document.querySelector(".add__row");
// Add a click event listener to the button
addRowButton.addEventListener("click", function () {
  // Clone the custom__form element
  const customForm = document.querySelector(".custom__form");
  const clonedForm = customForm.cloneNode(true);

  // Append the cloned form to the form container
  const formContainer = document.getElementById("form-container");
  formContainer.appendChild(clonedForm);
});


const plus = document.getElementById("plus");
let clickPlusButton = 0;
plus.addEventListener("click", function () {
  clickPlusButton++;

  const customForm = document.getElementById("custom__form");
  const customFormSelect = document.createElement("div");
  customFormSelect.classList.add("custom__form-select");

  customFormSelect.innerHTML = `
        <div class="custom__form-select" id="custom__select">
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
    
  // Check if the click count reaches 20
  if (clickPlusButton >= 20) {
    plus.textContent = "";
    plus.disabled = true;
  }
  customForm.insertBefore(customFormSelect, customForm.firstChild);
});
