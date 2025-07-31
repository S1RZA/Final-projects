const route = document.getElementById("route");

const routes = {
  "/": "./pages/users.html",
  "/form": "./pages/form.html",
};
function router() {
  const hash = window.location.hash || "/";
  const route = hash.slice(1);
  const path = routes[route] || routes["/"];

  loadpage(path);
}

async function loadpage(path) {
  const res = await fetch(path);
  const html = await res.text();
  route.innerHTML = html;

  // Re-attach form event listener after loading new content
  const form = document.getElementById("data-form");
  if (form) {
    form.addEventListener("submit", submit);
  }

  // Render students if users.html is loaded
  if (path.includes("users.html")) {
    renderStudents();
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function submit(event) {
  event.preventDefault(); // Prevent default form submission

  const userName = document.getElementById("user-name").value;
  const userEmail = document.getElementById("user-email").value;
  const userPhone = document.getElementById("user-phone").value;
  const userEnroll = document.getElementById("user-enroll").value;
  const userDate = document.getElementById("user-date").value;

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      phone: userPhone,
      enroll: userEnroll,
      date: userDate,
    }),
  }).then(() => {
    window.location.hash = "/"; // Redirect to desired route
  });
}

function renderStudents() {
  const container = document.getElementById("students-container");
  if (!container) return; // Only run if container exists

  fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      container.innerHTML = ""; // Clear previous content
      data.forEach((student) => {
        const div = document.createElement("div");
        div.className = "student";

        const ul = document.createElement("ul");
        ul.className = "student-data";

        const liName = document.createElement("li");
        liName.textContent = `${student.name}`;
        const liEmail = document.createElement("li");
        liEmail.textContent = `${student.email}`;
        const liPhone = document.createElement("li");
        liPhone.textContent = `${student.phone}`;
        const liEnroll = document.createElement("li");
        liEnroll.textContent = `${student.enroll}`;
        const liDate = document.createElement("li");
        liDate.textContent = `${student.date}`;

        const trashLi = document.createElement("li");
        const aTrash = document.createElement("a");
        aTrash.href = "#"; // Use "#" if you want it to act as a button, not a link

        const trashImg = document.createElement("img");
        trashImg.src = "./assets/trashcan.png";
        trashImg.alt = "Delete"; // Accessibility
        trashImg.className = `trashcan`
        trashImg.id = `${student.id}`

        aTrash.appendChild(trashImg);
        trashLi.appendChild(aTrash);


        ul.appendChild(liName);
        ul.appendChild(liEmail);
        ul.appendChild(liPhone);
        ul.appendChild(liEnroll);
        ul.appendChild(liDate);
        ul.appendChild(trashLi)

        div.appendChild(ul);
        container.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
      container.innerHTML = "<p>Failed to load students.</p>";
    });
}


