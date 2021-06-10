'use strict';

// Восстанавливаем порядок книг

const BooksCollection = document.querySelector('.books');
const books = document.querySelectorAll('.book');

    books[0].before(books[1]);
    books[2].before(books[4]);
    books[2].before(books[3]);
    books[3].before(books[5]);
    books[3].after(books[5]);

// Заменяем картинку заднего фона

const bodyStyle = document.querySelector('body');
    bodyStyle.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

// Исправляем заголовок в книге 3

const title = document.querySelectorAll('a');
    title[2].textContent = 'Книга 3. this и Прототипы Объектов';

// Удаляем рекламу со страницы

const Advertising = document.querySelector('.adv');
    Advertising.remove();

// Восстанавливаем порядок глав во 2 и 5 книге

const lists = document.querySelectorAll('ul'),
     itemsOne = lists[1].querySelectorAll('li'),
     itemsTwo = lists[4].querySelectorAll('li'),
     itemsThree = lists[5].querySelectorAll('li');
// 2 книга    
        itemsOne[2].before(itemsOne[3]);
        itemsOne[2].before(itemsOne[6]);
        itemsOne[2].before(itemsOne[8]);
        itemsOne[10].before(itemsOne[2]);
// 5 книга
        itemsTwo[2].before(itemsTwo[9]);
        itemsTwo[6].before(itemsTwo[2]);
        itemsTwo[8].before(itemsTwo[5]);

// в 6 книге добавляем главу

const newItem = itemsThree[8].cloneNode(true);
    newItem.textContent = 'Глава 8: За пределами ES6';
        lists[5].append(newItem);
        itemsThree[9].before(newItem);