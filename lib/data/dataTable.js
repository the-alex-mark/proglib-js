'use struct';
let events = require('events');
const StringBuilder = require('../text/stringBuilder');
const DataColumnCollection = require('./dataColumnCollection');
const DataColumn = require('./dataColumn');
const DataRowCollection = require('./dataRowCollection');
const DataRow = require('./dataRow');

function ColumnLength(Table) {
    let lengths = [];

    for (let j = 0; j < Table.Columns.Count; j++) {
        temp = [ Table.Columns.Data[j].length ];
        for (let i = 0; i < Table.Rows.Count; i++) {
            let value = Table.Rows.Data[i][j];
            temp.push((value) ? value.length : 0);
        }
    
        lengths.push(Math.max(...temp));
    }

    return lengths;
}

function toDefault(Table) {
    let builder = new StringBuilder();
    let columnLengths = ColumnLength(Table);

    let del = "-";
    for (let i = 0; i < columnLengths.length; i++)
        del += "-".repeat(columnLengths[i] + 2) + "-";

    builder.AppendLine(del);
    for (let i = 0; i < columnLengths.length; i++) {
        builder.AppendFormat(`| {0,-${columnLengths[i]}} `, Table.Columns.Data[i]);
    }

    builder.AppendLine("|");
    builder.AppendLine(del);

    for (let i = 0; i < Table.Rows.Count; i++) {
        for (let j = 0; j < Table.Columns.Data.length; j++) {
            let value = Table.Rows.Data[i][j];
            builder.AppendFormat(`| {0,-${columnLengths[j]}} `, (value || value != null) ? value : "");
        }
        
        builder.AppendLine("|");
        builder.AppendLine(del);
    }
    
    return builder.toString();
}

function toAlternative(Table) {
    let builder = new StringBuilder();
    let columnLengths = ColumnLength(Table);

    let del = "+";
    for (let i = 0; i < columnLengths.length; i++)
        del += "-".repeat(columnLengths[i] + 2) + "+";

    builder.AppendLine(del);
    for (let i = 0; i < columnLengths.length; i++) {
        builder.AppendFormat(`| {0,-${columnLengths[i]}} `, Table.Columns.Data[i]);
    }

    builder.AppendLine("|");
    builder.AppendLine(del);

    for (let i = 0; i < Table.Rows.Count; i++) {
        for (let j = 0; j < Table.Columns.Data.length; j++) {
            let value = Table.Rows.Data[i][j];
            builder.AppendFormat(`| {0,-${columnLengths[j]}} `, (value || value != null) ? value : "");
        }
        
        builder.AppendLine("|");
        builder.AppendLine(del);
    }
    
    return builder.toString();
}

function toMarkDown(Table) {
    let builder = new StringBuilder();
    let columnLengths = ColumnLength(Table);

    let del = "|";
    for (let i = 0; i < columnLengths.length; i++)
        del += "-".repeat(columnLengths[i] + 2) + "|";

    for (let i = 0; i < columnLengths.length; i++) {
        builder.AppendFormat(`| {0,-${columnLengths[i]}} `, Table.Columns.Data[i]);
    }

    builder.AppendLine("|");
    builder.AppendLine(del);
    
    for (let i = 0; i < Table.Rows.Count; i++) {
        for (let j = 0; j < Table.Columns.Data.length; j++) {
            let value = Table.Rows.Data[i][j];
            builder.AppendFormat(`| {0,-${columnLengths[j]}} `, (value || value != null) ? value : "");
        }
        
        builder.AppendLine("|");
    }
    
    return builder.toString();
}

function toMinimal(Table) {
    let builder = new StringBuilder();
    let columnLengths = ColumnLength(Table);

    let sum = 0;
    for (let i = 0; i < columnLengths.length; i++) sum += columnLengths[i];
    let del = ("-".repeat(sum) + "--".repeat(columnLengths.length)).replace("--", "");

    for (let i = 0; i < columnLengths.length; i++) {
        if (i != 0) builder.Append("  ");
        builder.AppendFormat(`{0,-${columnLengths[i]}}`, Table.Columns.Data[i]);
    }

    builder.AppendLine();
    builder.AppendLine(del);
    
    for (let i = 0; i < Table.Rows.Count; i++) {
        for (let j = 0; j < Table.Columns.Data.length; j++) {
            if (j != 0) builder.Append("  ");
            let value = Table.Rows.Data[i][j];
            builder.AppendFormat(`{0,-${columnLengths[j]}}`, (value || value != null) ? value : "");
        }
        
        builder.AppendLine();
    }
    
    return builder.toString();
}

/**
 * Представляет таблицу с данными.
 */
class DataTable {
    /**
     * Инициализирует новый экземпляр класса `DataTable` с указанным именем таблицы.
     * @param {String} Name 
     */
    constructor(Name) {
        this.name = Name;
        this.columnCollection = new DataColumnCollection();
        this.rowCollection = new DataRowCollection();
        this.caseSensitive = true;

        this.Event = new events.EventEmitter();

        this.rowCollection.on('NewRow', (e) => {
            if (e.Row.Data.length > this.columnCollection.Data.length)
                throw new Error("Длина входного массива больше числа столбцов в этой таблице.");

            this.Event.emit('tablenewrow', { Row: e.Row, Index: e.Index });
        });

        this.rowCollection.on('RowDeleting', (e) => {
            this.Event.emit('tablerowdeleting', { Row: e.Row, Index: e.Index });
        });
        
        this.rowCollection.on('RowDeleted', () => {
            this.Event.emit('tablerowdeleted');
        });

        this.rowCollection.on('RowCollectionClearing', (e) => {
            this.Event.emit('tableclearing', { Rows: e.Rows });
        });
        
        this.rowCollection.on('RowCollectionCleared', () => {
            this.Event.emit('tablecleared');
        });

        this.columnCollection.on('NewColumns', (e) => {
            this.Event.emit('tablenewcolumns', { Columns: e.Columns, Index: e.Index });
        });

        this.columnCollection.on('ColumnDeleting', (e) => {
            this.rowCollection.RemoveColumn(e.Index);
            this.Event.emit('tablecolumndeleting', { Columns: e.Columns, Index: e.Index });
        });

        this.columnCollection.on('ColumnDeleted', () => {
            this.Event.emit('tablecolumndeleted');
        });

        this.columnCollection.on('ColumnCollectionClearing', (e) => {
            this.rowCollection.Clear();
            this.Event.emit('tablecolumncollectionclearing', { Columns: e.Columns });
        });
    }

    /**
     * Возвращает или задает имя `DataTable`.
     */
    get Name() { return this.name; }
    set Name(Value) { this.name = Value; }

    /**
     * Получает коллекцию столбцов, принадлежащих данной таблице.
     */
    get Columns() {
        return this.columnCollection;
    }

    /**
     * Получает коллекцию строк, принадлежащих данной таблице.
     */
    get Rows() {
        return this.rowCollection;
    }

    /**
     * Показывает, учитывается ли регистр при сравнении строк в таблице.
     */
    get CaseSensitive() { return this.caseSensitive; }
    set CaseSensitive(Value) { this.caseSensitive = Value; }

    /**
     * Очищает `DataTable` от всех данных.
     */
    Clear() {
        this.rowCollection.Clear();
    }

    /**
     * 
     * @param {String} Event Имя события
     * `TableNewRow`                   - Происходит, когда вставляется новая строка `DataRow`.
     * `RowDeleting`                   - Происходит перед удалением строки таблицы.
     * `RowDeleted`                    - Происходит после удаления строки таблицы.
     * `TableClearing`                 - Происходит, когда очищается таблица `DataTable`.
     * `TableCleared`                  - Происходит после очистки `DataTable`.
     * `TableNewColumns`               - Происходит, когда вставляется новый столбец `DataColumn`. 
     * `TableColumnDeleting`           - Происходит перед удалением столбца.
     * `TableColumnDeleted`            - Происходит после удаления столбца
     * `TableColumnCollectionClearing` - Происходит когда очищается список столбцов.
     * @param {Function} Handler Обработчик события.
     */
    on(Event, Handler) {
        this.Event.on(Event.toLowerCase(), Handler);
    }

    /**
     * Преобразует данные таблицы в строчное представление.
     * @param {String} Format Формат отображения таблицы (`Default`, `MarkDown`, `Alternative`, `Minimal`).
     */
    toString(Format = 'Default') {
        Format = (isNaN(Format)) ? Format.toLowerCase() : Format;
        if (this.Columns.Count != 0) {
            switch (Format) {
                case 'name':
                    return this.Name;

                case 'default':
                case 1:
                    return toDefault(this);

                case 'markdown':
                case 2:
                    return toMarkDown(this);

                case 'alternative':
                case 3:
                    return toAlternative(this);

                case 'minimal':
                case 4:
                    return toMinimal(this);
                
                default:
                    return this.toString('default');
            }
        }
        else { return this.Name; }
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'dataTable';
    }
}

module.exports = DataTable;