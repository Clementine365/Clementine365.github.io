const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
  // Check if the input is not blank
  if (input.value.trim() !== '') {
    // Create a new li element
    const listItem = document.createElement('li');
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    
    // Populate the li element with the input value
    listItem.textContent = input.value;
    
    // Append the delete button to the li element
    listItem.appendChild(deleteButton);
    
    // Append the li element to the unordered list
    list.appendChild(listItem);
    
    // Add an event listener to the delete button to remove the li element
    deleteButton.addEventListener('click', () => {
      list.removeChild(listItem);
    });
    
    // Send the focus back to the input element
    input.focus();
    
    // Clear the input field
    input.value = '';
  } else {
    // Input is blank, provide a message or do nothing and return focus to the input field
    input.focus();
  }
});