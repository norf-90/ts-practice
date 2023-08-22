**strict** - включає строгий режим при перевірці типів. Автоматично включає **noImplicitAny**,
**strictNullChecks**, **strictFunctionTypes**, **strictBindCallApply**,
**strictPropertyInitialization**, **noImplicitThis**, **useUnknownInCatchVariables** та
**alwaysStrict**

**noImplicitAny** - при значенні false ми дозволяємо неявно задавати any для параметра ф-ції

**strictNullChecks** - при перевірці типів, також перевіряє на null та undefined

**strictFunctionTypes** - строга перевірка типів параметрів, при використанні function type

**strictBindCallApply** - нічого не зрозуміло

**strictPropertyInitialization** - при false дозволяє застосовути змінні, оголошені в класі без їх
ініціалізації, застосовується в випадках де класи використовуються як інтерфейси

**noImplicitThis** - перевіряє куди посилається this. Наприклад, в методі класу який повертає ф-цію,
this посилатиметься в цій фунції не на клас.

**useUnknownInCatchVariables** - при true в блоках catch, параметр error матиме тип unknown, інакше
any

**alwaysStrict** - задаэться чи потрыбно додавати режим usestrict в вихідні файли JS
