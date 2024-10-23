// const circles = document.querySelectorAll('.circle');
//
// function animateCircle(circle, dashOffset, rotation, duration, delay) {
//     setTimeout(() => {
//         circle.style.transition = `stroke-dashoffset ${duration}s linear, transform ${duration}s linear`;
//         circle.style.strokeDashoffset = dashOffset;
//         circle.style.transform = `rotate(${rotation}deg)`;
//     }, delay * 1000);
// }
//
// function addAnimation() {
//     circles.forEach((circle, index) => {
//         circle.style.strokeDasharray = 377;
//         circle.style.strokeDashoffset = 377;
//
//         switch (index) {
//             case 0:
//                 animateCircle(circle, 68.43, 59.2, 3, 2);
//                 break;
//             case 1:
//                 animateCircle(circle, 59.86, 55, 3, 2);
//                 break;
//             case 2:
//                 animateCircle(circle, 85.57, 74.2, 3, 2);
//                 break;
//             case 3:
//                 animateCircle(circle, 77, 70, 3, 2);
//                 break;
//             case 4:
//                 animateCircle(circle, 102.71, 89.2, 3, 2);
//                 break;
//             case 5:
//                 animateCircle(circle, 94.14, 85, 3, 2);
//                 break;
//             case 6:
//                 animateCircle(circle, 85.57, 74.2, 3, 2);
//                 break;
//             case 7:
//                 animateCircle(circle, 77, 70, 3, 2);
//                 break;
//             default:
//                 break;
//         }
//     });
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//     addAnimation();
// });
