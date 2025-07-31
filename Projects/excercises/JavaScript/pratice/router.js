const route = document.getElementById("route");

const routes = {
    "/" : "./pages/home.html",
    "/about" : "./pages/about.html",
    "/contact" : "./pages/contact.html"
};

async function loadpage(path) {
    const res = await fetch(path);
    const html = await res.text();
    route.innerHTML = html;
}


function router(){
    const hash = window.location.hash || "/";
    const route = hash.slice(1);
    const path = routes[route] || routes ["/"];

    loadpage(path);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);