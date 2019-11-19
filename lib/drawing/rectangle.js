'use struct';
const Point = require('./point');
const Size  = require('./size');

/**
 * Содержит набор из четырех целых чисел, определяющих расположение и размер прямоугольника.
 */
class Rectangle {
    constructor() {
        switch (arguments.length) {
            case 2:
                if (arguments[0].GetType() == 'point' && arguments[1].GetType() == 'size') {
                    this.X      = arguments[0].X;
                    this.Y      = arguments[0].Y;
                    this.Width  = arguments[1].Width;
                    this.Height = arguments[1].Height;
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            case 4:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number' && typeof arguments[2] == 'number' && typeof arguments[3] == 'number') {
                    this.X      = arguments[0];
                    this.Y      = arguments[1];
                    this.Width  = arguments[2];
                    this.Height = arguments[3];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;
            
            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Возвращает координату по оси `X`, являющуюся суммой значений свойств `X` и `Width` данного объекта `Rectangle`.
     */
    get Right() {
        return this.X + this.Width;
    }

    /**
     * Возвращает координату по оси `Y` верхнего края объекта `Rectangle`.
     */
    get Top() {
        return this.Y;
    }

    /**
     * Возвращает координату по оси `X` левого края структуры `Rectangle`.
     */
    get Left() {
        return this.X;
    }

    /**
     * Возвращает координату по оси `Y`, являющуюся суммой значений свойств `Y` и `Height` данного объекта `Rectangle`.
     */
    get Bottom() {
        return this.Y + this.Height;
    }

    /**
     * Возвращает или задает координаты левого верхнего угла объекта `Rectangle`.
     */
    get Location() {
        return new Point(this.X, this.Y);
    }

    set Location(Value) {
        if (Value.GetType() == 'point') {
            this.X = Value.X;
            this.Y = Value.Y;
        }
        throw new Error('Входные данные заданы неверно.');
    }

    /**
     * Возвращает или задает размер этого объекта `Rectangle`.
     */
    get Size() {
        return new Size(this.Width, this.Height);
    }

    set Size(Value) {
        if (Value.GetType() == 'size') {
            this.Width = Value.Width;
            this.Height = Value.Height;
        }
        throw new Error('Входные данные заданы неверно.');
    }

    /**
     * Создает объект `Rectangle` с заданным положением краев.
     * @param {Number} Left Координата по оси `X` верхнего левого угла объекта `Rectangle`.
     * @param {Number} Top Координата по оси `Y` верхнего левого угла объекта `Rectangle`.
     * @param {Number} Right Координата по оси `X` нижнего правого угла объекта `Rectangle`.
     * @param {Number} Bottom Координата по оси `Y` нижнего правого угла объекта `Rectangle`.
     */
    static FromLTRB(Left, Top, Right, Bottom) {
        return new Rectangle(Left, Top, Right - Left, Bottom - Top);
    }
    
    /**
     * Создает и возвращает увеличенную копию заданной объекта `Rectangle`.
     * Копия увеличивается на заданную величину. Исходный объект `Rectangle` остается без изменений.
     * @param {Rectangle} rect Объект `Rectangle`, являющийся исходным.
     * @param {Number} X Величина, на которую требуется увеличить данный прямоугольник `Rectangle` в горизонтальном направлении.
     * @param {Number} Y Величина, на которую требуется увеличить данный прямоугольник `Rectangle` в вертикальном направлении.
     */
    static Inflate(rect, X, Y) {
        return rect.Inflate(x, y);
    }

    /**
     * Возвращает третий объект `Rectangle`, представляющий собой пересечение двух других объектов `Rectangle`.
     * Если пересечение отсутствует, возвращается пустой объект `Rectangle`.
     * @param {Rectangle} A Прямоугольник для пересечения.
     * @param {Rectangle} B Прямоугольник для пересечения.
     */
    static Intersect(A, B) {
        let x1 = Math.max(A.X, A.X);
        let x2 = Math.min(A.X + A.Width, B.X + B.Width);
        let y1 = Math.max(A.Y, B.Y);
        let y2 = Math.min(A.Y + A.Height, B.Y + B.Height);

        if (x2 >= x1 && y2 >= y1)
            return new Rectangle(x1, y1, x2 - x1, y2 - y1);

        return undefined;
    }

    /**
     * Округляет значения `Rectangle` до ближайших целых чисел.
     * @param {Rectangle} rect Преобразуемый объект `Rectangle`.
     */
    static Round(rect) {
        return new Rectangle(Math.round(rect.X), Math.round(rect.Y), Math.round(rect.Width), Math.round(rect.Height));
    }

    /**
     * Возвращает объект `Rectangle`, содержащую объединение двух объектов `Rectangle`.
     * @param {Rectangle} A Прямоугольник, предназначенный для объединения.
     * @param {Rectangle} B Прямоугольник, предназначенный для объединения.
     */
    static Union(A, B) {
        let x1 = Math.min(A.X, B.X);
        let x2 = Math.max(A.X + A.Width, B.X + B.Width);
        let y1 = Math.min(A.Y, B.Y);
        let y2 = Math.max(A.Y + A.Height, B.Y + B.Height);

        return new Rectangle(x1, y1, x2 - x1, y2 - y1);
    }

    /**
     * Определяет, содержится ли заданный объект (`Point`, `Rectangle`) в объекте `Rectangle`.
     * @argument Point (или X, Y)
     * @argument Rectangle
     */
    Contains() {
        switch (arguments.length) {
            case 1:
                if (arguments[0].GetType() == 'point') {
                    return Contains(arguments[0].X, arguments[0].Y);
                }

                else if (arguments[0].GetType() == 'rectangle') {
                    return(this.X <= arguments[0].X) && ((arguments[0].X + arguments[0].Width) <= (this.X + this.Width)) && (this.Y <= arguments[0].Y) && ((arguments[0].Y + arguments[0].Height) <= (this.Y + this.Height));
                }

                else { throw new Error('Входные данные заданы неверно.'); }

            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    return this.X <= arguments[0] && arguments[0] < this.X + this.Width && this.Y <= arguments[1] && arguments[1] < this.Y + this.Height;
                }
                else { throw new Error('Входные данные заданы неверно.'); }
        
            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Увеличивает данный объект `Rectangle` на заданную величину.
     * @argument Size (или `Width`, `Height`)
     */
    Inflate() {
        switch (arguments.length) {
            case 1:
                if (arguments[0].GetType() == 'point') {
                    this.Inflate(arguments[0].Width, arguments[0].Height);
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    this.X -= arguments[0];
                    this.Y -= arguments[1];
                    this.Width += 2 * arguments[0];
                    this.Height += 2 * arguments[1];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;
            
            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Заменяет данный объект `Rectangle` его пересечением с указанным прямоугольником `Rectangle`.
     * @param {Rectangle} rect Объект `Rectangle`, с которым происходит пересечение.
     */
    Intersect(rect) {
        let result = Rectangle.Intersect(rect, this);
 
        this.X = result.X;
        this.Y = result.Y;
        this.Width = result.Width;
        this.Height = result.Height;
    }

    /**
     * Определяет, пересекается ли данный прямоугольник с прямоугольником `rect`.
     * @param {Rectangle} rect 
     */
    IntersectsWith(rect) {
        return (rect.X < this.X + this.Width) && (this.X < (rect.X + rect.Width)) && (rect.Y < this.Y + this.Height) && (this.Y < rect.Y + rect.Height);
    }

    /**
     * Изменяет положение этого прямоугольника на указанную величину.
     * @argument Point (или `X`, `Y`)
     */
    Offset() {
        switch (arguments.length) {
            case 1:
                if (arguments[0].GetType() == 'point') {
                    this.Offset(arguments[0].X, arguments[0].Y);
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;
            
            case 2:
                if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
                    this.X += arguments[0];
                    this.Y += arguments[1];
                }
                else { throw new Error('Входные данные заданы неверно.'); }
                break;

            default:
                throw new Error('Входные данные заданы неверно.');
        }
    }

    /**
     * Проверяет, является ли указанный объект с таким же расположением и размером, что и объект `Rectangle`.
     * @param {Rectangle} rect Объект `Rectangle` для проверки.
     */
    Equals(rect) {
        return (rect.X == this.X) && (rect.Y == this.Y) && (rect.Width == this.Width) && (rect.Height == this.Height);
    }

    /**
     * Преобразует атрибуты этого прямоугольника `Rectangle` в удобную для восприятия строку.
     */
    toString() {
        return "{ X = " + this.X.toString() + ", Y = " + this.Y.toString() + ", Width = " + this.Width.toString() + ", Height = " + this.Height.toString() + " }";
    }

    /**
     * Возвращает тип для текущего экземпляра.
     */
    GetType() {
        return 'rectangle';
    }
}

module.exports = Rectangle;