// replacing original images with new images through the DOM manipulation
document.getElementById('firstImage').src = "images/newImg01.jpg";
document.getElementById('secondImage').src = "images/newImg02.jpg";
document.getElementById('thirdImage').src = "images/newImg03.jpg";

// replacing paragraph text with new text through the DOM manipulation
// first image new text

document.getElementById('firstText').innerHTML = "This image speaks to resilience—an unfolding reminder that even in the coldest, darkest moments, brilliance finds a way to shine. The sweeping motion above whispers of unseen energy, persistent and alive, like the ideas you wrestle into code late into the night. Each element reflects the strength it takes to keep pushing forward, to keep learning, to keep building—especially when the path isn’t clear. Just like nature’s quiet spectacle, your growth is steady, radiant, and destined to leave a mark.";

// second image new text

document.getElementById('secondText').innerHTML = "This image embodies the spirit of exploration and the thrill of discovery. The dramatic colors and dynamic shapes mirror the excitement of diving into new challenges, much like the exhilarating journey of learning to code. Each brushstroke is a reminder that creativity knows no bounds, just as your potential is limitless. Embrace this moment as a celebration of your unique path, where every twist and turn leads to new insights and endless possibilities.";

// third image new text

document.getElementById('thirdText').innerHTML = "This image captures the essence of connection and collaboration. The intricate patterns and harmonious colors reflect the beauty of teamwork, much like the synergy you experience when working with others in the coding community. Each detail is a reminder that together, we can create something extraordinary. Embrace this moment as a celebration of your journey, where every interaction enriches your understanding and fuels your passion for learning.";


// function for changing the headings of the images with an array of strings
const headings = [
  "The Journey Begins", 
  "The Road Less Traveled",
  "The Final Destination",]
// Select all the headings with the class name "headings"
const headingsElements = document.querySelectorAll(".content-title");
// Loop through each heading and replace its text content
for (let i = 0; i < headingsElements.length; i++) {
  // Get the current heading element
  const headingElement = headingsElements[i];
  // Set the text content of the heading to the corresponding string in the array
  headingElement.textContent = headings[i];
}


// statement to modify the text of the body paragraph labeled as intro
document.querySelector(".intro").innerHTML = "The collegiate journey is not a sprint, but a marathon demanding resilience and a commitment to lifelong learning.  Obstacles are inevitable demanding coursework, financial pressures, and personal challenges but giving up forfeits the potential for growth and self discovery. Each hurdle overcome builds character, enhances problem-solving skills, and cultivates a deeper appreciation for the value of perseverance. Embracing the journey, with all its ups and downs, transforms students into well-rounded individuals ready to tackle the complexities of life beyond the classroom. The collegiate experience is a transformative odyssey, shaping not just careers but also the very essence of who we are.";



//  function for changing the background-color of the heading element when the buttons are clicked
const firstButton = document.querySelector("#ColorChanging");
const secondButton = document.querySelector("#ColorChanged");
const thirdButton = document.querySelector("#ColorChange");
// firstButton  functinality for changing the background color of the heading element

firstButton.onclick = function() {
  document.querySelector(".headings").style.backgroundColor = "#1DB89A";
//changing the background color of the body to a new color
  document.body.style.backgroundColor = "#F5F5F5";
};

// secondButton functionality for changing the background color of the heading element
secondButton.onclick = function() {
  document.querySelector(".headings").style.backgroundColor = "#2c2c2c";
//   changing the background color of the body to a new color
  document.body.style.backgroundColor = "#F5F5F5";
};

// thirdButton functionality for changing the background color of the heading element
thirdButton.onclick = function() {
  document.querySelector(".headings").style.backgroundColor = "#FFB300";
//   changing the background color of the body to a new color
  document.body.style.backgroundColor = "#F5F5F5";
  document.querySelector(".headings").style.color = "#0F52BA";
};



