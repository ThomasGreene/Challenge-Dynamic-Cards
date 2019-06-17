const cardArea = document.getElementById("newDomComp");

document.getElementById("createButton").addEventListener("click", function() {
  const article = document.createElement('article');
  article.className = 'card';
  article.id = `card-${document.getElementById("newDomComp").childElementCount}`;
  article.innerHTML =
    `<div>${document.getElementById("myTextArea").value}</div>
    <div>
      <button id="delete-${document.getElementById("newDomComp").childElementCount}">Delete</button>
    </div>`;
  document.getElementById("newDomComp").appendChild(article)
});


cardArea.addEventListener("click", function() {
  const itemClicked = event.target.id.split('-');
	if (itemClicked[0] === 'delete') {
    const elementToDelete = document.getElementById(`card-${itemClicked[1]}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
	} else {
    console.log("Click delete!");
  }
});