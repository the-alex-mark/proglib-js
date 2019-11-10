'use struct';
const Color = require('./color');

class MetroColors {

    static get Black() { return new Color(0, 0, 0); }

    static get White() { return new Color(255, 255, 255); }

    static get Silver() { return new Color(85, 85, 85); }
    
    static get Blue() { return new Color(0, 174, 219); }

    static get Green() { return new Color(0, 177, 89); }

    static get Lime() { return new Color(142, 188, 0); }

    static get Teal() { return new Color(0, 170, 173); }

    static get Orange() { return new Color(243, 119, 53); }

    static get Brown() { return new Color(165, 81, 0); }

    static get Pink() { return new Color(231, 113, 189); }

    static get Magenta() { return new Color(255, 0, 148); }

    static get Purple() { return new Color(124, 65, 153); }

    static get Red() { return new Color(209, 17, 65); }

    static get Yellow() { return new Color(255, 196, 37); }
}

module.exports = MetroColors;