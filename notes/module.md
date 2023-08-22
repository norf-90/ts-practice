## Module

розділ дозволяє вказати як буде збиратись проект з точки зору модульності коду

**module** - дозволяє вказати тим модульності (commonJs, es6, etc)

**rootDir** - можна вказати в якій директорії буде знаходитись проект

**rootDirs** - можна вказати декілька rootDir

**baseUrl** - базовий шлях для резолва модулів

**path** - дозволяэ налаштувати кастомні заготовки (alias) для шляхів
`import {} from "@src/someFile.js"`

**typeRoots** - вказує папку де лежать типи, за замочуванням TS шукаэ типи в node_modules

**types** - шлях до папки де лежать додаткові модулі чи типи, які доповнюють типізацію

**resolveJsonModule** - при включенні дозволяє імпортувати JSON в TS, одразу перетворювати в об'єкт
і з ним працювати