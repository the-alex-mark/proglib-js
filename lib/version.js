'use struct';

const SeparatorsArray = '.';

/**
 * Представляет номер версии сборки, операционной системы или среды Node.js.
 */
class Version {
    /**
     * Инициализирует новый экземпляр класса `Version` с помощью указанных основного и дополнительного номеров версии, номера построения и номера редакции.
     * @param {Number} Major Основной номер версии.
     * @param {Number} Minor Дополнительный номер версии.
     * @param {Number} Build Номер сборки.
     * @param {Number} Revision Номер редакции.
     */
    constructor(Major, Minor, Build, Revision) {
        switch (arguments.length) {
            case 0:
                this.Major = 0;
                this.Minor = 0;
                break;

            case 1:
                if (typeof arguments[0] == 'string') {
                    let _version = Version.Parse(arguments[0]);
                    if (_version.Major)    this.Major    = _version.Major;
                    if (_version.Minor)    this.Minor    = _version.Minor;
                    if (_version.Build)    this.Build    = _version.Build;
                    if (_version.Revision) this.Revision = _version.Revision;
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    for (let i of arguments)
                        if (i < 0) throw new Error('Параметры версии должны быть больше или равны нулю.');

                    this.Major = arguments[0];
                    this.Minor = arguments[1];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            case 3:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number' && typeof arguments[2] == 'number') {
                    for (let i of arguments)
                        if (i < 0) throw new Error('Параметры версии должны быть больше или равны нулю.');

                    this.Major = arguments[0];
                    this.Minor = arguments[1];
                    this.Build = arguments[2];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            case 4:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number' && typeof arguments[2] == 'number' && typeof arguments[3] == 'number') {
                    for (let i of arguments)
                        if (i < 0) throw new Error('Параметры версии должны быть больше или равны нулю.');
                    
                    this.Major    = arguments[0];
                    this.Minor    = arguments[1];
                    this.Build    = arguments[2];
                    this.Revision = arguments[3];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            default:
                throw new Error('Входные данные содержат менее двух или более четырех компонентов версии.');
        }
    }

    /**
     * Преобразует строковое представление номера версии в эквивалентный объект `Version`.
     * @param {String} Value Строка, содержащая преобразуемый номер версии.
     */
    static Parse(Value) {
        if (!Value || Value == null)
            throw new Error('Входные данные заданы неверно.');

        let parsedComponents = Value.split(SeparatorsArray);
        let parsedComponentsLength = parsedComponents.length;

        for (let i in parsedComponents) {
            if (isNaN(Number.parseInt(parsedComponents[i])))
                throw new Error('Входные данные заданы неверно.');
            else parsedComponents[i] = Number.parseInt(parsedComponents[i]);
        }

        if ((parsedComponentsLength < 2) || (parsedComponentsLength > 4))
            throw new Error('Входные данные содержат менее двух или более четырех компонентов версии.');
        
        return new Version(...parsedComponents);
    }

    /**
     * Сравнивает текущий объект `Version` с указанным объектом `Version` и возвращает сведения об их относительных значениях.
     * @param {Version} Value Объект `Version`, сравниваемый с текущим объектом `Version`.
     * @returns
     * Целое число со знаком, которое определяет относительные значения двух объектов.
     * Возвращаемое значение меньше нуля в текущем объекте `Version` указана версия, предшествующая версии, указанной в параметре `Value`.
     * Больше нуля в текущем объекте `Version` указана версия, следующая за версией, указанной в параметре `Value`.
     */
    CompareTo(Value)  {
        if (!Value || Value == null)
            return 1;

        if (this.Major != Value.Major)
            return (this.Major > Value.Major) ? 1 : -1;

        if (this.Minor != Value.Minor)
            return (this.Minor > Value.Minor) ? 1 : -1;

        if (this.Build != Value.Build)
            return (this.Build > Value.Build) ? 1 : -1;

        if (this.Revision != Value.Revision)
            return (this.Revision > Value.Revision) ? 1 : -1;

        return 0;
    }

    /**
     * Возвращает значение, позволяющее определить, представляют ли текущий объект `Version` и указанный объект `Version` одно и то же значение.
     * @param {Version} Value Объект `Version`, сравниваемый с текущим объектом `Version`.
     * @returns
     * Значение `true`, если все компоненты текущего объекта `Version` совпадают с соответствующими компонентами параметра Value, в противном случае — значение `false`.
     */
    Equals(Value) {
        if (Value == null)
        return false;

        if ((this.Major != Value.Major) || (this.Minor != Value.Minor) || (this.Build != Value.Build) || (this.Revision != Value.Revision))
            return false;

        return true;
    }

    /**
     * Преобразует значение текущего объекта `Version` в объект Json.
     */
    toObject() {
        let result = { Major: this.Major, Minor: this.Minor, Build: this.Build, Revision: this.Revision }
        Object.keys(result).forEach(function(i) { if (!result[i]) delete result[i]; });
        
        return result;
    }

    /**
     * Преобразует значение текущего объекта `Version` в массив.
     */
    toArray() {
        let result = [ this.Major, this.Minor, this.Build, this.Revision ];
        return result.filter(function (el) { return el != undefined; });
    }

    /**
     * Преобразует значение текущего объекта `Version` в эквивалентное ему строчное представление.
     */
    toString() {
        switch (arguments.length) {
            case 0:
                return this.toArray().join(SeparatorsArray);

            // Значение аргумента должно находиться между 0 и 2.
            case 1:
                if (typeof arguments[0] == 'number') {
                    if (arguments[0] >= 0 && arguments[0] <= this.toArray().length) {
                        return this.toArray().slice(0, arguments[0]).join(SeparatorsArray);
                    }
                    else { throw new Error(`Значение аргумента должно находиться между 0 и ${this.toArray().length}.`); }
                }
                else { throw new Error('Входные данные заданы неверно.'); }
            
            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'version';
    }
}

module.exports = Version;