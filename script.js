// Get all the category buttons
const categoryButtons = document.querySelectorAll('.category-btn');

// Add event listener to each category button
categoryButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Toggle the visibility of the associated menu items
    const categoryContent = button.nextElementSibling;

    if (categoryContent.style.display === 'block') {
      categoryContent.style.display = 'none';  // Collapse the section
    } else {
      categoryContent.style.display = 'block';  // Expand the section
    }
  });
});
