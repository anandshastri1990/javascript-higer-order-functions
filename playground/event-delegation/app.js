let text = "";
document.querySelector('#parent').addEventListener('click', (e) => {
    text = "";
    if (e.target.tagName === 'DIV') {
        text = "<h3> parent callback called with child being: " + e.target.id + "</h3>";
    }
    document.getElementById("result").innerHTML = text;
});

document.querySelector('#parent').addEventListener('keyup', (e) => {
    if (e.target.tagName === 'INPUT') {
        if (e.target.dataset.uppercase !== undefined) {
            e.target.value = e.target.value.toUpperCase();
        }
        if (e.target.dataset.lowercase !== undefined) {
            e.target.value = e.target.value.toLowerCase();
        }

    }
});
