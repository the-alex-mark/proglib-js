'use struct';

/**
 * Представляет строку данных в `DataTable`.
 */
class DataRow {
    /**
     * Инициализирует новый экземпляр объекта `DataRow` с указанной строкой.
     * @param  {...any} Values 
     */
    constructor(...Values) {
        this.collection = Values;
    }

    /**
     * Возвращает данные объекта `DataRow`.
     */
    get Data() {
        return this.collection;
    }

    /**
     * Возвращает общее число элементов в коллекции.
     */
    get Count() {
        return this.collection.length;
    }

    /**
     * Возвращает значение, позволяющее определить, представляют ли текущий объект `DataRow` и указанный объект `DataRow` одно и то же значение.
     * @param {DataRow} Value Объект `DataRow`, сравниваемый с текущим объектом `DataRow`.
     */
    Equals(Value) {
        if (!Value || Value == null || Value.GetType() != 'dataRow')
            throw new Error('Входные параметры заданы неверно.');

        if (this.Data.length != Value.Data.length) return false;
        for (let i in this.Data)
            if (this.Data[i] !== Value.Data[i]) return false;

        return true;
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'dataRow';
    }
}

module.exports = DataRow;