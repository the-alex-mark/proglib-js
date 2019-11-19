'use struct';

/**
 * Представляет схему столбца в `DataTable`.
 */
class DataColumn {
    /**
     * Инициализирует новый экземпляр объекта `DataColumn`, как строку типа, используя указанное имя столбца.
     * @param  {String} Name Уникальное имя столбца.
     */
    constructor(Name) {
        if (Name && Name != null && Name.length > 0) {
            this.name = Name;
        }
        else { throw new Error('Название столбца имело пустое значение.'); }
    }

    /**
     * Возвращает имя столбца объекта `DataColumn`.
     */
    get Name() {
        return this.name;
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'dataColumn';
    }
}

module.exports = DataColumn;