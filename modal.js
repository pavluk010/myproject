
const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".product-btn");

const bikes = [
{
title: "Cannondale TRAIL SE 4",
img: "https://veloplaneta.ua/upload/iblock/ef8/e783cd74-ab71-11ef-9838-dc9665eaea30_1bd7b929-8d88-11f0-983b-c9be15cf589e.jpeg",
info: `
Професійний гірський велосипед для активного катання по пересіченій місцевості.

✔ Рама: Алюміній SmartForm C3<br>
✔ Колеса: 29 дюймів<br>
✔ Вилка: SR Suntour XCM 100 мм<br>
✔ Трансмісія: Shimano CUES 1x10<br>
✔ Гальма: Гідравлічні дискові<br>
✔ Вага: 14 кг<br><br>

Ця модель чудово підходить для лісових стежок, ґрунтових доріг та щоденних поїздок. Надійна рама, комфортна посадка та якісне обладнання забезпечують максимальне задоволення від катання.
`
},

{
title: "Merida Big.Seven 20-2X",
img: "https://meridabikes.in.ua/wp-content/uploads/2022/09/velosiped-275-merida-bigseven-20-2x-2022-matt-anthracite.jpg",
info: `
Merida Big.Seven — один із найпопулярніших велосипедів бренду.

✔ Рама: Алюмінієва<br>
✔ Колеса: 27.5 дюймів<br>
✔ Трансмісія: Shimano 2x8<br>
✔ Гальма: Дискові механічні<br>
✔ Вага: 13.8 кг<br><br>

Ідеальний вибір для початківців та любителів активного відпочинку. Відмінно поводиться як у місті, так і на бездоріжжі.
`
},

{
title: "Cannondale SuperSix EVO Carbon",
img: "https://veloplaneta.ua/upload/iblock/94c/52b00b94-191a-11ef-9831-a3229ae5bf43_f512ec0d-2d86-11ef-9833-f901c39b71e3.jpeg",
info: `
Шосейний карбоновий велосипед преміум-класу.

✔ Рама: Карбон<br>
✔ Колеса: 28 дюймів<br>
✔ Трансмісія: Shimano 105<br>
✔ Вага: лише 8 кг<br><br>

Створений для швидкості, перегонів та тривалих тренувань. Відмінна аеродинаміка та мінімальна вага роблять його справжньою ракетою на асфальті.
`
},

{
title: "Santa Cruz MEGATOWER",
img: "https://velogo.com.ua/uploads/shop/products/main/31a60bcf3cf5cda2b4fdc1573b911eed-convert.webp",
info: `
Потужний двопідвісний ендуро-велосипед.

✔ Рама: Карбон<br>
✔ Колеса: 29 дюймів<br>
✔ Підвіска: 165 мм<br>
✔ Гальма: SRAM Code<br>
✔ Вага: 15 кг<br><br>

Призначений для складних трас, спусків та екстремального катання. Один із найкращих велосипедів у своєму класі.
`
}
];

buttons.forEach((btn, index) => {
btn.addEventListener("click", () => {

document.getElementById("bike-title").innerHTML =
bikes[index].title;

document.getElementById("bike-img").src =
bikes[index].img;

document.getElementById("bike-info").innerHTML =
bikes[index].info;

modal.classList.add("active");
});
});

document.querySelector(".close").addEventListener("click", () => {
modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
if (e.target === modal) {
modal.classList.remove("active");
}
});






const catalogBtn = document.getElementById("catalogBtn");
const catalogModal = document.getElementById("catalogModal");
const catalogClose = document.querySelector(".catalog-close");

catalogBtn.addEventListener("click", () => {
    catalogModal.classList.add("active");
});

catalogClose.addEventListener("click", () => {
    catalogModal.classList.remove("active");
});

catalogModal.addEventListener("click", (e) => {
    if (e.target === catalogModal) {
        catalogModal.classList.remove("active");
    }
});

