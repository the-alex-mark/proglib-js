# ProgLib
Многофункциональная библиотека? разраюотанная для некоммерческого использования.

```console
$ npm install proglib --save
```

## Класс <b>Path</b>
Выполняет операции для экземпляров объекта String, содержащих сведения о пути к файлу или каталогу.

```js
const IO = require('proglib').IO;
const Path = IO.Path;

let _extension = Path.GetExtension("C:\\Users\\Name\\Desktop\\node.js");
console.log(_extension); // .js

let _directoryName = Path.GetDirectoryName("C:\\Users\\Name\\Desktop\\node.js");
console.log(_directoryName); // C:\Users\Name\Desktop
```

## Класс <b>Color</b>
Предоставляет методы и свойства для работы с цветовыми моделями.

```js
const Drawing = require('proglib').Drawing;
const Color = Drawing.Color;
const SystemColors = Drawing.SystemColors;
const MetroColors = Drawing.MetroColors;

// Инициализация при помощи уже известного цвета
let _color   = Color.White;
let _color   = SystemColors.Control;
let _color   = MetroColors.Red;

// Инициализация при помощи определённой цветовой модели
let _color   = Color.FromRgba(219, 168, 26);

// Перевод в нужную модель
let _hsla    = _color.ToHsla();

// Перевод в строку, объект или массив
let _string  = _color.toString("rgba");  // rgba(255, 255, 255, 1)

console.log(_color.Name);            // Получает имя цвета
console.log(_color.IsNamedColor());  // Возвращает true, если цвет имеет название
console.log(_color.IsSystemColor()); // Возвращает true, если цвет является системным
```

## Класс <b>StringBuilder</b>
Предоставляет изменяемую строку символов.
```js
const Text = require('proglib').Text;
const StringBuilder = Text.StringBuilder;

let SB = new StringBuilder();
SB.Append("Строка или любой другой тип данных");
SB.AppendLine("Строка");
SB.AppendFormat("Форматированная строка: {0}, {1:16}, {2,-10}, {3,20:000}", "Строчное значение", 255, 5, 13);
console.log(SB.toString());
```

## Класс <b>DataTable</b>
Представляет таблицу с данными.
```js
const Data = require('proglib').Data;
const DataTable = Data.DataTable;

// Инициализация таблицы (необязательный входной параметр - имя таблицы)
let Table = new DataTable();
Table.Name = "Название таблицы";

// Заполнение данными
Table.Columns.AddRange("Константа", "Название");

Table.Rows.Add("WSATYPE_NOT_FOUND", "Тип класса не найден");
Table.Rows.Add("WSA_E_NO_MORE", "Нет больше результатов");
Table.Rows.Add("WSA_E_CANCELLED", "Вызов был отменен");
Table.Rows.Add("WSAEREFUSED", "Запрос к базе данных был отклонен");

// Вывод в виде строчного представления (в разной стилистике)
console.log(Table.toString("Default")); // Default (по умолчанию), Alternative, MarkDown, Minimal

// ---------------------------------------------------------
// | Константа         | Название                          |
// ---------------------------------------------------------
// | WSATYPE_NOT_FOUND | Тип класса не найден              |
// ---------------------------------------------------------
// | WSA_E_NO_MORE     | Нет больше результатов            |
// ---------------------------------------------------------
// | WSA_E_CANCELLED   | Вызов был отменен                 |
// ---------------------------------------------------------
// | WSAEREFUSED       | Запрос к базе данных был отклонен |
// ---------------------------------------------------------

// Удаление столбцов, строк или полная очистка таблицы
Table.Columns.RemoveAt(1);
Table.Columns.Remove("Константа");

Table.Rows.Clear();
Table.Columns.Clear();
```

## Класс <b>Environment</b>
Предоставляет сведения о текущей среде и платформе, а также необходимые для управления ими средства.
```js
const ProgLib = require('proglib');
const Environment = ProgLib.Environment;

let _currentDirectory = Environment.CurrentDirectory;
let _version = Environment.Version;
let _userName = Environment.UserName;

Environment.Exit(0);
```

## Класс <b>Version</b>
Представляет номер версии сборки, операционной системы или среды Node.js.
```js
const ProgLib = require('proglib');
const Version = ProgLib.Version;

let _version = new Version(12, 11, 1);
let _version = Version.Parse("12.11.1");

console.log(_version.toString()); // 12.11.1
```

Расширение системных объектов
```js
const ProgLib = require('proglib');

console.log("Привет".toBase64());   // H0A4MjVC
console.log(50.768734002.round(2)); // 50.77
console.log(50.768734002.round());  // 51
console.log(String.random(9));      // Генерирование строки длиной 9 симолов (второй необязательный параметр отвечает за набор символов, из которых генерируется строка)
console.log(String.format("Форматированная строка: {0}, {1:16}, {2,-10}, {3,20:000}", "Строчное значение", 255, 5, 13));
```

С подробной документацией можно ознакомиться перейдя в папку [`docs`](./docs).  
Если вы хотите оставить отзыв или что-то предложить пишите на почту the_alex_mark@mail.ru.