# `DataColumnCollection`
Представляет коллекцию объектов [`DataColumn`](./dataColumn.md) для объекта [`DataTable`](./dataTable.md).

## Инициализация
```js
const Data = require('proglib').Data;
const DataColumnCollection = Data.DataColumnCollection;

// Инициализирует новый экземпляр класса DataColumnCollection.
let _collection = new DataColumnCollection();
```

## Свойства
```js
// Возвращает данные объекта DataColumnCollection в массиве.
// 
// Возврат:
//    String[]
_collection.Data;

// Возвращает общее число элементов в коллекции.
// 
// Возврат:
//    Number
_collection.Count;
```

## Методы
```js
// Создает и добавляет указанный объект DataColumn в DataColumnCollection.
// 
// Параметры:
//    Column
//       Имя столбца.
Add(Column);

// Копирует элементы указанного массива DataColumn в конец коллекции.
// 
// Параметры:
//    Columns
//       Массим имён столбцов
AddRange(...Columns);

// Определяет, содержит ли коллекция столбец с указанным именем.
// 
// Параметры:
//    Name
//       Свойство DataColumn.Name столбца, поиск которого требуется выполнить.
Contains(Name);

// Копирует коллекцию целиком в существующий массив, начиная с указанного индекса в этом массиве.
// 
// Параметры:
//    Index
//       Индекс, с которого должна начаться операция.
//    Columns
//       Массив объектов DataColumn, копируемых в коллекцию.
CopyTo(Index, Columns);

// Получает индекс столбца с указанным именем (имя без учета регистра).
// 
// Параметры:
//    Name
//       Имя столбца для поиска.
IndexOf(Name);

// Удаляет объект DataColumn с указанным именем из коллекции.
// 
// Параметры:
//    Name
//       Имя удаляемого столбца.
Remove(Name);

// Удаляет столбец по указанному индексу из коллекции.
// 
// Параметры:
//    Index
//       Индекс удаляемого столбца.
RemoveAt(Index);

// Удаляет все столбцы из коллекции.
Clear();

// Возвращает тип для текущего экземпляра.
// 
// Возврат:
//    String
_collection.GetType();
```

## События
```js
// Происходит при добавлении нового столбца в коллекцию.
this.columnCollection.on('NewColumns', (e) => {
    console.log(e.Index);
    console.log(e.Columns);
});

// Происходит перед удалением столбца или столбцов из коллекции.
this.columnCollection.on('ColumnDeleting', (e) => {
    console.log(e.Index);
    console.log(e.Columns);
});

// Происходить после удаления столбца или столбцав из коллекции.
this.columnCollection.on('ColumnDeleted', () => {
    
});

// Происходит когда очищается список столбцов.
this.columnCollection.on('ColumnCollectionClearing', (e) => {
    console.log(e.Columns);
});
```