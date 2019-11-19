'use struct';

/**
 * 
 * @param {*} Value 
 * @param {...String} Parameters 
 */
function FormatProvider(Value, Parameters) {
    let alignment, formatString;
    if (Parameters) {
        alignment    = Parameters.find( (i) => { return i.indexOf(',') > -1 ? i : undefined; } );
        formatString = Parameters.find( (i) => { return i.indexOf(':') > -1 ? i : undefined; } );
    }

    if (formatString) {
        if (/0+/g.test(formatString.replace(':', ''))) {
            if (typeof Value == 'number') {
                let _null = formatString.replace(':', '');
                if (_null.length <= String(Value).length) { Value = Value; }
                else {
                    let Count = _null.length - String(Value).length;
                    Value = "0".repeat(Count) + String(Value);
                }
            }
        }
        else {
            try {
                Value = Value.toString(formatString.replace(':', ''));
            }
            catch { Value = String(Value); }
        }
    }

    if (alignment) {
        let Length = Number.parseInt(alignment.replace(',', ''));
        let Count = Math.abs(Length) - String(Value).length;
        Value = (Length > 0) ? `${" ".repeat(Count)}${Value}` : `${Value}${" ".repeat(Count)}`;
    }

    return Value;
}

/**
 * Предоставляет изменяемую строку символов.
 */
class StringBuilder {
    constructor() {
        this.Value = (arguments && arguments.length > 0) ? String(arguments[0]) : "";
    }

    /**
     * Возвращает длину текущего объекта `StringBuilder`.
     */
    get length() {
        return this.Value.length;
    }

    /**
     * Добавляет строковое представление указанного объекта к данному экземпляру.
     * @param {*} Value Добавляемый объект.
     */
    Append(Value) {
        this.Value += String(Value);
        return this;
    }

    /**
     * Добавляет к данному экземпляру строку, возвращаемую в результате обработки строки составного формата, содержащей ноль или более элементов формата.
     * Каждый элемент формата заменяется строковым представлением соответствующего аргумента в массиве параметров.
     * @param {String} Format 
     * @param {...*} Values 
     */
    AppendFormat(Format, ...Values) {
        let p = /({?){([^}]+)}(}?)/g; // ({?){([^}]+)}(}*)
        let a = arguments, v = a[0], o = false;
        if (a.length == 2) {
            if (typeof a[1] == 'object' && a[1].constructor != String) {
                a = a[1];
                o = true;
            }
        }

        let s = v.split(p);
        let r = [];
        for (let i = 0; i < s.length; i += 4) {
            r.push(s[i]);
            if (s.length > i + 3) {
                let syntax = String(s[i + 2]).split(/(,.+)(:.+)|(:.+)(,.+)|(,.+)|(:.+)/g).filter(i => i && i != null && i != '');

                if (s[i + 1] == '{' && s[i + 3] == '}') {
                    r.push(s[i + 1], s[i + 2], s[i + 3]);
                } else {
                    let value = a[(o) ? s[i + 2] : parseInt(s[i + 2], 10) + 1];
                    r.push(s[i + 1], FormatProvider(value, syntax), s[i + 3]);
                }
            }
        }
        
        this.Value += r.join('');
        return this;
    }

    /**
     * Добавляет строковое представление указанного объекта к данному экземпляру.
     * @param {String} Value Добавляемый объект.
     */
    AppendLine(Value) {
        this.Value += (Value) ? String(Value) + "\n" : "\n";
        return this;
    }

    /**
     * Вставляет строковое представление объекта в данный экземпляр на указанную позицию символа.
     * @param {Number} Index Позиция в данном экземпляре, с которой начинается вставка.
     * @param {*} Value Объект для вставки.
     */
    Insert(Index, Value) {
        this.Value = String(this.Value).substr(0, Index) + String(Value) + String(this.Value).substr(Index);
        return this;
    }

    /**
     * Удаляет указанный диапазон символов из данного экземпляра.
     * @param {Number} StartIndex Отсчитываемая с нуля позиция в данном экземпляре, с которой начинается удаление.
     * @param {Number} Length Число знаков для удаления.
     */
    Remove(StartIndex, Length) {
        this.Value = String(this.Value).substr(0, StartIndex) + String(this.Value).substring(StartIndex + Length);
        return this;
    }

    /**
     * Замещает все вхождения указанной строки в подстроке данного экземпляра на другую указанную строку.
     * Если параметры `StartIndex` и `Count` не указывать, замена производиться по всей строке.
     * @param {String} OldValue Замещаемая строка.
     * @param {String} NewValue Строка, замещающая `OldValue`.
     * @param {Number} StartIndex Позиция в данном экземпляре, с которой начинается подстрока.
     * @param {Number} Count Длина подстроки.
     */
    Replace(OldValue, NewValue, StartIndex, Count) {
        switch (arguments.length) {
            case 2:
                this.Value = String(this.Value).replaceAll(OldValue, NewValue);
                break;

            case 4:
                let start = String(this.Value).substr(0, StartIndex);
                let end = String(this.Value).substring(StartIndex + Count);

                this.Value = start + String(this.Value).substr(StartIndex, Count).replaceAll(OldValue, NewValue) + end;
                break;

            default:
                throw new Error('Входные параметры заданы неверно.');
        }

        return this;
    }

    /**
     * Удаляет все символы из текущего экземпляра `StringBuilder`.
     */
    Clear() {
        this.Value = "";
        return this;
    }

    /**
     * Возвращает значение, показывающее, равен ли данный экземпляр заданному объекту.
     * @param {StringBuilder} sb Объект, сравниваемый с этим экземпляром.
     */
    Equals(sb) {
        return (sb.Value == this.Value) ? true : false;
    }

    /**
     * Преобразует значение данного экземпляра в строчное представление.
     */
    toString() {
        return String(this.Value);
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'stringBuilder';
    }
}

module.exports = StringBuilder;