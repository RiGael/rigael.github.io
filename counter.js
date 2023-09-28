let count = localStorage.getItem('count');
if (!count) {
    count = 0;
}
count++;
localStorage.setItem('count', count);
1
document.getElementById("count").innerText = "You've visited my website: " + count + " times!";

