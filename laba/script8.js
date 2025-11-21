// Отримуємо доступ до полотна та контексту малювання
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// --- Змінні для анімації ---
let colorIndex = 0;
let colorTick = 0;
const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#ee82ee"];

let moveX = 0; // Для помаранчевого квадрата
let moveDirection = 1;

let rotationAngle = 0; // Для фіолетового квадрата

let pulseRadius = 15; // Для рожевого кола
let pulseGrowing = true;

// === ГОЛОВНА ФУНКЦІЯ МАЛЮВАННЯ (Цикл анімації) ===
function draw() {
    // 1. Очищення полотна перед кожним кадром
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- Статична фігура (Синій "робот") ---
    drawRobotGroup();

    // --- Текст ---
    drawText();

    // --- Анімовані елементи ---
    drawAnimatedColorCircle();
    drawMovingRect();
    drawRotatingRect();
    drawPulsingCircle();

    // Запуск наступного кадру
    requestAnimationFrame(draw);
}

// Функція малювання основної групи (блакитні фігури з синім контуром)
function drawRobotGroup() {
    ctx.save(); // Зберігаємо стиль
    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "navy";
    ctx.lineWidth = 2;

    // Прямокутники (тіло робота)
    ctx.beginPath();
    ctx.rect(400, 150, 50, 50);
    ctx.rect(450, 100, 50, 50);
    ctx.rect(550, 100, 50, 50);
    ctx.rect(600, 150, 50, 50);
    ctx.rect(400, 300, 50, 50);
    ctx.rect(600, 300, 50, 50);
    ctx.rect(490, 340, 74, 50);
    ctx.fill();
    ctx.stroke();

    // Кола (очі)
    ctx.beginPath();
    ctx.arc(487, 300, 37, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(563, 300, 37, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Еліпс (голова)
    ctx.beginPath();
    ctx.ellipse(525, 200, 75, 50, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.restore();
}

function drawText() {
    ctx.fillStyle = "white";
    ctx.font = "20px Verdana";
    ctx.textAlign = "center";
    ctx.fillText("Демонстрація Canvas (JS Based)", 350, 450);
}

// 1. Коло, що змінює колір
function drawAnimatedColorCircle() {
    colorTick++;
    if (colorTick > 20) { // Уповільнення зміни кольору
        colorIndex = (colorIndex + 1) % colors.length;
        colorTick = 0;
    }

    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, Math.PI * 2);
    ctx.fillStyle = colors[colorIndex];
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
}

// 2. Квадрат, що рухається
function drawMovingRect() {
    if (moveDirection === 1) {
        moveX += 2;
        if (moveX > 200) moveDirection = -1;
    } else {
        moveX -= 2;
        if (moveX < 0) moveDirection = 1;
    }

    ctx.beginPath();
    ctx.rect(50 + moveX, 200, 50, 50);
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.stroke();
}

// 3. Квадрат, що обертається
function drawRotatingRect() {
    rotationAngle += 0.02;

    ctx.save();
    // Переміщуємо точку обертання в центр фігури
    ctx.translate(630, 80); 
    ctx.rotate(rotationAngle);
    
    // Малюємо відносно центру (зсув на половину розміру)
    ctx.beginPath();
    ctx.rect(-30, -30, 60, 60);
    ctx.fillStyle = "purple";
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

// 4. Пульсуюче коло
function drawPulsingCircle() {
    if (pulseGrowing) {
        pulseRadius += 0.5;
        if (pulseRadius >= 50) pulseGrowing = false;
    } else {
        pulseRadius -= 0.5;
        if (pulseRadius <= 10) pulseGrowing = true;
    }

    ctx.beginPath();
    ctx.arc(250, 100, pulseRadius, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.stroke();
}

// Запуск анімації після завантаження сторінки
window.onload = function() {
    draw();
};