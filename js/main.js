const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector(".slider");

const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
let sectionIndex = 1;
let indIndex = 1;

indicators.forEach((indicator, indIndex) => {
    indicator.addEventListener("click", () => {
        // sectionIndex = indIndex;
        document.querySelector(".control .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = "translateX(" + indIndex * -100 + "%)";
        console.log("indic", sectionIndex, indIndex);
    });
});



right.addEventListener("click", function() {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    document.querySelector(".control .selected").classList.remove("selected");
    slider.style.transform = "translateX(" + (sectionIndex-1) * -100 + "%)";
    indicatorParent.children[sectionIndex].classList.add("selected");
    indIndex = sectionIndex;
    console.log("right", sectionIndex, indIndex);
});

left.addEventListener("click", function() {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    document.querySelector(".control .selected").classList.remove("selected");
    if (sectionIndex === 1) {
        slider.style.transform = "translateX(" + (sectionIndex-1) * +100 + "%)";
    } else {
        slider.style.transform = "translateX(" + (sectionIndex+1) * +100 + "%)";
    }
    indicatorParent.children[sectionIndex].classList.add("selected");
    indIndex = sectionIndex;
    console.log("left", sectionIndex, indIndex);
});
