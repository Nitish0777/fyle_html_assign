function changeImage(imagePath) {
  console.log(imagePath);
  document.getElementById("project-image").src = imagePath;
}

const dotImages = [
  "./images/onHover.png",
  "./images/onHover.png",
  "./images/onHover.png",
  "./images/onHover.png",
];
const dots = document.querySelectorAll(".dot");

function changeDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.style.backgroundImage = `url(${dotImages[i]})`;
      dot.style.backgroundSize = "contain";
      dot.style.backgroundPosition = "center";
    } else {
      dot.style.backgroundImage = "none";
    }
  });
}
