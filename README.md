# ProgLib
Многофункциональная библиотека.  
Пока доступны только 2 основных модуля, но со временем она будет пополняться новым функционалом.

```console
$ npm install proglib --save
```

## Класс Path
Выполняет операции для экземпляров объекта String, содержащих сведения о пути к файлу или каталогу.

```js
const ProgLib = require('proglib');
const Path = ProgLib.IO.Path;

let _extension = Path.GetExtension("C:\\Users\\Name\\Desktop\\node.js");
console.log(_extension); // .js

let _directoryName = Path.GetDirectoryName("C:\\Users\\Name\\Desktop\\node.js");
console.log(_directoryName); // C:\Users\Name\Desktop
```

## Класс Color
Предоставляет методы и свойства для работы с цветовыми моделями.

```js
const ProgLib = require('proglib');
const Color = ProgLib.Drawing.Color;
const SystemColors = ProgLib.Drawing.SystemColors;
const MetroColors = ProgLib.Drawing.MetroColors;

// Инициализация при помощи уже известного цвета
let _color   = Color.White;
let _color   = SystemColors.Control;
let _color   = MetroColors.Red;

// Инициализация при помощи определённой цветовой модели
let _color   = Color.From32bit(-13256162);
let _color   = Color.FromOle(3465);
let _color   = Color.FromWin32(2013749);
let _color   = Color.FromName("Green");
let _color   = Color.FromHex("#DBA81A");
let _color   = Color.FromRgba(219, 168, 26);
let _color   = Color.FromHsb(341, 1, 1);
let _color   = Color.FromHsla(233, 0.56, 0.39);
let _color   = Color.FromHwb(285, 0.65, 0);
let _color   = Color.FromCmyk(0, 0.23, 0.88, 0.14);
let _color   = Color.FromXYZ(38, 53, 71);
let _color   = Color.FromLab(78, -36, -11);
let _color   = Color.FromApple(16705, 20560, 5140);
let _color   = Color.FromAnsi16(93);
let _color   = Color.FromAnsi256(216);

// Перевод в нужную модель
let _32bit   = _color.To32bit();
let _ole     = _color.ToOle();
let _win32   = _color.ToWin32();
let _hex     = _color.ToHex();
let _rgba    = _color.ToRgba();
let _hsb     = _color.ToHsb();
let _hsla    = _color.ToHsla();
let _hwb     = _color.ToHwb();
let _cmyk    = _color.ToCmyk();
let _xyz     = _color.ToXYZ();
let _lab     = _color.ToLab();
let _apple   = _color.ToApple();
let _ansi16  = _color.ToAnsi16();
let _ansi256 = _color.ToAnsi256();

// Перевод в строку, объект или массив
let _string  = _color.toString("rgba"); // rgba(255, 255, 255, 1)
let _string  = _color.toString("rgba%"); // rgba(100%, 100%, 100%, 1)
let _object  = _color.toObject("rgba"); // { R: 255, G: 255, B: 255, A: 1 }
let _array   = _color.toArray("rgba");  // [ 255, 255, 255, 1 ]

console.log(_color.Name);            // Получает имя цвета
console.log(_color.IsNamedColor());  // Возвращает true, если цвет имеет название
console.log(_color.IsSystemColor()); // Возвращает true, если цвет является системным
```

Расширение системных объектов
```js
const ProgLib = require('proglib');

console.log("Привет".toBase64());   // H0A4MjVC
console.log(50.768734002.round(2)); // 50.77
console.log(50.768734002.round());  // 51
```

Каждый класс, метод и входной параметр имеет описание.  
Если вы хотите оставить отзыв или что-то предложить пишите на почту the_alex_mark@mail.ru.