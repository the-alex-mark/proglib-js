'use struct';
let events = require('events');
const ArrayExpansion = require('../arrayExpansion');
const DataColumn = require('./dataColumn');

/**
 * Представляет коллекцию объектов `DataColumn` для `DataTable`.
 */
class DataColumnCollection {
    constructor() {
        this.collection = [];
        this.Event = new events.EventEmitter();
    }

    get Data() {
        let Result = [];
        for (let i of this.collection) Result.push(i.Name);

        return Result;
    }

    /**
     * Возвращает общее число элементов в коллекции.
     */
    get Count() {
        return this.collection.length;
    }

    /**
     * Создает и добавляет указанный объект `DataColumn` в `DataColumnCollection`.
     * @param {String} Column Добавляемый объект `DataColumn`.
     */
    Add(Column) {
        this.collection.push(new DataColumn(Column));
        this.Event.emit('newcolumns', { Columns: [ Column ], Index: this.collection.length - 1 });
    }

    /**
     * Копирует элементы указанного массива `DataColumn` в конец коллекции.
     * @param  {...String} Columns 
     */
    AddRange(...Columns) {
        let lastIndex = (this.collection.length == 0) ? 0 : this.collection.length - 1;
        for (let i of Columns)
            this.collection.push(new DataColumn(i));
        
        this.Event.emit('newcolumns', { Columns: Columns, Index: lastIndex });
    }

    /**
     * Определяет, содержит ли коллекция столбец с указанным именем.
     * @param {String} Name Свойство DataColumn.Name столбца, поиск которого требуется выполнить.
     */
    Contains(Name) {
        for (let i of this.collection)
            if (i.Name === Name) return true;

        return false;
    }

    /**
     * Копирует коллекцию целиком в существующий массив, начиная с указанного индекса в этом массиве.
     * @param {Number} Index Индекс, с которого должна начаться операция.
     * @param {DataColumn[]} Columns Массив объектов `DataColumn`, копируемых в коллекцию.
     */
    CopyTo(Index, Columns) {
        let lastIndex = (this.collection.length == 0) ? 0 : this.collection.length - 1;
        for (let i of Columns)
            this.collection.insertAt(Index++, i);

        this.Event.emit('newcolumns', { Columns: Columns, Index: lastIndex });
    }

    /**
     * Получает индекс столбца с указанным именем (имя без учета регистра).
     * @param {String} Name Имя столбца для поиска.
     */
    IndexOf(Name) {
        return this.Data.indexOf(Name);
    }

    /**
     * Удаляет объект `DataColumn` с указанным именем из коллекции.
     * @param {String} Name Имя удаляемого столбца.
     */
    Remove(Name) {
        if (!Name || Name == null)
            throw new Error('Входные параметры заданы неверно.');
        
        let Index = this.IndexOf(Name);
        if (Index > -1) {
            this.Event.emit('columndeleting', { Columns: [ Name ], Index: Index });
            delete this.collection[Index];
            this.collection = this.collection.filter(function (i) { return i != null; });

            this.Event.emit('columndeleted');
        }
        else { throw new Error('Входные параметры заданы неверно.'); }
    }

    /**
     * Удаляет столбец по указанному индексу из коллекции.
     * @param {Number} Index Индекс удаляемого столбца.
     */
    RemoveAt(Index) {
        if (!Index || Index == null || Index < 0 || Index > this.collection.length)
            throw new Error('Входные параметры заданы неверно.');

        this.Event.emit('columndeleting', { Columns: [ this.collection[Index].Name ], Index: Index });
        delete this.collection[Index];
        this.collection = this.collection.filter(function (i) { return i != null; });

        this.Event.emit('columndeleted');
    }

    /**
     * Удаляет все столбцы из коллекции.
     */
    Clear() {
        this.Event.emit('columncollectionclearing', { Columns: this.Data });
        this.collection = [];
        this.Event.emit('columcollectioncleared');
    }

    /**
     * 
     * @param {String} Event Название события.
     * @param {Function} Handler Обработчик события.
     */
    on(Event, Handler) {
        this.Event.on(Event.toLowerCase(), Handler);
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'dataColumnCollection';
    }
}

module.exports = DataColumnCollection;