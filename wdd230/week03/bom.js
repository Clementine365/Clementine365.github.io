

const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

// Display existing chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add event listener to the "Add Chapter" button
button.addEventListener('click', () => {
  const chapterInput = input.value.trim();
  if (chapterInput !== '') {
    displayList(chapterInput);
    chaptersArray.push(chapterInput);
    setChapterList(chaptersArray);
    input.value = '';
    input.focus();
  }
});

// Function to display a chapter and its delete button
function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  li.appendChild(deleteButton);
  list.appendChild(li);

  // Add event listener to the delete button
  deleteButton.addEventListener('click', function () {
    const chapter = li.textContent.slice(0, -1); // Remove ❌ from the chapter name
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(chaptersArray);
    list.removeChild(li);
    input.focus();
  });
}

// Function to set chaptersArray in localStorage
function setChapterList(chapters) {
  localStorage.setItem('myFavBOMList', JSON.stringify(chapters));
}

// Function to get chaptersArray from localStorage
function getChapterList() {
  const storedData = localStorage.getItem('myFavBOMList');
  return storedData ? JSON.parse(storedData) : [];
}
function deleteChapter(chapterName) {
  // Remove the ❌ from the end of the chapterName
  const chapter = chapterName.slice(0, -1);

  // Filter out the chapter to be removed from the chaptersArray
  chaptersArray = chaptersArray.filter(item => item !== chapter);

  // Update localStorage with the modified chaptersArray
  setChapterList(chaptersArray);
}