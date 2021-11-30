let row = document.querySelector('.row');

// let items = row.querySelectorAll('.thumbnail');
// let biggestH = 0;

// let myFunc = () => {
//     biggestH = 0;
//     items.forEach((item) => {
//         if (item.offsetHeight > biggestH) {
//             biggestH = item.offsetHeight;
//         } else {
//             biggestH = biggestH;
//         }
//     });
//     items.forEach((elem) => {
//         let elemStyles = getComputedStyle(elem);
//         if (elem.style.height < elem.parentElement.style.minHeight) {
//             elem.parentElement.style.height = `${elem.style.height + parseInt(elemStyles.marginBottom)}px`;
//         } else {
//             elem.parentElement.style.height = `${biggestH + parseInt(elemStyles.marginBottom)}px`;
//         }
//     })
// }

// window.onload = myFunc;
// window.onresize = myFunc;

document.addEventListener('DOMContentLoaded', () => {
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';
})