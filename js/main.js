const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

// Using this piece of code, we are selecting all the items having a class of collapsible.
// Then, when the use clicks on it, we are inserting the collapsible--expanded class so that the collapsible gets expanded.
