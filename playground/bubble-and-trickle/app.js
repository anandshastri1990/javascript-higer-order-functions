document.querySelector('#grand-parent-bubble').addEventListener('click', () => {
    console.log('grand parent event handler called while bubbling up')
});
document.querySelector('#parent-bubble').addEventListener('click', () => {
    console.log('parent event handler called while bubbling up')
});
document.querySelector('#child-bubble').addEventListener('click', () => {
    console.log('child event handler called while bubbling up')
}, false);

document.querySelector('#grand-parent-trickle').addEventListener('click', () => {
    console.log('grand parent event handler called while trickling down')
}, true);
document.querySelector('#parent-trickle').addEventListener('click', () => {
    console.log('parent event handler called while trickling down')
}, true);
document.querySelector('#child-trickle').addEventListener('click', () => {
    console.log('child event handler called while trickling down')
}, true);

document.querySelector('#grand-parent-mix').addEventListener('click', () => {
    console.log('grand parent event handler called while bubbling up')
}, false);
document.querySelector('#parent-mix').addEventListener('click', () => {
    console.log('parent event handler called while trickling down')
}, true);
document.querySelector('#child-mix').addEventListener('click', () => {
    console.log('child event handler called while trickling down')
}, true);

document.querySelector('#grand-parent-stop').addEventListener('click', () => {
    console.log('should not be printed');
}, false);
document.querySelector('#parent-stop').addEventListener('click', (e) => {
    console.log('parent event handler called while bubbling up');
    e.stopPropagation();
}, false);
document.querySelector('#child-stop').addEventListener('click', () => {
    console.log('child event handler called while bubbling up')
}, false);
