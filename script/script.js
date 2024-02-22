// Задача: Изменение текста элемента
// Условие: Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!". 
// С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".

const paragraph = document.getElementById("myParagraph");
paragraph.innerText = "Привет, JavaScript!";

// Задача: Добавление нового элемента в DOM
// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив 
// и создает нумерованный список из этих строк в html документе.

const strings = ["Строка 1", "Строка 2", "Строка 3"];

const list = document.getElementById("myList");

strings.forEach((string, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${string}`;
    list.appendChild(listItem);
});


// Задача: Создание ссылок
// Условие: Подготовьте массив из объектов со свойствами label и link. 
// Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

const linksArray = [
    { label: "Google", link: "https://www.google.com" },
    { label: "YouTube", link: "https://www.youtube.com" },
    { label: "GitHub", link: "https://www.github.com" }
];

const linksContainer = document.getElementById("myLinks");

linksArray.forEach(linkObj => {
    const anchor = document.createElement("a");
    anchor.textContent = linkObj.label;
    anchor.href = linkObj.link;
    anchor.target = "_blank";
    linksContainer.appendChild(anchor);
    linksContainer.appendChild(document.createElement("br")); // Добавляем разрыв строки между ссылками
});