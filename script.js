// Select all boxes
const boxes = document.querySelectorAll('.box');
const btn = document.getElementsByTagName('button')

// Select the total element where the total value will be displayed
const totalElement = document.querySelector('.total');

// Show the bottom-container of the first box by default and select its radio button
const firstBox = boxes[0];
const firstBottomContainer = firstBox.querySelector('.bottom-container');
const firstRadioButton = firstBox.querySelector('input[type="radio"]');
const firstPrice = firstBox.querySelector('.disc-price');

if (firstBottomContainer) {
  firstBottomContainer.style.display = 'block'; // Show the first box's bottom-container
}
if (firstRadioButton) {
  firstRadioButton.checked = true; // Select the first box's radio button
}
if (firstPrice && totalElement) {
  totalElement.textContent = `Total : ${firstPrice.textContent}`; // Set the initial total
}

// Loop through each box and add a click event listener
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Collapse all other bottom containers and uncheck all radio buttons
    boxes.forEach((b) => {
      const bottomContainer = b.querySelector('.bottom-container');
      const radioButton = b.querySelector('input[type="radio"]');
      if (bottomContainer) {
        bottomContainer.style.display = 'none'; // Hide all bottom containers
      }
      if (radioButton) {
        radioButton.checked = false; // Uncheck all radio buttons
      }
    });

    // Expand the clicked box's bottom-container
    const clickedBottomContainer = box.querySelector('.bottom-container');
    if (clickedBottomContainer) {
      clickedBottomContainer.style.display =
        clickedBottomContainer.style.display === 'block' ? 'none' : 'block';
    }

    // Select the clicked box's radio button
    const clickedRadioButton = box.querySelector('input[type="radio"]');
    if (clickedRadioButton) {
      clickedRadioButton.checked = true;
    }

    // Update the total with the price from the clicked box
    const clickedPrice = box.querySelector('.disc-price');
    if (clickedPrice && totalElement) {
      totalElement.textContent = `Total : ${clickedPrice.textContent}`;
    }
  });
});

// show alert on btn click

btn[0].addEventListener('click',()=>{
    alert("Added To Cart")
})