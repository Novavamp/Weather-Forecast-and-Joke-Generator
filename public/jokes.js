const category = document.getElementById("category");
const custom = document.getElementById("custom");
const pro = document.getElementById("pro");
const misc = document.getElementById("misc");
const dark = document.getElementById("dark");
const pun = document.getElementById("pun");
const spooky = document.getElementById("spooky");
const christmas = document.getElementById("christmas");

custom.addEventListener("change", function () {
    if (this.checked) {
        pro.disabled = false;
        misc.disabled = false;
        dark.disabled = false;
        pun.disabled = false;
        spooky.disabled = false;
        christmas.disabled = false;
    } else {
        pro.disabled = true;
        misc.disabled = true;
        dark.disabled = true;
        pun.disabled = true;
        spooky.disabled = true;
        christmas.disabled = true;

        pro.checked = false;
        misc.checked = false;
        dark.checked = false;
        pun.checked = false;
        spooky.checked = false;
        christmas.checked = false;
    }

    category.addEventListener("change", function () {
        if (this.checked) {
            pro.disabled = true;
            misc.disabled = true;
            dark.disabled = true;
            pun.disabled = true;
            spooky.disabled = true;
            christmas.disabled = true;
        }
    });
});

document.getElementById("logo").textContent = "Joke Generator";
document.getElementById("svg").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`;

document.getElementById("svg").style.marginTop = "8px";
document.querySelector(".weather").classList.remove("weather");
document.getElementById("joke-menu").classList.add("weather");