function searchCards() {
  // Get the search query from the input field
  var query = document.getElementById("searchInput").value.toLowerCase();

  // Get all the cards
  var cards = document.querySelectorAll(".blog__dog");
  var mainElement = document.querySelector(".gallery__content--flow");

  var cards = document.getElementsByClassName("blog__dog");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener("mouseover", function () {
      this.classList.add("hovered");
    });

    card.addEventListener("mouseout", function () {
      this.classList.remove("hovered");
    });
  }

  
  // Loop through each card and check if it matches the search query
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var title = card
      .getElementsByClassName("dog__name")[0]
      .innerText.toLowerCase();
    var description = card
      .getElementsByClassName("dog__origin")[0]
      .innerText.toLowerCase();
    var caption = card.querySelector(".header__caption");

    if (title.includes(query) || description.includes(query)) {
      // Show the card if it matches the search query
      card.style.display = "block";
      card.classList.add("visible");
      // Check if the card is currently being hovered
      if (card.classList.contains("hovered")) {
        caption.style.transform = "translateY(-75px)";
      } else {
        caption.style.transform = "";
      }
    } else {
      // Hide the card if it doesn't match the search query
      card.style.display = "none";
      card.classList.remove("visible");
      caption.style.transform = "";
    }
  }

  if (visibleCards.length === 1) {
    mainElement.classList.add("single-card");
  } else {
    mainElement.classList.remove("single-card");
  }
}

// Get the search input element
// var searchInput = document.getElementById('searchInput');

// Add an input event listener to the search input
// searchInput.addEventListener('input', searchCards);
