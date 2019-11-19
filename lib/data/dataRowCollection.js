'use struct';
let events = require('events');
const DataRow = require('./dataRow');
const ArrayExpansion = require('../arrayExpansion');

/**
 * Представляет коллекцию объектов `DataRow` для объекта `DataTable`.
 */
class DataRowCollection {
    constructor() {
        this.collection = [];
        this.Event = new events.EventEmitter();
    }

    get Data() {
        let Result = [];
        for (let i of this.collection) Result.push(i.Data);

        return Result;
    }

    /**
     * Возвращает общее число объектов DataRow в коллекции.
     */
    get Count() {
        return this.collection.length;
    }

    /**
     * Создает строку с использованием заданных параметров и добавляет его в `DataRowCollection`.
     * @param {...any} Values Массив объектов, который используется для создания новой строки.
     */
    Add(...Values) {
        let Row = new DataRow(...Values);
        this.collection.push(Row);
        this.Event.emit('newrow', { Row: Row, Index: this.collection.length - 1 });
    }

    /**
     * Получает индекс указанного объекта `DataRow`.
     * @param {DataRow} Row Объект `DataRow`, который требуется найти.
     */
    IndexOf(Row) {
        for (let i in this.collection) {
            if (this.collection[i].Equals(Row))
                return i;
        }

        return -1;
    }

    /**
     * Вставляет новую строку в коллекцию в указанное положение.
     * @param {Number} Index Расположение в коллекции, куда необходимо добавить строку `DataRow`.
     * @param {DataRow} Row Добавляемый объект `DataRow`.
     */
    InsertAt(Index, Row) {
        this.collection.insertAt(Index, Row);
        this.Event.emit('newrow', { Row: Row, Index: Index });
    }

    /**
     * Удаляет указанный объект `DataRow` из коллекции.
     * @param {DataRow} Row Удаляемый объект `DataRow`.
     */
    Remove(Row) {
        for (let i in this.collection) {
            if (this.collection[i].Equals(Row)) {
                this.Event.emit('rowdeleting', { Row: Row, Index: i });
                delete this.collection[i];
                break;
            }
        }

        this.collection = this.collection.filter(function (i) { return i != null; });
        this.Event.emit('rowdeleted');
    }

    /**
     * Удаляет строку с указанным индексом из коллекции.
     * @param {Number} Index Индекс строки для удаления.
     */
    RemoveAt(Index) {
        this.Event.emit('rowdeleting', { Row: this.collection[Index], Index: Index });
        delete this.collection[Index];
        this.collection = this.collection.filter(function (i) { return i != null; });
        this.Event.emit('rowdeleted');
    }

    /**
     * Удаляет колонку с указанным индексом из коллекции.
     * @param {Number} Index Индекс колонки для удаления.
     */
    RemoveColumn(Index) {
        for (let i = 0; i < this.collection.length; i++) {
            delete this.collection[i].collection[Index];
            this.collection[i].collection = this.collection[i].collection.filter(function (i) { return i != null; });
        }

        this.Event.emit('rowdeleted');
    }

    /**
     * Удаляет все строки из коллекции.
     */
    Clear() {
        this.Event.emit('rowcollectionclearing', { Rows: this.collection });
        this.collection = [];
        this.Event.emit('rowcollectioncleared');
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
        return 'dataRowCollection';
    }
}

module.exports = DataRowCollection;