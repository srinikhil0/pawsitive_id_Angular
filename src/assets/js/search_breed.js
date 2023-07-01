// Search breed
// const searchInput = document.getElementById('searchInput');
// const cards = document.querySelectorAll('.blog__dog');

// searchInput.addEventListener('input', function() {
//   const searchQuery = searchInput.value.toLowerCase();

//   cards.forEach(card => {
//     const breedName = card.querySelector('.dog__name').textContent.toLowerCase();

//     if (breedName.includes(searchQuery)) {
//       card.style.display = 'block';
//     } else {
//       card.style.display = 'none';
//     }
//   });
// });


function searchCards() {
    // Get the search query from the input field
    var query = document.getElementById('searchInput').value.toLowerCase();
  
    // Get all the cards
    var cards = document.getElementsByClassName('blog__dog');
  
    // Loop through each card and check if it matches the search query
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var title = card.getElementsByClassName('dog__name')[0].innerText.toLowerCase();
      var description = card.getElementsByClassName('dog__description')[0].innerText.toLowerCase();
  
      if (title.includes(query) || description.includes(query)) {
        // Show the card if it matches the search query
        card.style.display = 'block';
      } else {
        // Hide the card if it doesn't match the search query
        card.style.display = 'none';
      }
    }
  }
  
  // Get the search input element
  var searchInput = document.getElementById('searchInput');
  
  // Add an input event listener to the search input
  searchInput.addEventListener('input', searchCards);
  