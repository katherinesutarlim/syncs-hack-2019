
const dashboardBtn = document.getElementById("dashboard");
const postureBtn = document.getElementById("posture-btn");
const dashboard = document.getElementById("main-layout");
const posture = document.getElementById("posture");

dashboardBtn.addEventListener("click", () => {
    posture.classList.add("hide");
    dashboard.classList.remove("hide");
    dashboardBtn.classList.add("selected");
    postureBtn.classList.remove("selected");
});

postureBtn.addEventListener("click", () => {
    dashboard.classList.add("hide");
    posture.classList.remove("hide");
    postureBtn.classList.add("selected");
    dashboardBtn.classList.remove("selected");
});
