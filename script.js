var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    var pannel = this.nextElementSibling;
    if (pannel.style.display === "block") {
      pannel.style.display = "none";
      this.querySelector("i").classList.remove("fa-chevron-up");
      this.querySelector("i").classList.add("fa-chevron-down");
    } else {
      pannel.style.display = "block";
      this.querySelector("i").classList.remove("fa-chevron-down");
      this.querySelector("i").classList.add("fa-chevron-up");
    }
  });
}
//prem
const hamburger = document.getElementById("hamburger");
const hlinks = document.getElementById("hlinks");

hamburger.addEventListener("click", () => {
  hlinks.classList.toggle("active");
});
// RAHUL
function updateValue(targetValue, valueElement) {
    const increment = Math.ceil(targetValue / 60); // Divide target by 60 to reach in 1 second
    let currentValue = 0;
    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        valueElement.innerText = currentValue.toLocaleString();
    }, 1000 / 60);
}

const audienceValueElement = document.getElementById('audienceValue');
const sponsorsValueElement = document.getElementById('sponsorsValue');
const footfallValueElement = document.getElementById('footfallValue');
const customersValueElement = document.getElementById('customersValue');

const audienceTarget = 30;
const sponsorsTarget = 2000;
const footfallTarget = 100;
const customersTarget = 40;

updateValue(audienceTarget, audienceValueElement);
updateValue(sponsorsTarget, sponsorsValueElement);
updateValue(footfallTarget, footfallValueElement);
updateValue(customersTarget, customersValueElement);
