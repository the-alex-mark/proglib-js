# Version
Представляет номер версии сборки, операционной системы или среды Node.js.

## Инициализация
```js
const ProgLib = require('proglib');
const Version = ProgLib.Version;

// Инициализирует новый экземпляр класса Version.
let _version = new Version();

// Инициализирует новый экземпляр класса Version, используя указанную строку.
//
// Параметры:
//    Version
//       Строка, содержащая основной и дополнительный номера версии, номер сборки и номер редакции, в которой каждое число отделено точкой (.).
let _version = new Version(Version);

// Инициализирует новый экземпляр класса Version с помощью указанных основного
//     и дополнительного номеров версии.
//
// Параметры:
//    Major
//       Основной номер версии.
//
//    Minor
//       Дополнительный номер версии.
let _version = new Version(Major, Minor);

// Инициализирует новый экземпляр класса Version с помощью указанных основного и дополнительного номеров версии, а также номера сборки.
//
// Параметры:
//    Major
//       Основной номер версии.
//
//    Minor
//       Дополнительный номер версии.
//
//    Build
//       Номер сборки.
let _version = new Version(Major, Minor, Build);

// Инициализирует новый экземпляр класса Version с помощью указанных основного и дополнительного номеров версии, номера построения и номера редакции.
//
// Параметры:
//    Major
//       Основной номер версии.
//
//    Minor
//       Дополнительный номер версии.
//
//    Build
//       Номер сборки.
//
//    Revision
//       Номер редакции.
let _version = new Version(Major, Minor, Build, Revision);
```

## Методы
```js
// Сравнивает текущий объект Version с указанным объектом Version и возвращает сведения об их относительных значениях.
// 
// Параметры:
//    Value
//       Объект Version, сравниваемый с текущим объектом Version.
// 
// Возврат:
//    Number
_version.CompareTo(Value);

// Возвращает значение, позволяющее определить, представляют ли текущий объект Version и указанный объект Version одно и то же значение.
// 
// Параметры:
//    Value
//       Объект Version, сравниваемый с текущим объектом Version.
// 
// Возврат:
//    Boolean
_version.Equals(Value);

// Преобразует значение текущего объекта Version в объект Json.
// 
// Возврат:
//    Onject
_version.toObject();

// Преобразует значение текущего объекта Version в массив.
// 
// Возврат:
//    Number[]
_version.toArray();

// Преобразует значение текущего объекта Version в эквивалентное ему строчное представление.
// 
// Возврат:
//    String
_version.toString();

// Возвращает тип для текущего экземпляра.
// 
// Возврат:
//    String
_version.GetType();
```

```js
// Преобразует строковое представление номера версии в эквивалентный объект Version.
// 
// Параметры:
//    Value
//       Строка, содержащая преобразуемый номер версии.
// 
// Возврат:
//    Version
Version.Parse(Value);
```