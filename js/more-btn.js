let moreBtn = document.querySelector(".services__more-btn");
let cards = Array.from(document.querySelectorAll(".card"));
let linkBtn = document.querySelector(".services__more")

function showMore(arr, btn) {
    let step,
        item = 0;
    if (arr.length > 5) {
        step = 5;

        arr.slice(step).forEach((e) => e.classList.add("btn--none"));
        item += step;

        step = 3;

        btn.style.display = "block";

        btn.addEventListener("click", function (e) {
            let tmp = arr.slice(item, item + step);
            tmp.forEach((e) => e.classList.remove("btn--none"));
            item += step;
            if (item >= arr.length) {
                btn.style.display = "none";
                linkBtn.style.display = "inline-block";
            }
        });
    }
}

showMore(cards, moreBtn);