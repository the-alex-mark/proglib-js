'use struct';
const Color = require('./color');

class MetroColors {

    /** Получает цвет, имеющий значение `#FF000000`. */
    static get Black() { return new Color(0, 0, 0); }

    /** Получает цвет, имеющий значение `#FFFFFFFF`. */
    static get White() { return new Color(255, 255, 255); }

    /** Получает цвет, имеющий значение `#FF555555`. */
    static get Silver() { return new Color(85, 85, 85); }
    
    /** Получает цвет, имеющий значение `#FF00AEDB`. */
    static get Blue() { return new Color(0, 174, 219); }

    /** Получает цвет, имеющий значение `#FF8EBC00`. */
    static get Green() { return new Color(0, 177, 89); }

    /** Получает цвет, имеющий значение `#FF00B159`. */
    static get Lime() { return new Color(142, 188, 0); }

    /** Получает цвет, имеющий значение `#FF00AAAD`. */
    static get Teal() { return new Color(0, 170, 173); }

    /** Получает цвет, имеющий значение `#FFF37735`. */
    static get Orange() { return new Color(243, 119, 53); }

    /** Получает цвет, имеющий значение `#FFA55100`. */
    static get Brown() { return new Color(165, 81, 0); }

    /** Получает цвет, имеющий значение `#FFE771BD`. */
    static get Pink() { return new Color(231, 113, 189); }

    /** Получает цвет, имеющий значение `#FFFF0094`. */
    static get Magenta() { return new Color(255, 0, 148); }

    /** Получает цвет, имеющий значение `#FF7C4199`. */
    static get Purple() { return new Color(124, 65, 153); }

    /** Получает цвет, имеющий значение `#FFD11141`. */
    static get Red() { return new Color(209, 17, 65); }

    /** Получает цвет, имеющий значение `#FFFFC425`. */
    static get Yellow() { return new Color(255, 196, 37); }
}

module.exports = MetroColors;