const root = document.getElementById("container");
const button = document.getElementById("btn");

const h2 = document.createElement("h2");
const loader = document.createElement("h1");

root.appendChild(loader);

const img = document.createElement("img");


function buildResume() {
  try {
    loader.innerHTML = "Building...";

        h2.innerHTML = "Resume";
        h2.style.color = "green";

    img.src =
      "https://images.unsplash.com/photo-1779896412393-25bb58f05547?w=600&auto=format&fit=crop&q=60";

      img.setAttribute('height', '100px');
      img.setAttribute('width', '100px');


    const name = document.createElement("h3");
    name.innerHTML = "Anand Deep Singh";

    const skills = document.createElement("p");
    skills.innerHTML = "Skills: HTML, CSS, JavaScript, Java";

    const education = document.createElement("p");
    education.innerHTML = "Education: B.Tech Computer Science";

    root.appendChild(img);
    root.appendChild(h2);
    root.appendChild(name);
    root.appendChild(skills);
    root.appendChild(education);
  } catch (e) {
    console.log(e);
    loader.innerHTML = "Error Occurred";
  } finally {
    root.removeChild(loader);
  }
}

button.addEventListener("click", buildResume);
