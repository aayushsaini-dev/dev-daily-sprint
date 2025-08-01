// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // arrow functions are not used here to write
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//example2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example3
document.getElementById("changeOrder").addEventListener("click", function () {
  let order = document.getElementById("coffeeType");
  order.textContent = "Espresso";
  order.style.backgroundColor = "brown";
});

//example4
document.getElementById("addNewItem").addEventListener("click", function () {
  let item = document.createElement("li");
  item.textContent = `jam`;
  document.getElementById("shoppingList").appendChild(item);
});

//example5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let task = document.getElementById("taskList");
    task.lastChild.remove();
  });

//example6
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("chai");
  });

//example7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("you selected" + event.target.textContent);
  }
});

//example8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value ;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

//example9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})

//example10
document.getElementById("toggleHighlight").addEventListener('click', function(){
    let text = document.getElementById("descriptionText");
    // text.classList.add('highlight');
    text.style.color ="green";
} )
