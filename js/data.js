const text1 = document.getElementsByClassName("text1")[0];
// text1.style.color = "black";
// text1.style.fontSize = "40px";
// text1.style.display = "block";
// text1.style.visibility = "visible";

const colorChangeBtn = document.getElementById("colorChangeBtn");
const textChangeBtn = document.getElementById('textChangeBtn');
const hiddenBtn = document.getElementById('hiddenBtn');
const hiddenBtn2 = document.getElementById('hiddenBtn2');


colorChangeBtn.addEventListener('click', () => {
    if (text1.style.color == "red") {
        text1.style.color = "black";
        return;
    }
    if (text1.style.color == "" || text1.style.color == "black") {
        text1.style.color = "red";
        return;
    }
});


text1.addEventListener('mousedown', () => {
    if (text1.textContent == "JavaScript基礎編") {
        text1.textContent = "JavaScript応用編";
    } else {
        text1.textContent = "JavaScript基礎編";
    }
});

textChangeBtn.addEventListener('click', () => {
    if (text1.textContent == "JavaScript基礎編") {
        text1.textContent = "JavaScript応用編";
    } else {
        text1.textContent = "JavaScript基礎編";
    }

});

text1.addEventListener('mousemove', () => {
    text1.style.fontSize = "20px";
});


hiddenBtn.addEventListener('click', () => {
    if (text1.style.display == "none") {
        text1.style.display = "block";
    } else {
        text1.style.display = "none";
    }
    
});

hiddenBtn2.addEventListener('click', () => {
    if (text1.style.visibility == "hidden") {
        text1.style.visibility = "visible";
    } else {
        text1.style.visibility = "hidden";
    }
    
});