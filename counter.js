let count = localStorage.getItem('count');
if (!count) {
    count = 0;
}
count++;
localStorage.setItem('count', count);

document.getElementById("count").innerText = "Visitor count: " + count;
