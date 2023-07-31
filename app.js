var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var output = document.getElementById('output');
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    var result = add(+input1.value, +input2.value);
    console.log(result);
    output.textContent = result.toString();
});
