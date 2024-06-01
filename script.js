function changeImage(imagePath) {
  document.getElementById("project-image").src = imagePath;
}

const dotImages = [
  "./images/onHover.png",
  "./images/onHover.png",
  "./images/onHover.png",
  "./images/onHover.png",
];
const dots = document.querySelectorAll(".dot");

function changeImage(index) {
  const serviceItems = document.querySelectorAll(".service-item");
  const image = serviceItems[index].querySelector("img");
  image.src = dotImages[index];
}

// function changeDot(index) {
//   dots.forEach((dot, i) => {
//     if (i === index) {
//       dot.style.backgroundImage = 'none';
//       dot.style.backgroundColor = 'transparent';
//     } else {
//       dot.style.backgroundImage = `url(${dotImages[i]})`;
//       dot.style.backgroundSize = 'contain';
//       dot.style.backgroundPosition = 'center';
//       dot.style.backgroundColor = 'transparent';
//     }
//   });
// }
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
