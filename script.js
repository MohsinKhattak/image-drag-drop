const cards = [
  {
    title: "First Card",
    imgSrc: "https://picsum.photos/seed/card1/300/200",
    description: "First Card Description",
    id: 1,
  },
  {
    title: "Second Card",
    imgSrc: "https://picsum.photos/seed/card2/300/200",
    description: "Second Card Description",
    id: 2,
  },
  {
    title: "Third Card",
    imgSrc: "https://picsum.photos/seed/card3/300/200",
    description: "Third Card Description",
    id: 3,
  },
  {
    title: "Fourth Card",
    imgSrc: "https://picsum.photos/seed/card4/300/200",
    description: "Fourth Card Description",
    id: 4,
  },
  {
    title: "Fifth Card",
    imgSrc: "https://picsum.photos/seed/card5/300/200",
    description: "Fifth Card Description",
    id: 5,
  },
  {
    title: "Sixth Card",
    imgSrc: "https://picsum.photos/seed/card6/300/200",
    description: "Sixth Card Description",
    id: 6,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementsByClassName("cards-container")[0];
  let draggedCard = null;
  //displaying each card
  cards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flex col-3 card";
    card.setAttribute("draggable", "true");

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = item.imgSrc;
    img.alt = item.title;

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = item.description;

    card.append(img);
    card.append(cardBody);
    card.append(title);
    card.append(description);
    cardsContainer.append(card);

    //drag drop functionality
    card.addEventListener("dragstart", () => {
      draggedCard = card;
      draggedCard = card;
    });
    card.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    card.addEventListener("drop", (e) => {
      e.preventDefault();

      if (draggedCard !== card) {
        const cards = Array.from(cardsContainer.children);
        const dragIndex = cards.indexOf(draggedCard);
        const dropIndex = cards.indexOf(card);

        const dropNext = card.nextSibling;

        if (dropIndex > dragIndex) {
          cardsContainer.insertBefore(card, draggedCard);
          cardsContainer.insertBefore(draggedCard, dropNext);
        } else {
          cardsContainer.insertBefore(draggedCard, card);
          cardsContainer.insertBefore(card, cards[dragIndex + 1]);
        }
      }
    });
  });
});
