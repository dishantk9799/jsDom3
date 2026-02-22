// Task1
(function task1() {
    function greaterThanAverage(arr) {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        let average = sum / arr.length;
        let greater = arr.filter((num) => num > average);
        return [average, greater];
    }

    let btn = document.querySelector('#Calculate');
    let result = document.querySelector('#average');

    btn.addEventListener('click', function () {
        const [average, greater] = greaterThanAverage([10, 20, 30, 40, 50, 60, 70]);

        result.innerHTML = `
            <h3>Average: ${average}</h3>
            <h3>Greater than average: ${greater}</h3>
            `;
    })
})();

// Task2
(function task2() {
    let btn = document.querySelector('#themeChange');
    let body = document.body;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.style.backgroundColor = savedTheme;
        body.style.color = savedTheme === "black" ? "white" : "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    btn.addEventListener('click', function () {
        if (body.style.backgroundColor === "black") {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            localStorage.setItem("theme", "white");
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            localStorage.setItem("theme", "black");
        }
    });
})();

// Task3
(function task3() {
    let count = 0;
    let deg = 0;
    let card = document.querySelector('#cardRotate');
    card.addEventListener('dblclick', function () {
        count++;
        deg += 360;
        card.style.rotate = `${deg}deg`;
        card.innerHTML = `
        <h3>Double click to rotate</h3>
        <h3>Count: ${count}</h3>
        `;
    });

})();

//Task4
(function task4() {
    function newMap(arr, func) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(func(arr[i], i))
        }
        return result;
    }

    let btn = document.querySelector('#makeFunction');
    let addFunction = document.querySelector('#addFunction');
    btn.addEventListener('click', function () {
        let arr = [2, 3, 4, 5];
        let newArr = newMap(arr, (num) => { return num * 2 });
        addFunction.innerHTML = `
        <h3>OldArray: ${arr}</h3>
        <h3>NewArray: ${newArr}</h3>
        `;
    });
})();

//Task5
(function task5() {
    let btn = document.querySelector('#generate');
    let result = document.querySelector('#numResult');
    btn.addEventListener('click', function () {
        let randomNum = Math.floor(Math.random() * 10 + 1);
        if (randomNum === 7) {
            result.innerHTML = `
            <h3>Num: ${randomNum}</h3>
            <h3 style="color: green;">You win🏆 !!!</h3>
            `;
        } else {
            result.innerHTML = `
            <h3>Num: ${randomNum}</h3>
            <h3  style="color: red;">Try Again 🔄️!!!</h3>
            `;
        }
    });
})();

//Task6
(function task6() {
    let btn = document.querySelector('#predict');
    let result = document.querySelector('#predictResult');
    btn.addEventListener('click', function () {
        result.innerHTML = `
        <h3>undefined</h3>
        <h3>ReferenceError</h3>
        `;
    });
})();

//Task7
(function task7() {
    let textArea = document.querySelector('#message');
    let counter = document.querySelector('#counter');
    let limit = 100;
    textArea.addEventListener('input', function () {
        let length = textArea.value.length;

        counter.innerHTML = `${length} / ${limit}`;

        if (length > limit) {
            counter.style.color = "red";
        } else {
            counter.style.color = "white";
        }
    });
})();

// Task8
(function task8() {

    let products = [
        "Thor",
        "IronMan",
        "Captain America",
        "Hulk",
        "SpiderMan",
        "Black Widow",
        "Doctor Strange",
        "Loki",
        "Black Panther",
        "Wolverine"
    ];

    let input = document.querySelector('#searchProduct');
    let list = document.querySelector('#product');
    function showProducts(arr) {
        list.innerHTML = "";
        arr.forEach(function (item) {
            list.innerHTML += `<h3>${item}</h3>`;
        });
    }
    showProducts(products);

    input.addEventListener('input', function () {
        let value = input.value.toLowerCase();
        let filtered = products.filter(function (item) {
            return item.toLowerCase().startsWith(value);
        });
        showProducts(filtered);
    });

})();

// Task9
(function task9() {
    let btn = document.querySelector('#add');
    let container = document.querySelector('#resultContainer');
    let nameInput = document.querySelector('#name');
    let imgInput = document.querySelector('#image');

    btn.addEventListener('click', function () {
        let nameValue = nameInput.value.trim();
        let imgValue = imgInput.value.trim();

        if (nameValue === "" || imgValue === "") {
            alert("Please fill both fields");
            return;
        }
        //card
        let card = document.createElement('div');
        card.classList.add('card');
        //img
        let img = document.createElement('img');
        img.src = imgValue;
        //name
        let title = document.createElement('h3');
        title.textContent = nameValue;
        //delete
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('deleteBtn');
        // Delete event
        deleteBtn.addEventListener('click', function () {
            container.removeChild(card);
        });
        // Append
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        // Clear inputs
        nameInput.value = "";
        imgInput.value = "";
    });
})();

//Task10
(function task10() {
    function cloneAndUpdate(obj, key, newValue) {
        let newObj = {};
        for (let prop in obj) {
            newObj[prop] = obj[prop];
        }
        newObj[key] = newValue;
        return newObj;
    }
    let btn = document.querySelector('#show');
    let result = document.querySelector('#resultShow');
    btn.addEventListener('click', function () {
        let user = {
            name: "Dishant",
            age: 22,
            city: "Mumbai"
        };
        let updatedUser = cloneAndUpdate(user, "age", 25);
        result.innerHTML = `
        <h3>Original: ${JSON.stringify(user)}</h3>
        <h3>Updated: ${JSON.stringify(updatedUser)}</h3>
        `;
    });
})();

