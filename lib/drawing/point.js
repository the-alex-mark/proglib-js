'use struct';
const Size = require('./size');

function LOWORD(N) { return N & 0xffff; }
function HIWORD(N) { return (N >> 16) & 0xffff; }

/**
 * Представляет упорядоченную пару чисел — координат `Х` и `Y`, определяющую точку на двумерной плоскости.
 */
class Point {
    /**
     * 
     * @param {Number} X Положение точки по горизонтали.
     * @param {Number} Y Положение точки по вертикали.
     */
    constructor(X, Y) {
        switch (arguments.length) {
            case 1:
                if (arguments[0].GetType() == 'size') {
                    this.X = arguments[0].Width;
                    this.Y = arguments[1].Height;
                }

                else if (typeof arguments[0] == 'number') {
                    this.X = LOWORD(arguments[0]);
                    this.Y = HIWORD(arguments[0]);
                }

                else throw new Error('Входные данные заданы неверно.');
                break;

            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    this.X = arguments[0];
                    this.Y = arguments[1];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;
            
            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Получает объект `Point`, имеющую значения `X` и `Y`, равные `0`.
     */
    static Empty() {
        return new Point(0, 0);
    }

    /**
     * Получает значение, определяющее, пуст ли объект `Point`.
     */
    get IsEmpty() {
        return (this.X == 0 && this.Y == 0);
    }

    /**
     * Добавляет заданный размер `Size` к точке `Point`.
     * @param {Point} pt Добавляемый объект `Point`.
     * @param {Size} sz Объект `Size` для добавления.
     */
    static Add(pt, sz) {
        return new Point(pt.X + sz.Width, pt.Y + sz.Height);
    }

    /**
     * Округляет значения объекта `Point` до ближайших целых чисел.
     * @param {Point} pt Округляемый объект `Point`.
     */
    static Round(pt) {
        return new Point(Math.round(pt.X), Math.round(pt.Y));
    }

    /**
     * Возвращает результат вычитания заданного размера `Size` из заданной точки `Point`.
     * @param {Point} pt Точка `Point`, из которой осуществляется вычитание.
     * @param {Size} sz Размер `Size`, вычитаемый из точки `Point`.
     */
    static Subtract(pt, sz) {
        return new Point(pt.X - sz.Width, pt.Y - sz.Height);
    }

    /**
     * Округляет значения текущего объекта `Point` до ближайших целых чисел.
     */
    Round() {
        this.X = Math.round(this.X);
        this.Y = Math.round(this.Y);
    }

    /**
     * Смещает точку `Point` на указанную точку `Point`.
     * @param {Point} pt Точка `Point`, полученная смещением на значения точки `Point`.
     */
    Offset(pt) {
        switch (arguments.length) {
            case 1:
                if (arguments[0].GetType() == 'point') {
                    this.Offset(arguments[0].X, arguments[0].Y);
                }
                break;

            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    this.X += arguments[0];
                    this.Y += arguments[1];
                }
                break;
        }
    }

    /**
     * Проверяет, является ли указанный объект с таким же координатами, что и объект `Point`.
     * @param {Point} pt Объект `Point` для проверки.
     */
    Equals(pt) {
        return (pt.X == this.X) && (pt.Y == this.Y);
    }

    /**
     * Преобразует объект `Point` в строку, доступную для чтения.
     */
    toString() {
        return "{ X = " + this.X.toString() + ", Y = " + this.Y.toString() + " }";
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'point';
    }
}

module.exports = Point;