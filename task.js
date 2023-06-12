// Задайте правильні ts типи для класичних js;
var age;
age = 50;
var user;
user = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize = undefined;
notInitialize = undefined;
var callback;
callback = function (a) {
    return 100 + a;
};
callback(1);
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
var anything;
anything = -20;
anything = 'text';
anything = {};
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
var some;
some = 'text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
var person;
person = ['Max', 21];
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var somevar = { loading: Status.LOADING };
// Зробіть змінну, яка може приймати або рядок, або число.
var numOrString;
numOrString = 'string';
numOrString = 10;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var var3;
var3 = 'enable';
var3 = 'disable';
// Вкажіть типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01')
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
