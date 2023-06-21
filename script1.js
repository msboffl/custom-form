// Get a reference to the "+Add Row" button
const addRowButton = document.querySelector(".add__row");
// Add a click event listener to the button
addRowButton.addEventListener("click", function () {
  // Create a new row
  const newRow = document.createElement("div");
  newRow.className = "custom__form";

  // Add the content to the new row
  newRow.innerHTML = `
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
    <div class="custom__form-buttons">
      <button class="button plus">+</button>
      <button class="button delete">delete</button>
    </div>
  `;

  // Append the new row to the form container
  const formContainer = document.getElementById("form-container");
  formContainer.appendChild(newRow);
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

    const plusButtons = customForm.querySelectorAll(".plus");
    let clickCount = 2;
    plusButtons.forEach((button) => {
      button.addEventListener("click", function () {
        clickCount++;

        if (clickCount >= 20) {
          plusButtons.forEach((button) => {
            button.disabled = true;
            button.textContent = "";
          });
        }
      });
    });
    // Insert the new column within the parent row
    const customFormButtons = customForm.querySelector(".custom__form-buttons");
    customForm.insertBefore(customFormSelect, customFormButtons);
  }
});
