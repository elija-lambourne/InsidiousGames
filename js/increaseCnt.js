function increaseNumber() {
    let pplCnt = document.getElementById("ppl-cnt");
    let funcCnt = document.getElementById("func-cnt");
    let taskCnt= document.getElementById("task-cnt");
    if(taskCnt ===   13){
        return;
    }

    let pplVal = parseInt(pplCnt.innerHTML);
    let funcVal = parseInt(funcCnt.innerHTML);
    let taskVal = parseInt(taskCnt.innerHTML);

    pplCnt.innerHTML = String(pplVal + 1 <= 2 ? pplVal + 1 : pplVal);
    funcCnt.innerHTML = String(funcVal + 1 <= 12 ? funcVal + 1 : funcVal);
    taskCnt.innerHTML = String(taskVal + 1 <= 13 ? taskVal + 1 : taskVal);

    setTimeout(increaseNumber,500);
}

function checkViewport() {
    // Get the element with the number
    let element = document.getElementById("ppl-cnt");

    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    let rect = element.getBoundingClientRect();

    if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewportHeight && rect.right <= viewportWidth) {
        increaseNumber();
    }
}

window.addEventListener("scroll", checkViewport);
window.addEventListener("DOMContentLoaded",checkViewport);