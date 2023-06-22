let currentCount = 0;

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("plus")) {
    const plusButton = event.target;
    const customForm = plusButton.closest(".custom__form");

    const formNumbers = document.querySelectorAll(".form__number");
    const lastFormNumber = formNumbers[formNumbers.length - 1];
    const lastFormNumberText = lastFormNumber.textContent;
    const lastFormNumberParts = lastFormNumberText.split(".");
    const currentCount = Number(
      lastFormNumberParts[lastFormNumberParts.length - 1]
    );

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
          <div class="form__number">1.1.1.${currentCount + 1}</div>
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

// Get a reference to the "+Add Row" button
const addRowButton = document.querySelector(".add__row");
// Add a click event listener to the button
addRowButton.addEventListener("click", function () {
  // Create a new row
  const newRow = document.createElement("div");
  newRow.className = "custom__form";

  // Update the count
  currentCount++;

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
        <div class="form__number">1.1.1.${currentCount}</div>
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

// Function to handle the delete button click
function handleDeleteButtonClick(event) {
  const deleteButton = event.target;
  const customForm = deleteButton.closest(".custom__form");
  const formContainer = document.getElementById("form-container");

  // Update the count
  currentCount--;

  // Remove the row from the form container
  formContainer.removeChild(customForm);

  // Update the form__number in the remaining rows
  const formNumbers = document.querySelectorAll(".form__number");
  formNumbers.forEach((formNumber, index) => {
    formNumber.textContent = `1.1.1.${index + 1}`;
  });
}

// Attach event listeners to delete buttons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    handleDeleteButtonClick(event);
  }
});
