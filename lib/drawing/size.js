'use struct';
const Point = require('./point');

/**
 * Сохраняет упорядоченную пару целых чисел, указывающих `Height` и `Width`.
 */
class Size {
    /**
     * 
     * @param {Number} Width 
     * @param {Number} Height 
     */
    constructor(Width, Height) {
        switch (arguments.length) {
            case 1:
                if (arguments[0].GetType() == 'point') {
                    this.Width = arguments[0].X;
                    this.Height = arguments[0].Y;
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;
            
            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    this.Width = arguments[0];
                    this.Height = arguments[1];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;
            
            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Получает объект `Size`, имеющую значения `Height` и `Width`, равные `0`.
     */
    static Empty() {
        return new Size(0, 0);
    }

    /**
     * Проверяет, равны ли 0 ширина и высота структуры `Size`.
     */
    get IsEmpty() {
        return (this.Width == 0 && this.Height == 0);
    }

    /**
     * Прибавляет ширину и высоту одной объекта `Size` к ширине и высоте другой объекта `Size`.
     * @param {Size} sz1 Первая складываемая структура `Size`.
     * @param {Size} sz2 Вторая складываемая структура `Size`.
     */
    static Add(sz1, sz2) {
        return new Size(sz1.Width + sz2.Width, sz1.Height + sz2.Height);
    }

    /**
     * Округляет значения объекта `Size` до ближайших целых чисел.
     * @param {Size} sz Округляемый объект `Size`.
     */
    static Round(sz) {
        return new Size(Math.round(sz.Width), Math.round(sz.Height));
    }

    /**
     * Вычитает ширину и высоту одной объекта `Size` из ширины и высоты другой объекта `Size`.
     * @param {Size} sz1 Структура `Size`, которая находится слева от оператора вычитания.
     * @param {Size} sz2 Структура `Size`, которая находится справа от оператора вычитания.
     */
    static Subtract(sz1, sz2) {
        return new Size(sz1.Width - sz2.Width, sz1.Height - sz2.Height);
    }

    /**
     * Округляет значения текущего объекта `Size` до ближайших целых чисел.
     */
    Round() {
        this.Width = Math.round(this.Width);
        this.Height = Math.round(this.Height);
    }

    /**
     * Проверяет, является ли указанный объект с таким же размером, что и объект `Size`.
     * @param {Size} sz Объект `Size` для проверки.
     */
    Equals(sz) {
        return (sz.Width == this.Width) && (sz.Height == this.Height);
    }

    /**
     * Создает удобную для восприятия строку, представляющий этот объект `Size`.
     */
    toString() {
        return "{ Width = " + this.Width.toString() + ", Height = " + this.Height.toString() + " }";
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'size';
    }
}

module.exports = Size;