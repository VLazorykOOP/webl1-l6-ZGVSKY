// === ЗАВДАННЯ 1: Обробка подій для BODY ===

function pageLoaded() {
    console.log("Подія onload: Сторінка повністю завантажена.");
    const logArea = document.getElementById('log-area');
    if (logArea) {
        logArea.innerText += "Сторінка завантажена (onload).\n";
    }
}

function windowResized() {
    console.log("Подія onresize: Розмір вікна змінено.");
    const logArea = document.getElementById('log-area');
    if (logArea) {
        logArea.innerText += "Розмір вікна змінено (onresize).\n";
    }
}

// Попередження при закритті вкладки (може не працювати, якщо немає взаємодії зі сторінкою)
window.onbeforeunload = function() {
    return "Ви точно хочете вийти?";
};

// === ЗАВДАННЯ 3 (Варіант 7) ===
function runTask3() {
    // Змінюємо вміст фреймів динамічно
    const f1 = document.getElementById('frame1');
    const f2 = document.getElementById('frame2');

    if (f1 && f2) {
        // Генеруємо випадковий колір для наочності
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        f1.srcdoc = `<body style='background-color: ${randomColor}; color: white;'><h3>Фрейм 1 Оновлено!</h3><p>Час: ${new Date().toLocaleTimeString()}</p></body>`;
        f2.srcdoc = `<body style='background-color: #eee;'><h3>Фрейм 2 Оновлено!</h3><p>Випадкове число: ${Math.floor(Math.random() * 100)}</p></body>`;
        
        console.log("Завдання 3 виконано: Вміст фреймів змінено.");
    }
}

// === ЗАВДАННЯ 5 (Варіант 7) ===
function runTask5() {
    const textArea = document.getElementById('regex-input');
    if (!textArea) return;

    const text = textArea.value;
    // Регулярний вираз: \b - межа слова, ш - початок, [а-яіїєґ]* - будь-які букви всередині, а - кінець, \b - межа.
    // Прапор 'i' ігнорує регістр (Ш/ш).
    const regex = /\bш[а-яіїєґ]*а\b/gi;
    
    const matches = text.match(regex);
    
    const output = document.getElementById('regex-result');
    if (matches) {
        output.innerHTML = `<strong>Знайдено слів (${matches.length}):</strong> ${matches.join(', ')}`;
    } else {
        output.innerHTML = "Слів, що відповідають умові, не знайдено.";
    }
}

// === ЗАВДАННЯ 6 (Варіант 7) ===
function runTask6() {
    // 1. Створюємо масив А з випадковими числами
    const size = 10;
    let arrayA = [];
    for(let i=0; i<size; i++) {
        arrayA.push(Math.floor(Math.random() * 30)); // Числа від 0 до 30
    }

    // 2. Будуємо масив В (фільтруємо елементи > 10)
    let arrayB = arrayA.filter(num => num > 10);

    // 3. Виведення
    const outputDiv = document.getElementById('array-result');
    if (outputDiv) {
        outputDiv.innerHTML = `
            <strong>Масив А (вихідний):</strong> [${arrayA.join(', ')}]<br>
            <strong>Умова:</strong> елементи > 10<br>
            <strong>Масив В (результат):</strong> [${arrayB.join(', ')}]
        `;
    }
    
    console.log("Array A:", arrayA);
    console.log("Array B (>10):", arrayB);
}