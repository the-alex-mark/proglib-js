'use strict';
const KnownColor = require('./knownColor');

const ARGBAlphaShift = 24;
const ARGBRedShift = 16;
const ARGBGreenShift = 8;
const ARGBBlueShift = 0;

const Win32RedShift   = 0;
const Win32GreenShift = 8;
const Win32BlueShift  = 16;

/**
 * Предоставляет методы и свойства для работы с цветовыми моделями.
 */
class Color {

    /**
     * Инициализирует новый экземпляр класса "Color".
     * Принимает Имя предопределённого цвета либо значения соответсвующие цветовой модели Rgb (Rgba).
     * @param {String} Name Имя предопределённого цвета.
     * @param {Number} Red Красный: { 0 ... 255 }.
     * @param {Number} Green Зелёный: { 0 ... 255 }.
     * @param {Number} Blue Синий: { 0 ... 255 }.
     * @param {Number} Alpha Прозрачность: { 0 ... 1 }.
     */
    constructor() {
        switch (arguments.length) {
            case 0:
                this.Name = "Black";
                this.R = 0; this.G = 0; this.B = 0; this.A = 1;
                break;
            
            case 1:
                if (typeof arguments[0] === 'string') {
                    let _color = KnownColor.Search(arguments[0]);
                    if (_color != "") {
                        this.Name = _color.name;
                        this.R = _color.r; this.G = _color.g; this.B = _color.b; this.A = 1;
                    }
                    else {
                        this.Name = "Black";
                        this.R = 0; this.G = 0; this.B = 0; this.A = 1;
                    }
                }
                else { throw "Входные параметры заданы неверно."; }
                break;
            
            case 3:
                if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && typeof arguments[2] === 'number') {
                    let _color = KnownColor.Search(arguments[0], arguments[1], arguments[2]);
                    this.Name = (_color != "") ? _color.name : "";
                    this.R = arguments[0]; this.G = arguments[1]; this.B = arguments[2]; this.A = 1;
                }
                else { throw "Входные параметры заданы неверно."; }
                break;
            
            case 4:
                if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && typeof arguments[2] === 'number' && typeof arguments[3] === 'number') {
                    let _color = KnownColor.Search(arguments[0], arguments[1], arguments[2]);
                    this.Name = (_color != "") ? _color.Name : "";
                    this.R = arguments[0]; this.G = arguments[1]; this.B = arguments[2]; this.A = arguments[3];
                }
                else { throw "Входные параметры заданы неверно."; }
                break;
            
            default:
                throw "Входные параметры заданы неверно.";
        }
    }

    /** Получает определенный системой цвет, имеющий значение #FF9370DB. */
    static get MediumPurple() { return new Color("MediumPurple"); }

    /** Получает определенный системой цвет, имеющий значение #FF3CB371. */
    static get MediumSeaGreen() { return new Color("MediumSeaGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF7B68EE. */
    static get MediumSlateBlue() { return new Color("MediumSlateBlue"); }
    
    /** Получает определенный системой цвет, имеющий значение #FF00FA9A. */
    static get MediumSpringGreen() { return new Color("MediumSpringGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF48D1CC. */
    static get MediumTurquoise() { return new Color("MediumTurquoise"); }

    /** Получает определенный системой цвет, имеющий значение #FFC71585. */
    static get MediumVioletRed() { return new Color("MediumVioletRed"); }

    /** Получает определенный системой цвет, имеющий значение #FF191970. */
    static get MidnightBlue() { return new Color("MidnightBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFBA55D3. */
    static get MediumOrchid() { return new Color("MediumOrchid"); }

    /** Получает определенный системой цвет, имеющий значение #FFF5FFFA. */
    static get MintCream() { return new Color("MintCream"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFE4B5. */
    static get Moccasin() { return new Color("Moccasin"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFDEAD. */
    static get NavajoWhite() { return new Color("NavajoWhite"); }

    /** Получает определенный системой цвет, имеющий значение #FF000080. */
    static get Navy() { return new Color("Navy"); }

    /** Получает определенный системой цвет, имеющий значение #FFFDF5E6. */
    static get OldLace() { return new Color("OldLace"); }

    /** Получает определенный системой цвет, имеющий значение #FF808000. */
    static get Olive() { return new Color("Olive"); }

    /** Получает определенный системой цвет, имеющий значение #FF6B8E23. */
    static get OliveDrab() { return new Color("OliveDrab"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFA500. */
    static get Orange() { return new Color("Orange"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFE4E1. */
    static get MistyRose() { return new Color("MistyRose"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF4500. */
    static get OrangeRed() { return new Color("OrangeRed"); }

    /** Получает определенный системой цвет, имеющий значение #FF0000CD. */
    static get MediumBlue() { return new Color("MediumBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FF800000. */
    static get Maroon() { return new Color("Maroon"); }

    /** Получает определенный системой цвет, имеющий значение #FFADD8E6. */
    static get LightBlue() { return new Color("LightBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFF08080. */
    static get LightCoral() { return new Color("LightCoral"); }

    /** Получает определенный системой цвет, имеющий значение #FFFAFAD2. */
    static get LightGoldenrodYellow() { return new Color("LightGoldenrodYellow"); }

    /** Получает определенный системой цвет, имеющий значение #FF90EE90. */
    static get LightGreen() { return new Color("LightGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FFD3D3D3. */
    static get LightGray() { return new Color("LightGray"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFB6C1. */
    static get LightPink() { return new Color("LightPink"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFA07A. */
    static get LightSalmon() { return new Color("LightSalmon"); }

    /** Получает определенный системой цвет, имеющий значение #FF66CDAA. */
    static get MediumAquamarine() { return new Color("MediumAquamarine"); }

    /** Получает определенный системой цвет, имеющий значение #FF20B2AA. */
    static get LightSeaGreen() { return new Color("LightSeaGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF778899. */
    static get LightSlateGray() { return new Color("LightSlateGray"); }

    /** Получает определенный системой цвет, имеющий значение #FFB0C4DE. */
    static get LightSteelBlue() { return new Color("LightSteelBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFFE0. */
    static get LightYellow() { return new Color("LightYellow"); }

    /** Получает определенный системой цвет, имеющий значение #FF00FF00. */
    static get Lime() { return new Color("Lime"); }

    /** Получает определенный системой цвет, имеющий значение #FF32CD32. */
    static get LimeGreen() { return new Color("LimeGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FFFAF0E6. */
    static get Linen() { return new Color("Linen"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF00FF. */
    static get Magenta() { return new Color("Magenta"); }

    /** Получает определенный системой цвет, имеющий значение #FF87CEFA. */
    static get LightSkyBlue() { return new Color("LightSkyBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFACD. */
    static get LemonChiffon() { return new Color("LemonChiffon"); }

    /** Получает определенный системой цвет, имеющий значение #FFDA70D6. */
    static get Orchid() { return new Color("Orchid"); }

    /** Получает определенный системой цвет, имеющий значение #FF98FB98. */
    static get PaleGreen() { return new Color("PaleGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF6A5ACD. */
    static get SlateBlue() { return new Color("SlateBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FF708090. */
    static get SlateGray() { return new Color("SlateGray"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFAFA. */
    static get Snow() { return new Color("Snow"); }

    /** Получает определенный системой цвет, имеющий значение #FF00FF7F. */
    static get SpringGreen() { return new Color("SpringGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF4682B4. */
    static get SteelBlue() { return new Color("SteelBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFD2B48C. */
    static get Tan() { return new Color("Tan"); }

    /** Получает определенный системой цвет, имеющий значение #FF008080. */
    static get Teal() { return new Color("Teal"); }

    /** Получает определенный системой цвет, имеющий значение #FF87CEEB. */
    static get SkyBlue() { return new Color("SkyBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFD8BFD8. */
    static get Thistle() { return new Color("Thistle"); }

    /** Получает определенный системой цвет, имеющий значение #FF40E0D0. */
    static get Turquoise() { return new Color("Turquoise"); }

    /** Получает определенный системой цвет, имеющий значение #FFEE82EE. */
    static get Violet() { return new Color("Violet"); }

    /** Получает определенный системой цвет, имеющий значение #FFF5DEB3. */
    static get Wheat() { return new Color("Wheat"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFFFF. */
    static get White() { return new Color("White"); }

    /** Получает определенный системой цвет, имеющий значение #FFF5F5F5. */
    static get WhiteSmoke() { return new Color("WhiteSmoke"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFF00. */
    static get Yellow() { return new Color("Yellow"); }

    /** Получает определенный системой цвет, имеющий значение #FF9ACD32. */
    static get YellowGreen() { return new Color("YellowGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF6347. */
    static get Tomato() { return new Color("Tomato"); }

    /** Получает определенный системой цвет, имеющий значение #FFEEE8AA. */
    static get PaleGoldenrod() { return new Color("PaleGoldenrod"); }

    /** Получает определенный системой цвет, имеющий значение #FFC0C0C0. */
    static get Silver() { return new Color("Silver"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFF5EE. */
    static get SeaShell() { return new Color("SeaShell"); }

    /** Получает определенный системой цвет, имеющий значение #FFAFEEEE. */
    static get PaleTurquoise() { return new Color("PaleTurquoise"); }

    /** Получает определенный системой цвет, имеющий значение #FFDB7093. */
    static get PaleVioletRed() { return new Color("PaleVioletRed"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFEFD5. */
    static get PapayaWhip() { return new Color("PapayaWhip"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFDAB9. */
    static get PeachPuff() { return new Color("PeachPuff"); }

    /** Получает определенный системой цвет, имеющий значение #FFCD853F. */
    static get Peru() { return new Color("Peru"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFC0CB. */
    static get Pink() { return new Color("Pink"); }

    /** Получает определенный системой цвет, имеющий значение #FFDDA0DD. */
    static get Plum() { return new Color("Plum"); }

    /** Получает определенный системой цвет, имеющий значение #FFA0522D. */
    static get Sienna() { return new Color("Sienna"); }

    /** Получает определенный системой цвет, имеющий значение #FFB0E0E6. */
    static get PowderBlue() { return new Color("PowderBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF0000. */
    static get Red() { return new Color("Red"); }

    /** Получает определенный системой цвет, имеющий значение #FFBC8F8F. */
    static get RosyBrown() { return new Color("RosyBrown"); }

    /** Получает определенный системой цвет, имеющий значение #FF4169E1. */
    static get RoyalBlue() { return new Color("RoyalBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FF8B4513. */
    static get SaddleBrown() { return new Color("SaddleBrown"); }

    /** Получает определенный системой цвет, имеющий значение #FFFA8072. */
    static get Salmon() { return new Color("Salmon"); }

    /** Получает определенный системой цвет, имеющий значение #FFF4A460. */
    static get SandyBrown() { return new Color("SandyBrown"); }

    /** Получает определенный системой цвет, имеющий значение #FF2E8B57. */
    static get SeaGreen() { return new Color("SeaGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF800080. */
    static get Purple() { return new Color("Purple"); }

    /** Получает определенный системой цвет, имеющий значение #FF7CFC00. */
    static get LawnGreen() { return new Color("LawnGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FFE0FFFF. */
    static get LightCyan() { return new Color("LightCyan"); }

    /** Получает определенный системой цвет, имеющий значение #FFE6E6FA. */
    static get Lavender() { return new Color("Lavender"); }

    /** Получает определенный системой цвет, имеющий значение #FFBDB76B. */
    static get DarkKhaki() { return new Color("DarkKhaki"); }

    /** Получает определенный системой цвет, имеющий значение #FF006400. */
    static get DarkGreen() { return new Color("DarkGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FFA9A9A9. */
    static get DarkGray() { return new Color("DarkGray"); }

    /** Получает определенный системой цвет, имеющий значение #FFB8860B. */
    static get DarkGoldenrod() { return new Color("DarkGoldenrod"); }

    /** Получает определенный системой цвет, имеющий значение #FF008B8B. */
    static get DarkCyan() { return new Color("DarkCyan"); }

    /** Получает определенный системой цвет, имеющий значение #FF00008B. */
    static get DarkBlue() { return new Color("DarkBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FF00FFFF. */
    static get Cyan() { return new Color("Cyan"); }

    /** Получает определенный системой цвет, имеющий значение #FFDC143C. */
    static get Crimson() { return new Color("Crimson"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFF8DC. */
    static get Cornsilk() { return new Color("Cornsilk"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFF0F5. */
    static get LavenderBlush() { return new Color("LavenderBlush"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF7F50. */
    static get Coral() { return new Color("Coral"); }

    /** Получает определенный системой цвет, имеющий значение #FFD2691E. */
    static get Chocolate() { return new Color("Chocolate"); }

    /** Получает определенный системой цвет, имеющий значение #FF7FFF00. */
    static get Chartreuse() { return new Color("Chartreuse"); }

    /** Получает определенный системой цвет, имеющий значение #FF8B008B. */
    static get DarkMagenta() { return new Color("DarkMagenta"); }

    /** Получает определенный системой цвет, имеющий значение #FF5F9EA0. */
    static get CadetBlue() { return new Color("CadetBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFA52A2A. */
    static get Brown() { return new Color("Brown"); }

    /** Получает определенный системой цвет, имеющий значение #FF8A2BE2. */
    static get BlueViolet() { return new Color("BlueViolet"); }

    /** Получает определенный системой цвет, имеющий значение #FF0000FF. */
    static get Blue() { return new Color("Blue"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFEBCD. */
    static get BlanchedAlmond() { return new Color("BlanchedAlmond"); }

    /** Получает определенный системой цвет, имеющий значение #FF000000. */
    static get Black() { return new Color("Black"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFE4C4. */
    static get Bisque() { return new Color("Bisque"); }

    /** Получает определенный системой цвет, имеющий значение #FFF5F5DC. */
    static get Beige() { return new Color("Beige"); }

    /** Получает определенный системой цвет, имеющий значение #FFF0FFFF. */
    static get Azure() { return new Color("Azure"); }

    /** Получает определенный системой цвет, имеющий значение #FF7FFFD4. */
    static get Aquamarine() { return new Color("Aquamarine"); }

    /** Получает определенный системой цвет, имеющий значение #FF00FFFF. */
    static get Aqua() { return new Color("Aqua"); }

    /** Получает определенный системой цвет, имеющий значение #FFFAEBD7. */
    static get AntiqueWhite() { return new Color("AntiqueWhite"); }

    /** Получает определенный системой цвет, имеющий значение #FFF0F8FF. */
    static get AliceBlue() { return new Color("AliceBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFDEB887. */
    static get BurlyWood() { return new Color("BurlyWood"); }

    /** Получает определенный системой цвет, имеющий значение #FF556B2F. */
    static get DarkOliveGreen() { return new Color("DarkOliveGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF6495ED. */
    static get CornflowerBlue() { return new Color("CornflowerBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FF9932CC. */
    static get DarkOrchid() { return new Color("DarkOrchid"); }

    /** Получает определенный системой цвет, имеющий значение #FFF0E68C. */
    static get Khaki() { return new Color("Khaki"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFFF0. */
    static get Ivory() { return new Color("Ivory"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF8C00. */
    static get DarkOrange() { return new Color("DarkOrange"); }

    /** Получает определенный системой цвет, имеющий значение #FF4B0082. */
    static get Indigo() { return new Color("Indigo"); }

    /** Получает определенный системой цвет, имеющий значение #FFCD5C5C. */
    static get IndianRed() { return new Color("IndianRed"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF69B4. */
    static get HotPink() { return new Color("HotPink"); }

    /** Получает определенный системой цвет, имеющий значение #FFF0FFF0. */
    static get Honeydew() { return new Color("Honeydew"); }

    /** Получает определенный системой цвет, имеющий значение #FFADFF2F. */
    static get GreenYellow() { return new Color("GreenYellow"); }

    /** Получает определенный системой цвет, имеющий значение #FF008000. */
    static get Green() { return new Color("Green"); }

    /** Получает определенный системой цвет, имеющий значение #FF808080. */
    static get Gray() { return new Color("Gray"); }

    /** Получает определенный системой цвет, имеющий значение #FFDAA520. */
    static get Goldenrod() { return new Color("Goldenrod"); }

    /** Получает определенный системой цвет, имеющий значение #FFF8F8FF. */
    static get GhostWhite() { return new Color("GhostWhite"); }

    /** Получает определенный системой цвет, имеющий значение #FFDCDCDC. */
    static get Gainsboro() { return new Color("Gainsboro"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF00FF. */
    static get Fuchsia() { return new Color("Fuchsia"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFD700. */
    static get Gold() { return new Color("Gold"); }

    /** Получает определенный системой цвет, имеющий значение #FFFFFAF0. */
    static get FloralWhite() { return new Color("FloralWhite"); }

    /** Получает определенный системой цвет, имеющий значение #FF8B0000. */
    static get DarkRed() { return new Color("DarkRed"); }

    /** Получает определенный системой цвет, имеющий значение #FFE9967A. */
    static get DarkSalmon() { return new Color("DarkSalmon"); }

    /** Получает определенный системой цвет, имеющий значение #FF8FBC8F. */
    static get DarkSeaGreen() { return new Color("DarkSeaGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF228B22. */
    static get ForestGreen() { return new Color("ForestGreen"); }

    /** Получает определенный системой цвет, имеющий значение #FF2F4F4F. */
    static get DarkSlateGray() { return new Color("DarkSlateGray"); }

    /** Получает определенный системой цвет, имеющий значение #FF00CED1. */
    static get DarkTurquoise() { return new Color("DarkTurquoise"); }

    /** Получает определенный системой цвет, имеющий значение #FF483D8B. */
    static get DarkSlateBlue() { return new Color("DarkSlateBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFFF1493. */
    static get DeepPink() { return new Color("DeepPink"); }

    /** Получает определенный системой цвет, имеющий значение #FF00BFFF. */
    static get DeepSkyBlue() { return new Color("DeepSkyBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FF696969. */
    static get DimGray() { return new Color("DimGray"); }

    /** Получает определенный системой цвет, имеющий значение #FF1E90FF. */
    static get DodgerBlue() { return new Color("DodgerBlue"); }

    /** Получает определенный системой цвет, имеющий значение #FFB22222. */
    static get Firebrick() { return new Color("Firebrick"); }

    /** Получает определенный системой цвет, имеющий значение #FF9400D3. */
    static get DarkViolet() { return new Color("DarkViolet"); }

    /**
     * Создает объект "Color" из 32-рязрядного значения RGBA.
     * @param {Number} Rgba 32-рязрядное значение RGBA.
     */
    static From32bit(RgbaColor) {
        return new Color(
            (RgbaColor >> ARGBRedShift  ) & 0xFF,
            (RgbaColor >> ARGBGreenShift) & 0xFF,
            (RgbaColor >> ARGBBlueShift ) & 0xFF,
            Math.round(((RgbaColor >> ARGBAlphaShift) & 0xFF) / 255, 2)
        );
    }

    /**
     * Создает объект "Color" из значения цвета технологии Ole.
     * @param {Number} OleColor Переводимый цвет в формате Ole.
     */
    static FromOle(OleColor) {
        return new Color((OleColor >> Win32RedShift) & 0xFF, (OleColor >> Win32GreenShift) & 0xFF, (OleColor >> Win32BlueShift) & 0xFF);
    }

    /**
     * Создает объект "Color" из значения цвета Windows.
     * @param {Number} Win32Color Переводимый цвет в Windows.
     */
    static FromWin32(Win32Color) {
        return Color.FromOle(Win32Color);
    }

    /**
     * Создает объект "Color" из указанного имени предопределенного цвета.
     * @param {String} Name Строка, которая является именем предопределенного цвета.
     */
    static FromName(Name) {
        return new Color(Name);
    }

    /**
     * Создает объект "Color" из представления цвета Hex.
     * @param {String} HtmlColor 
     */
    static FromHex(HtmlColor) {
        if (!HtmlColor || HtmlColor == null || HtmlColor.Length == 0)
            return undefined;

        // #RRGGBB or #RGB
        if (HtmlColor[0] == '#' && ((HtmlColor.length == 7) || (HtmlColor.length == 4))) {
            
            return (HtmlColor.length == 7)
                ? new Color(Number.parseInt(HtmlColor.substring(1, 3), 16), Number.parseInt(HtmlColor.substring(3, 5), 16), Number.parseInt(HtmlColor.substring(5, 7), 16))
                : new Color(Number.parseInt(HtmlColor[1] + HtmlColor[1], 16), Number.parseInt(HtmlColor[2] + HtmlColor[2], 16), Number.parseInt(HtmlColor[3] + HtmlColor[3], 16));
        }

        return undefined;
    }

    /**
     * Создает объект "Color" из четырех значений компонентов RGBA (Красный, Зеленый, Синий и Прозрачность).
     * @param {Number} Red Красный: { 0 ... 255 }.
     * @param {Number} Green Зелёный: { 0 ... 255 }.
     * @param {Number} Blue Синий: { 0 ... 255 }.
     * @param {Number} Alpha Прозрачность: { 0 ... 1 }.
     */
    static FromRgba(Red, Green, Blue, Alpha = 1) {
        return new Color(Red, Green, Blue, Alpha);
    }

    /**
     * Создает объект "Color" из трёх значений компонентов HSB / HSV (Оттенок, Насыщенность и Яркость).
     * @param {Number} Hue Оттенок: { 0 ... 360 }.
     * @param {Number} Saturation Насыщенность: { 0 ... 1 }.
     * @param {Number} Brightness Яркость: { 0 ... 1 }.
     */
    static FromHsb(Hue, Saturation, Brightness) {
        let C = Brightness * Saturation;
        let X = C * (1 - Math.abs((Hue / 60) % 2 - 1));
        let m = Brightness - C;
        let R = 0, G = 0, B = 0;

        if (Hue >= 0 && Hue < 60)
        {
            R = C;
            G = X;
            B = 0;
        }
        else if (Hue >= 60 && Hue < 120)
        {
            R = X;
            G = C;
            B = 0;
        }
        else if (Hue >= 120 && Hue < 180)
        {
            R = 0;
            G = C;
            B = X;
        }
        else if (Hue >= 180 && Hue < 240)
        {
            R = 0;
            G = X;
            B = C;
        }
        else if (Hue >= 240 && Hue < 300)
        {
            R = X;
            G = 0;
            B = C;
        }
        else if (Hue >= 300 && Hue <= 360)
        {
            R = C;
            G = 0;
            B = X;
        }

        return new Color(Math.round((R + m) * 255), Math.round((G + m) * 255), Math.round((B + m) * 255));
    }

    /**
     * Создает объект "Color" из трёх значений компонентов HSL (Оттенок, Насыщенность и Светлота).
     * @param {Number} Hue Оттенок: { 0 ... 360 }.
     * @param {Number} Saturation Насыщенность: { 0 ... 1 }.
     * @param {Number} Lightness Светлота: { 0 ... 1 }.
     */
    static FromHsla(Hue, Saturation, Lightness, Alpha = 1) {
        function HueToRgba(v1, v2, vH)
        {
            if (vH < 0) vH += 1;
            if (vH > 1) vH -= 1;
            if ((6 * vH) < 1) return (v1 + (v2 - v1) * 6 * vH);
            if ((2 * vH) < 1) return v2;
            if ((3 * vH) < 2) return (v1 + (v2 - v1) * ((2.0 / 3) - vH) * 6);

            return v1;
        }

        let Red = 0, Green = 0, Blue = 0;
        if (Saturation != 0)
        {
            let v1, v2;
            let hue = Hue / 360;

            v2 = (Lightness < 0.5) ? (Lightness * (1 + Saturation)) : ((Lightness + Saturation) - (Lightness * Saturation));
            v1 = 2 * Lightness - v2;

            Red = Math.round((255 * HueToRgba(v1, v2, hue + (1.0 / 3))));
            Green = Math.round((255 * HueToRgba(v1, v2, hue)));
            Blue = Math.round((255 * HueToRgba(v1, v2, hue - (1.0 / 3))));
        }
        else { Red = Green = Blue = (Lightness * 255); }

        return new Color(Red, Green, Blue, Alpha);
    }

    /**
     * Создает объект "Color" из трёх значений компонентов HWB (Оттенок, Белизна и Чернота).
     * @param {Number} H Оттенок: { 0 ... 360 }
     * @param {Number} W Белизна: { 0 ... 1 }
     * @param {Number} B Чернота: { 0 ... 1 }
     */
    static FromHwb(H, W, B) {
        let h = H / 360, wh = W, bl = B;
        const ratio = wh + bl;
        let f;

        // Wh + bl cant be > 1
        if (ratio > 1) {
            wh /= ratio;
            bl /= ratio;
        }

        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;

        if ((i & 0x01) !== 0) {
            f = 1 - f;
        }

        const n = wh + f * (v - wh); // Linear interpolation

        let Red = 0, Green = 0, Blue = 0;
        /* eslint-disable max-statements-per-line,no-multi-spaces */
        switch (i) {
            default:
            case 6:
            case 0: Red = v;  Green = n;  Blue = wh; break;
            case 1: Red = n;  Green = v;  Blue = wh; break;
            case 2: Red = wh; Green = v;  Blue = n; break;
            case 3: Red = wh; Green = n;  Blue = v; break;
            case 4: Red = n;  Green = wh; Blue = v; break;
            case 5: Red = v;  Green = wh; Blue = n; break;
        }
        /* eslint-enable max-statements-per-line,no-multi-spaces */

        return new Color(Math.round(Red * 255), Math.round(Green * 255), Math.round(Blue * 255));
    }

    /**
     * Создает объект "Color" из трёх значений компонентов CMYK (Голубой, Пурпурный, Жёлтый и Ключ).
     * @param {Number} Cyan Голубой: { 0 ... 1 }
     * @param {Number} Magenta Пурпурный: { 0 ... 1 }
     * @param {Number} Yellow Жёлтый: { 0 ... 1 }
     * @param {Number} Key Ключ: { 0 ... 1 }
     */
    static FromCmyk(Cyan, Magenta, Yellow, Key) {
        return new Color(Math.round((255 * (1 - Cyan) * (1 - Key))), Math.round((255 * (1 - Magenta) * (1 - Key))), Math.round((255 * (1 - Yellow) * (1 - Key))));
    }

    /**
     * Создает объект "Color" из трёх значений компонентов XYZ.
     * @param {Number} X { 0 ... 95 }
     * @param {Number} Y { 0 ... 100 }
     * @param {Number} Z { 0 ... 109 }
     */
    static FromXYZ(X, Y, Z) {
        X = X / 100;
        Y = Y / 100;
        Z = Z / 100;
        let Red = 0, Green = 0, Blue = 0;
    
        Red = (X * 3.2406) + (Y * -1.5372) + (Z * -0.4986);
        Green = (X * -0.9689) + (Y * 1.8758) + (Z * 0.0415);
        Blue = (X * 0.0557) + (Y * -0.2040) + (Z * 1.0570);
    
        // Assume sRGB
        Red = Red > 0.0031308
            ? ((1.055 * (Red ** (1.0 / 2.4))) - 0.055)
            : Red * 12.92;
    
        Green = Green > 0.0031308
            ? ((1.055 * (Green ** (1.0 / 2.4))) - 0.055)
            : Green * 12.92;
    
        Blue = Blue > 0.0031308
            ? ((1.055 * (Blue ** (1.0 / 2.4))) - 0.055)
            : Blue * 12.92;
    
        Red = Math.min(Math.max(0, Red), 1);
        Green = Math.min(Math.max(0, Green), 1);
        Blue = Math.min(Math.max(0, Blue), 1);
    
        return new Color(Math.round(Red * 255), Math.round(Green * 255), Math.round(Blue * 255));
    }

    /**
     * Создает объект "Color" из трёх значений компонентов LAB.
     * @param {Number} L { 0 ... 100 }
     * @param {Number} A { -128 ... 127}
     * @param {Number} B { -128 ... 127}
     */
    static FromLab(L, A, B) {
        let Y = (L + 16) / 116;
        let X = A / 500 + Y;
        let Z = Y - B / 200;
    
        const y2 = Y ** 3;
        const x2 = X ** 3;
        const z2 = Z ** 3;
        Y = y2 > 0.008856 ? y2 : (Y - 16 / 116) / 7.787;
        X = x2 > 0.008856 ? x2 : (X - 16 / 116) / 7.787;
        Z = z2 > 0.008856 ? z2 : (Z - 16 / 116) / 7.787;
    
        X *= 95.047;
        Y *= 100;
        Z *= 108.883;
        
        return Color.FromXYZ(Math.round(X), Math.round(Y), Math.round(Z));
    }

    /**
     * Создает объект "Color" из трёх значений компонентов Apple.
     * @param {Number} AppleR { 0 ... 65535 }
     * @param {Number} AppleG { 0 ... 65535 }
     * @param {Number} AppleB { 0 ... 65535 }
     */
    static FromApple(AppleR, AppleG, AppleB) {
        return new Color((AppleR / 65535) * 255, (AppleG / 65535) * 255, (AppleB / 65535) * 255);
    }

    /**
     * 
     * @param {Number} Ansi16Color { 30 ... 97 }
     */
    static FromAnsi16(Ansi16Color) {
        let color = Ansi16Color % 10;

        // Handle greyscale
        if (color === 0 || color === 7) {
            if (Ansi16Color > 50) {
                color += 3.5;
            }

            color = color / 10.5 * 255;

            return [color, color, color];
        }

        const mult = (~~(Ansi16Color > 50) + 1) * 0.5;
        const Red = ((color & 1) * mult) * 255;
        const Green = (((color >> 1) & 1) * mult) * 255;
        const Blue = (((color >> 2) & 1) * mult) * 255;

        return new Color(Red, Green, Blue);
    }

    /**
     * 
     * @param {Number} Ansi256Color { 16 ... 231 }
     */
    static FromAnsi256(Ansi256Color) {
        // Handle greyscale
        if (Ansi256Color >= 232) {
            const c = (Ansi256Color - 232) * 10 + 8;
            return [c, c, c];
        }

        Ansi256Color -= 16;

        let rem;
        const Red = Math.floor(Ansi256Color / 36) / 5 * 255;
        const Green = Math.floor((rem = Ansi256Color % 36) / 6) / 5 * 255;
        const Blue = (rem % 6) / 5 * 255;

        return new Color(Red, Green, Blue);
    }

    /**
     * Преобразует объект "Color" в 32-рязрядное значение RGBA.
     */
    To32bit() {
        return (this.R << ARGBRedShift | this.G << ARGBGreenShift | this.B << ARGBBlueShift | Math.round(this.A * 255) << ARGBAlphaShift) & 0xFFFFFFFF;
    }

    /**
     * Преобразует объект "Color" в Ole.
     */
    ToOle() {
        return this.ToWin32(this);
    }
    
    /**
     * Преобразует объект "Color" в значение цвета Windows.
     */
    ToWin32() {
        return this.R << Win32RedShift | this.G << Win32GreenShift | this.B << Win32BlueShift;
    }

    /**
     * Преобразует объект "Color" в Hex.
     */
    ToHex() {
        const integer = ((Math.round(this.R) & 0xFF) << 16) + ((Math.round(this.G) & 0xFF) << 8) + (Math.round(this.B) & 0xFF);

        const string = integer.toString(16).toUpperCase();
        return "#" + "000000".substring(string.length) + string;
    }

    /**
     * Преобразует объект "Color" в цветовое пространство RGBA.
     */
    ToRgba() {
        return { R: this.R, G: this.G, B: this.B, A: this.A }
    }

    /**
     * Преобразует объект "Color" в цветовое пространство HSB.
     */
    ToHsb(Round = true) {
        let rdif, gdif, bdif, h, s;

        const r = this.R / 255;
        const g = this.G / 255;
        const b = this.B / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = function (c) {
            return (v - c) / 6 / diff + 1 / 2;
        };

        if (diff === 0) {
            h = 0;
            s = 0;
        } else {
            s = diff / v;
            rdif = diffc(r);
            gdif = diffc(g);
            bdif = diffc(b);

                 if (r === v) { h = bdif - gdif; }
            else if (g === v) { h = (1 / 3) + rdif - bdif; }
            else if (b === v) { h = (2 / 3) + gdif - rdif; }

                 if (h < 0) { h += 1; }
            else if (h > 1) { h -= 1; }
        }

        return (Round)
            ? { H: Math.round(h * 360), S: Math.round(s * 100) / 100, B: Math.round(v * 100) / 100 }
            : { H: h * 360, S: s, B: v };
    }

    /**
     * Преобразует объект "Color" в цветовое пространство HSLA.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToHsla(Round = true) {
        const r = this.R / 255;
        const g = this.G / 255;
        const b = this.B / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h, s;

             if (max === min)    { h = 0; }
        else if (r === max) { h = (g - b) / delta; }
        else if (g === max) { h = 2 + (b - r) / delta; }
        else if (b === max) { h = 4 + (r - g) / delta; }

        h = Math.min(h * 60, 360);
        if (h < 0) { h += 360; }

        const l = (min + max) / 2;

             if (max === min) { s = 0; }
        else if (l <= 0.5) { s = delta / (max + min); }
        else { s = delta / (2 - max - min); }

        return (Round)
            ? { H: Math.round(h), S: Math.round(s * 100) / 100, L: Math.round(l * 100) / 100, A: this.A }
            : { H: h, S: s, L: l, A: this.A };
    }

    /**
     * Преобразует объект "Color" в цветовое пространство HWB.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToHwb(Round = true) {
        let r = this.R, g = this.G, b = this.B;
        const h = this.ToHsla().H;
        const w = 1 / 255 * Math.min(r, Math.min(g, b));

        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

        return (Round)
            ? { H: Math.round(h), W : Math.round(w * 100) / 100, B: Math.round(b * 100) / 100 }
            : { H: h, W: w, B: b };
    }

    /**
     * Преобразует объект "Color" в цветовое пространство CMYK.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToCmyk(Round = true) {
        let r = this.R / 255, g = this.G / 255, b = this.B / 255;

        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;

        return (Round)
            ? { C: Math.round(c * 100) / 100, M: Math.round(m * 100) / 100, Y: Math.round(y * 100) / 100, K: Math.round(k * 100) / 100 }
            : { C: c, M: m, Y: y, K: k };
    }

    /**
     * Преобразует объект "Color" в цветовое пространство XYZ.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToXYZ(Round = true) {
        let r = this.R / 255, g = this.G / 255, b = this.B / 255;

        // Assume sRGB
        r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
        g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
        b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

        const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
        const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
        const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

        return (Round)
            ? { X: Math.round(x * 100), Y: Math.round(y * 100), Z: Math.round(z * 100) }
            : { X: x * 100, Y: y * 100, Z: z * 100 };
    }

    /**
     * Преобразует объект "Color" в цветовое пространство LAB.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToLab(Round = true) {
        const _color = this.ToXYZ();
        let x = _color.X, y = _color.Y, z = _color.Z;

        x /= 95.047;
        y /= 100;
        z /= 108.883;

        x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
        y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
        z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

        const l = (116 * y) - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);

        return (Round)
            ? { L: Math.round(l), A: Math.round(a), B: Math.round(b) }
            : { L: l, A: a, B: b };
    }

    /**
     * Преобразует объект "Color" в Apple.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToApple() {
        return {
            appleR: (this.R / 255) * 65535,
            appleG: (this.G / 255) * 65535,
            appleB: (this.B / 255) * 65535
        };
    }

    /**
     * Преобразует объект "Color" в Ansi16.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToAnsi16(Round = true) {
        const r = this.R, g = this.G, b = this.B;
        let value = this.ToHsb(false).B * 100; // Hsv -> ansi16 optimization

        value = Math.round(value / 50);
        
        if (value === 0) { return 30; }
        
        let ansi = 30 + ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255));

        if (value === 2) { ansi += 60; }

        return ansi;
    }

    /**
     * Преобразует объект "Color" в Ansi256.
     * @param {Boolean} Round Значение указывающее, будет ли округляться результат.
     */
    ToAnsi256() {
        let r = this.R, g = this.G, b = this.B;

        // We use the extended greyscale palette here, with the exception of
        // black and white. normal palette only has 4 greyscale shades.
        if (r === g && g === b) {
            if (r < 8) { return 16; }
            if (r > 248) { return 231; }

            return Math.round(((r - 8) / 247) * 24) + 232;
        }

        const ansi = 16 + (36 * Math.round(r / 255 * 5)) + (6 * Math.round(g / 255 * 5)) + Math.round(b / 255 * 5);

        return ansi;
    }
    
    /**
     * Получает значение, указывающее, является ли объект "Color" именованным цветом.
     */
    get IsNamedColor() {
        return KnownColor.IsKnownColor(this.Name);
    }

    /**
     * Возвращает значение, показывающее, является ли объект "Color" системным цветом.
     * Системным является цвет, который используется в элементе отображения Windows.
     */
    get IsSystemColor() {
        return KnownColor.IsSystemColor(this.Name);
    }

    /**
     * Преобразует данные в объект Json.
     * @param {String} Model Цветовая модель.
     */
    toObject(Model = "rgba") {
        let _percent = (Model.indexOf("%") > -1);
        Model = (_percent) ? Model.replace(" ", "").replace("%", "") : Model.replace(" ", "");

        switch (Model)
        {
            case "32bit":
                return { value: this.To32bit() };

            case "ole":
                return { value: this.ToOle() };

            case "win32":
                return { value: this.ToWin32() };

            case "name":
                return { value: (this.IsNamedColor) ? this.Name : this.ToHex() };

            case "hex":
                return { value: this.ToHex() };

            case "rgb":
                return (_percent)
                    ? { R: Math.round((this.R / 255) * 100), G: Math.round((this.G / 255) * 100), B: Math.round((this.B / 255) * 100) }
                    : { R: this.R, G: this.G, B: this.B };

            case "rgba":
                return (_percent)
                    ? { R: Math.round((this.R / 255) * 100), G: Math.round((this.G / 255) * 100), B: Math.round((this.B / 255) * 100), A: this.A }
                    : { R: this.R, G: this.G, B: this.B, A: this.A };

            case "hsb":
                return (_percent)
                    ? { H: this.ToHsb().H, S: this.ToHsb().S * 100, B: this.ToHsb().B * 100 }
                    : { H: this.ToHsb().H, S: this.ToHsb().S, B: this.ToHsb().B };

            case "hsl":
                return (_percent)
                    ? { H: this.ToHsla().H, S: this.ToHsla().S * 100, L: this.ToHsla().L * 100 }
                    : { H: this.ToHsla().H, S: this.ToHsla().S, L: this.ToHsla().L };

            case "hsla":
                return (_percent)
                    ? { H: this.ToHsla().H, S: this.ToHsla().S * 100, L: this.ToHsla().L * 100, A: this.ToHsla().A }
                    : { H: this.ToHsla().H, S: this.ToHsla().S, L: this.ToHsla().L, A: this.ToHsla().A };

            case "hwb":
                return (_percent)
                    ? { H: Math.round(this.ToHwb().H), W: Math.round(this.ToHwb().W * 100), B: Math.round(this.ToHwb().B * 100) }
                    : { H: this.ToHwb().H, W: this.ToHwb().W, B: this.ToHwb().B };

            case "cmyk":
                return (_percent)
                    ? { C: Math.round(this.ToCmyk().C), M: Math.round(this.ToCmyk().M * 100), Y: Math.round(this.ToCmyk().Y * 100), K: Math.round(this.ToCmyk().K * 100) }
                    : { C: this.ToCmyk().C, M: this.ToCmyk().M, Y: this.ToCmyk().Y, K: this.ToCmyk().K };

            case "xyz":
                return { X: Math.round(this.ToXYZ().X), Y: Math.round(this.ToXYZ().Y), Z: Math.round(this.ToXYZ().Z) };

            case "lab":
                return { L: Math.round(this.ToLab().L), A: Math.round(this.ToLab().A), B: Math.round(this.ToLab().B) };

            case "apple":
                return { appleR: Math.round(this.ToApple().appleR), appleG: Math.round(this.ToApple().appleG), appleB: Math.round(this.ToApple().appleB) };

            case "ansi16":
                return { value: this.ToAnsi16() };

            case "ansi256":
                return { value: this.ToAnsi256() };

            default:
                return this.toObject("rgba");
        }
    }

    /**
     * Преобразует данные в массив.
     * @param {String} Model Цветовая модель.
     */
    toArray(Model = "rgba") {
        let _percent = (Model.indexOf("%") > -1);
        Model = (_percent) ? Model.replace(" ", "").replace("%", "") : Model.replace(" ", "");

        switch (Model.toLowerCase())
        {
            case "32bit":
                return [ this.To32bit() ];

            case "ole":
                return [ this.ToOle() ];

            case "win32":
                return [ this.ToWin32() ];

            case "name":
                return [ (this.IsNamedColor) ? this.Name : this.ToHex() ];

            case "hex":
                return [ this.ToHex() ];

            case "rgb":
                return (_percent)
                    ? [ Math.round((this.R / 255) * 100), Math.round((this.G / 255) * 100), Math.round((this.B / 255) * 100) ]
                    : [ this.R, this.G, this.B ];

            case "rgba":
                return (_percent)
                    ? [ Math.round((this.R / 255) * 100), Math.round((this.G / 255) * 100), Math.round((this.B / 255) * 100), this.A ]
                    : [ this.R, this.G, this.B, this.A ];

            case "hsb":
                return (_percent)
                    ? [ this.ToHsb().H, this.ToHsb().S * 100, this.ToHsb().B * 100 ]
                    : [ this.ToHsb().H, this.ToHsb().S, this.ToHsb().B ];

            case "hsl":
                return (_percent)
                    ? [ this.ToHsla().H, this.ToHsla().S * 100, this.ToHsla().L * 100 ]
                    : [ this.ToHsla().H, this.ToHsla().S, this.ToHsla().L ];

            case "hsla":
                return (_percent)
                    ? [ this.ToHsla().H, this.ToHsla().S * 100, this.ToHsla().L * 100, this.ToHsla().A ]
                    : [ this.ToHsla().H, this.ToHsla().S, this.ToHsla().L, this.ToHsla().A ];

            case "hwb":
                return (_percent)
                    ? [ Math.round(this.ToHwb().H), Math.round(this.ToHwb().W * 100), Math.round(this.ToHwb().B * 100) ]
                    : [ this.ToHwb().H, this.ToHwb().W, this.ToHwb().B ];

            case "cmyk":
                return (_percent)
                    ? [ Math.round(this.ToCmyk().C), Math.round(this.ToCmyk().M * 100), Math.round(this.ToCmyk().Y * 100), Math.round(this.ToCmyk().K * 100) ]
                    : [ this.ToCmyk().C, this.ToCmyk().M, this.ToCmyk().Y, this.ToCmyk().K ];

            case "xyz":
                return [ Math.round(this.ToXYZ().X), Math.round(this.ToXYZ().Y), Math.round(this.ToXYZ().Z) ];

            case "lab":
                return [ Math.round(this.ToLab().L), Math.round(this.ToLab().A), Math.round(this.ToLab().B) ];

            case "apple":
                return [ Math.round(this.ToApple().appleR), Math.round(this.ToApple().appleG), Math.round(this.ToApple().appleB) ];

            case "ansi16":
                return [ this.ToAnsi16() ];

            case "ansi256":
                return [ this.ToAnsi256() ];

            default:
                return this.toArray("rgba");
        }
    }

    /**
     * Преобразует данные в стройчное представление.
     * @param {String} Model Цветовая модель.
     * @param {Boolean} CSS Значение, указывающее будет ли отображаться CSS код.
     */
    toString(Model = "rgba", CSS = true) {
        let _percent = (Model.indexOf("%") > -1);
        Model = (_percent) ? Model.replace(" ", "").replace("%", "") : Model.replace(" ", "");

        switch (Model.toLowerCase())
        {
            case "32bit":
                return this.To32bit().toString();

            case "ole":
                return this.ToOle().toString();

            case "win32":
                return this.ToWin32().toString();

            case "name":
                return (this.IsNamedColor) ? this.Name : this.ToHex();

            case "hex":
                return this.ToHex();

            case "rgb":
                if (_percent) {
                    return (CSS)
                        ? `rgb(${Math.round((this.R / 255) * 100)}%, ${Math.round((this.G / 255) * 100)}%, ${Math.round((this.B / 255) * 100)}%)`
                        : `${Math.round((this.R / 255) * 100)}%, ${Math.round((this.G / 255) * 100)}%, ${Math.round((this.B / 255) * 100)}%`;
                }
                else {
                    return (CSS)
                    ? `rgb(${this.R}, ${this.G}, ${this.B})`
                    : `${this.R}, ${this.G}, ${this.B}`;
                }

            case "rgba":
                if (_percent) {
                    return (CSS)
                        ? `rgba(${Math.round((this.R / 255) * 100)}%, ${Math.round((this.G / 255) * 100)}%, ${Math.round((this.B / 255) * 100)}%, ${this.A})`
                        : `${Math.round((this.R / 255) * 100)}%, ${Math.round((this.G / 255) * 100)}%, ${Math.round((this.B / 255) * 100)}%, ${this.A}`;
                }
                else {
                    return (CSS)
                        ? `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`
                        : `${this.R}, ${this.G}, ${this.B}, ${this.A}`;
                }

            case "hsb":
                return (_percent)
                    ? `${this.ToHsb().H}, ${this.ToHsb().S * 100}%, ${this.ToHsb().B * 100}%`
                    : `${this.ToHsb().H}, ${this.ToHsb().S}, ${this.ToHsb().B}`;

            case "hsl":
                return (CSS)
                    ? `hsl(${this.ToHsla().H}, ${this.ToHsla().S * 100}%, ${this.ToHsla().L * 100}%)`
                    : `${this.ToHsla().H}, ${this.ToHsla().S}, ${this.ToHsla().L * 100}`;

            case "hsla":
                return (CSS)
                    ? `hsla(${this.ToHsla().H}, ${this.ToHsla().S * 100}%, ${this.ToHsla().L * 100}%, ${this.ToHsla().A})`
                    : `${this.ToHsla().H}, ${this.ToHsla().S}, ${this.ToHsla().L}, ${this.ToHsla().A}`;

            case "hwb":
                return (_percent)
                    ? `${Math.round(this.ToHwb().H)}, ${Math.round(this.ToHwb().W * 100)}%, ${Math.round(this.ToHwb().B * 100)}%`
                    : `${this.ToHwb().H}, ${this.ToHwb().W}, ${this.ToHwb().B}`;

            case "cmyk":
                return (_percent)
                    ? `${Math.round(this.ToCmyk().C * 100)}%, ${Math.round(this.ToCmyk().M * 100)}%, ${Math.round(this.ToCmyk().Y * 100)}%, ${Math.round(this.ToCmyk().K * 100)}%`
                    : `${this.ToCmyk().C}, ${this.ToCmyk().M}, ${this.ToCmyk().Y}, ${this.ToCmyk().K}`;

            case "xyz":
                    return `${Math.round(this.ToXYZ().X)}, ${Math.round(this.ToXYZ().Y)}, ${Math.round(this.ToXYZ().Z)}`;

            case "lab":
                    return `${Math.round(this.ToLab().L)}, ${Math.round(this.ToLab().A)}, ${Math.round(this.ToLab().B)}`;

            case "apple":
                    return `${Math.round(this.ToApple().appleR)}, ${Math.round(this.ToApple().appleB)}, ${Math.round(this.ToApple().appleG)}`;

            case "ansi16":
                return this.ToAnsi16().toString();

            case "ansi256":
                return this.ToAnsi256().toString();

            default:
                return this.toString("rgba");
        }
    }
}

module.exports = Color;