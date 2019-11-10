'use struct';

KnownColor = {
    ActiveBorder: {
        id: 1,
        description: "Определенный системой цвет, являющийся цветом границы активного окна.",
        r: 180, g: 180, b: 180
    },

    ActiveCaption: {
        id: 2,
        description: "Определенный системой цвет, являющийся цветом фона строки заголовка активного окна.",
        r: 153, g: 180, b: 209
    },

    ActiveCaptionText: {
        id: 3,
        description: "Определенный системой цвет текста строки заголовка активного окна.",
        r: 0,   g: 0,   b: 0
    },

    AppWorkspace: {
        id: 4,
        description: "Определенный системой цвет, являющийся цветом рабочей области приложения. Рабочая область приложения — это область в многодокументном представлении, не занятая документами.",
        r: 171, g: 171, b: 171
    },

    Control: {
        id: 5,
        description: "Определенный системой цвет лицевой стороны трехмерного элемента.",
        r: 240, g: 240, b: 240
    },

    ControlDark: {
        id: 6,
        description: "Определенный системой цвет, являющийся цветом тени трехмерного элемента. Цвет тени применяется к тем участкам трехмерного элемента, которые обращены не к источнику света, а от него.",
        r: 160, g: 160, b: 160
    },

    ControlDarkDark: {
        id: 7,
        description: "Определенный системой цвет, являющийся темным цветом тени трехмерного элемента. Темный цвет тени применяется к тем участкам трехмерного элемента, которые имеют самый темный цвет.",
        r: 105, g: 105, b: 105
    },

    ControlLight: {
        id: 8,
        description: "Определенный системой цвет, являющийся светлым цветом трехмерного элемента. Светлый цвет применяется к участкам трехмерного элемента, которые обращены к источнику света.",
        r: 227, g: 227, b: 227
    },

    ControlLightLight: {
        id: 9,
        description: "Определенный системой цвет, являющийся цветом выделения трехмерного элемента. Цвет выделения применяется к тем участкам трехмерного элемента, которые имеют самый светлый цвет.",
        r: 255, g: 255, b: 255
    },

    ControlText: {
        id: 10,
        description: "Определенный системой цвет, являющийся цветом текста трехмерного элемента.",
        r: 0,   g: 0,   b: 0
    },

    Desktop: {
        id: 11,
        description: "Определенный системой цвет, являющийся цветом рабочего стола.",
        r: 0,   g: 0,   b: 0
    },

    GrayText: {
        id: 12,
        description: "Определенный системой цвет, являющийся цветом серого текста.Неактивные элементы списка изображаются серым текстом.",
        r: 109, g: 109, b: 109
    },

    Highlight: {
        id: 13,
        description: "Определенный системой цвет, представляющий собой цвет фона выбранных элементов. К ним относятся выбранные элементы меню, а также выделенный текст.",
        r: 0,   g: 120, b: 215
    },

    HighlightText: {
        id: 14,
        description: "Определенный системой цвет, являющийся цветом текста выбранных элементов.",
        r: 255, g: 255, b: 255
    },

    HotTrack: {
        id: 15,
        description: "Определенный системой цвет, используемый для обозначения отслеженного элемента. Щелчок отслеженного элемента приводит к его выполнению.",
        r: 0,   g: 102, b: 204
    },

    InactiveBorder: {
        id: 16,
        description: "Определенный системой цвет, являющийся цветом границы неактивного окна.",
        r: 244, g: 247, b: 252
    },

    InactiveCaption: {
        id: 17,
        description: "Определенный системой цвет, являющийся цветом фона строки заголовка неактивного окна.",
        r: 191, g: 205, b: 219
    },

    InactiveCaptionText: {
        id: 18,
        description: "Определенный системой цвет текста строки заголовка неактивного окна.",
        r: 0,   g: 0,   b: 0
    },

    Info: {
        id: 19,
        description: "Определенный системой цвет, представляющий собой цвет фона всплывающей подсказки.",
        r: 255, g: 255, b: 225
    },

    InfoText: {
        id: 20,
        description: "Определенный системой цвет текста всплывающей подсказки.",
        r: 0,   g: 0,   b: 0
    },

    Menu: {
        id: 21,
        description: "Определенный системой цвет, являющийся цветом фона меню.",
        r: 240, g: 240, b: 240
    },

    MenuText: {
        id: 22,
        description: "Определенный системой цвет текста меню.",
        r: 0,   g: 0,   b: 0
    },

    ScrollBar: {
        id: 23,
        description: "Определенный системой цвет, являющийся цветом фона строки прокрутки.",
        r: 200, g: 200, b: 200
    },

    Window: {
        id: 24,
        description: "Определенный системой цвет, являющийся цветом фона в клиентской области окна.",
        r: 255, g: 255, b: 255
    },

    WindowFrame: {
        id: 25,
        description: "Определенный системой цвет рамки окна.",
        r: 100, g: 100, b: 100
    },

    WindowText: {
        id: 26,
        description: "Определенный системой цвет, являющийся цветом текста в клиентской области окна.",
        r: 0,   g: 0,   b: 0
    },

    AliceBlue: {
        id: 28,
        description: "Цвет, определенный системой.",
        r: 240, g: 248, b: 255
    },

    AntiqueWhite: {
        id: 29,
        description: "Цвет, определенный системой.",
        r: 250, g: 235, b: 215
    },

    Aqua: {
        id: 30,
        description: "Цвет, определенный системой.",
        r: 0,   g: 255, b: 255
    },

    Aquamarine: {
        id: 31,
        description: "Цвет, определенный системой.",
        r: 127, g: 255, b: 212
    },

    Azure: {
        id: 32,
        description: "Цвет, определенный системой.",
        r: 240, g: 255, b: 255
    },

    Beige: {
        id: 33,
        description: "Цвет, определенный системой.",
        r: 245, g: 245, b: 220
    },

    Bisque: {
        id: 34,
        description: "Цвет, определенный системой.",
        r: 255, g: 228, b: 196
    },

    Black: {
        id: 35,
        description: "Цвет, определенный системой.",
        r: 0,   g: 0,   b: 0
    },

    BlanchedAlmond: {
        id: 36,
        description: "Цвет, определенный системой.",
        r: 255, g: 235, b: 205
    },

    Blue: {
        id: 37,
        description: "Цвет, определенный системой.",
        r: 0,   g: 0,   b: 255
    },

    BlueViolet: {
        id: 38,
        description: "Цвет, определенный системой.",
        r: 138, g: 43,  b: 226
    },

    Brown: {
        id: 39,
        description: "Цвет, определенный системой.",
        r: 165, g: 42,  b: 42
    },

    BurlyWood: {
        id: 40,
        description: "Цвет, определенный системой.",
        r: 222, g: 184, b: 135
    },

    CadetBlue: {
        id: 41,
        description: "Цвет, определенный системой.",
        r: 95,  g: 158, b: 160
    },

    Chartreuse: {
        id: 42,
        description: "Цвет, определенный системой.",
        r: 127, g: 255, b: 0
    },

    Chocolate: {
        id: 43,
        description: "Цвет, определенный системой.",
        r: 210, g: 105, b: 30
    },

    Coral: {
        id: 44,
        description: "Цвет, определенный системой.",
        r: 255, g: 127, b: 80
    },

    CornflowerBlue: {
        id: 45,
        description: "Цвет, определенный системой.",
        r: 100, g: 149, b: 237
    },

    Cornsilk: {
        id: 46,
        description: "Цвет, определенный системой.",
        r: 255, g: 248, b: 220
    },

    Crimson: {
        id: 47,
        description: "Цвет, определенный системой.",
        r: 220, g: 20,  b: 60
    },

    Cyan: {
        id: 48,
        description: "Цвет, определенный системой.",
        r: 0,   g: 255, b: 255
    },

    DarkBlue: {
        id: 49,
        description: "Цвет, определенный системой.",
        r: 0,   g: 0,   b: 139
    },

    DarkCyan: {
        id: 50,
        description: "Цвет, определенный системой.",
        r: 0,   g: 139, b: 139
    },

    DarkGoldenrod: {
        id: 51,
        description: "Цвет, определенный системой.",
        r: 184, g: 134, b: 11
    },

    DarkGray: {
        id: 52,
        description: "Цвет, определенный системой.",
        r: 169, g: 169, b: 169
    },

    DarkGreen: {
        id: 53,
        description: "Цвет, определенный системой.",
        r: 0,   g: 100, b: 0
    },

    DarkKhaki: {
        id: 54,
        description: "Цвет, определенный системой.",
        r: 189, g: 183, b: 107
    },

    DarkMagenta: {
        id: 55,
        description: "Цвет, определенный системой.",
        r: 139, g: 0,   b: 139
    },

    DarkOliveGreen: {
        id: 56,
        description: "Цвет, определенный системой.",
        r: 85,  g: 107, b: 47
    },

    DarkOrange: {
        id: 57,
        description: "Цвет, определенный системой.",
        r: 255, g: 140, b: 0
    },

    DarkOrchid: {
        id: 58,
        description: "Цвет, определенный системой.",
        r: 153, g: 50,  b: 204
    },

    DarkRed: {
        id: 59,
        description: "Цвет, определенный системой.",
        r: 139, g: 0,   b: 0
    },

    DarkSalmon: {
        id: 60,
        description: "Цвет, определенный системой.",
        r: 233, g: 150, b: 122
    },

    DarkSeaGreen: {
        id: 61,
        description: "Цвет, определенный системой.",
        r: 143, g: 188, b: 139
    },

    DarkSlateBlue: {
        id: 62,
        description: "Цвет, определенный системой.",
        r: 72,  g: 61,  b: 139
    },

    DarkSlateGray: {
        id: 63,
        description: "Цвет, определенный системой.",
        r: 47,  g: 79,  b: 79
    },

    DarkTurquoise: {
        id: 64,
        description: "Цвет, определенный системой.",
        r: 0,   g: 206, b: 209
    },

    DarkViolet: {
        id: 65,
        description: "Цвет, определенный системой.",
        r: 148, g: 0,   b: 211
    },

    DeepPink: {
        id: 66,
        description: "Цвет, определенный системой.",
        r: 255, g: 20,  b: 147
    },

    DeepSkyBlue: {
        id: 67,
        description: "Цвет, определенный системой.",
        r: 0,   g: 191, b: 255
    },

    DimGray: {
        id: 68,
        description: "Цвет, определенный системой.",
        r: 105, g: 105, b: 105
    },

    DodgerBlue: {
        id: 69,
        description: "Цвет, определенный системой.",
        r: 30,  g: 144, b: 255
    },

    Firebrick: {
        id: 70,
        description: "Цвет, определенный системой.",
        r: 178, g: 34,  b: 34
    },

    FloralWhite: {
        id: 71,
        description: "Цвет, определенный системой.",
        r: 255, g: 250, b: 240
    },

    ForestGreen: {
        id: 72,
        description: "Цвет, определенный системой.",
        r: 34,  g: 139, b: 34
    },

    Fuchsia: {
        id: 73,
        description: "Цвет, определенный системой.",
        r: 255, g: 0,   b: 255
    },

    Gainsboro: {
        id: 74,
        description: "Цвет, определенный системой.",
        r: 220, g: 220, b: 220
    },

    GhostWhite: {
        id: 75,
        description: "Цвет, определенный системой.",
        r: 248, g: 248, b: 255
    },

    Gold: {
        id: 76,
        description: "Цвет, определенный системой.",
        r: 255, g: 215, b: 0
    },

    Goldenrod: {
        id: 77,
        description: "Цвет, определенный системой.",
        r: 218, g: 165, b: 32
    },

    Gray: {
        id: 78,
        description: "Цвет, определенный системой.",
        r: 128, g: 128, b: 128
    },

    Green: {
        id: 79,
        description: "Цвет, определенный системой.",
        r: 0,   g: 128, b: 0
    },

    GreenYellow: {
        id: 80,
        description: "Цвет, определенный системой.",
        r: 173, g: 255, b: 47
    },

    Honeydew: {
        id: 81,
        description: "Цвет, определенный системой.",
        r: 240, g: 255, b: 240
    },

    HotPink: {
        id: 82,
        description: "Цвет, определенный системой.",
        r: 255, g: 105, b: 180
    },

    IndianRed: {
        id: 83,
        description: "Цвет, определенный системой.",
        r: 205, g: 92,  b: 92
    },

    Indigo: {
        id: 84,
        description: "Цвет, определенный системой.",
        r: 75,  g: 0,   b: 130
    },

    Ivory: {
        id: 85,
        description: "Цвет, определенный системой.",
        r: 255, g: 255, b: 240
    },

    Khaki: {
        id: 86,
        description: "Цвет, определенный системой.",
        r: 240, g: 230, b: 140
    },

    Lavender: {
        id: 87,
        description: "Цвет, определенный системой.",
        r: 230, g: 230, b: 250
    },

    LavenderBlush: {
        id: 88,
        description: "Цвет, определенный системой.",
        r: 255, g: 240, b: 245
    },

    LawnGreen: {
        id: 89,
        description: "Цвет, определенный системой.",
        r: 124, g: 252, b: 0
    },

    LemonChiffon: {
        id: 90,
        description: "Цвет, определенный системой.",
        r: 255, g: 250, b: 205
    },

    LightBlue: {
        id: 91,
        description: "Цвет, определенный системой.",
        r: 173, g: 216, b: 230
    },

    LightCoral: {
        id: 92,
        description: "Цвет, определенный системой.",
        r: 240, g: 128, b: 128
    },

    LightCyan: {
        id: 93,
        description: "Цвет, определенный системой.",
        r: 224, g: 255, b: 255
    },

    LightGoldenrodYellow: {
        id: 94,
        description: "Цвет, определенный системой.",
        r: 250, g: 250, b: 210
    },

    LightGray: {
        id: 95,
        description: "Цвет, определенный системой.",
        r: 211, g: 211, b: 211
    },

    LightGreen: {
        id: 96,
        description: "Цвет, определенный системой.",
        r: 144, g: 238, b: 144
    },

    LightPink: {
        id: 97,
        description: "Цвет, определенный системой.",
        r: 255, g: 182, b: 193
    },

    LightSalmon: {
        id: 98,
        description: "Цвет, определенный системой.",
        r: 255, g: 160, b: 122
    },

    LightSeaGreen: {
        id: 99,
        description: "Цвет, определенный системой.",
        r: 32,  g: 178, b: 170
    },

    LightSkyBlue: {
        id: 100,
        description: "Цвет, определенный системой.",
        r: 135, g: 206, b: 250
    },

    LightSlateGray: {
        id: 101,
        description: "Цвет, определенный системой.",
        r: 119, g: 136, b: 153
    },

    LightSteelBlue: {
        id: 102,
        description: "Цвет, определенный системой.",
        r: 176, g: 196, b: 222
    },

    LightYellow: {
        id: 103,
        description: "Цвет, определенный системой.",
        r: 255, g: 255, b: 224
    },

    Lime: {
        id: 104,
        description: "Цвет, определенный системой.",
        r: 0,   g: 255, b: 0
    },

    LimeGreen: {
        id: 105,
        description: "Цвет, определенный системой.",
        r: 50,  g: 205, b: 50
    },

    Linen: {
        id: 106,
        description: "Цвет, определенный системой.",
        r: 250, g: 240, b: 230
    },

    Magenta: {
        id: 107,
        description: "Цвет, определенный системой.",
        r: 255, g: 0,   b: 255
    },

    Maroon: {
        id: 108,
        description: "Цвет, определенный системой.",
        r: 128, g: 0,   b: 0
    },

    MediumAquamarine: {
        id: 109,
        description: "Цвет, определенный системой.",
        r: 102, g: 205, b: 170
    },

    MediumBlue: {
        id: 110,
        description: "Цвет, определенный системой.",
        r: 0,   g: 0,   b: 205
    },

    MediumOrchid: {
        id: 111,
        description: "Цвет, определенный системой.",
        r: 186, g: 85,  b: 211
    },

    MediumPurple: {
        id: 112,
        description: "Цвет, определенный системой.",
        r: 147, g: 112, b: 219
    },

    MediumSeaGreen: {
        id: 113,
        description: "Цвет, определенный системой.",
        r: 60,  g: 179, b: 113
    },

    MediumSlateBlue: {
        id: 114,
        description: "Цвет, определенный системой.",
        r: 123, g: 104, b: 238
    },

    MediumSpringGreen: {
        id: 115,
        description: "Цвет, определенный системой.",
        r: 0,   g: 250, b: 154
    },

    MediumTurquoise: {
        id: 116,
        description: "Цвет, определенный системой.",
        r: 72,  g: 209, b: 204
    },

    MediumVioletRed: {
        id: 117,
        description: "Цвет, определенный системой.",
        r: 199, g: 21,  b: 133
    },

    MidnightBlue: {
        id: 118,
        description: "Цвет, определенный системой.",
        r: 25,  g: 25,  b: 112
    },

    MintCream: {
        id: 119,
        description: "Цвет, определенный системой.",
        r: 245, g: 255, b: 250
    },

    MistyRose: {
        id: 120,
        description: "Цвет, определенный системой.",
        r: 255, g: 228, b: 225
    },

    Moccasin: {
        id: 121,
        description: "Цвет, определенный системой.",
        r: 255, g: 228, b: 181
    },

    NavajoWhite: {
        id: 122,
        description: "Цвет, определенный системой.",
        r: 255, g: 222, b: 173
    },

    Navy: {
        id: 123,
        description: "Цвет, определенный системой.",
        r: 0,   g: 0,   b: 128
    },

    OldLace: {
        id: 124,
        description: "Цвет, определенный системой.",
        r: 253, g: 245, b: 230
    },

    Olive: {
        id: 125,
        description: "Цвет, определенный системой.",
        r: 128, g: 128, b: 0
    },

    OliveDrab: {
        id: 126,
        description: "Цвет, определенный системой.",
        r: 107, g: 142, b: 35
        
    },

    Orange: {
        id: 127,
        description: "Цвет, определенный системой.",
        r: 255, g: 165, b: 0
    },

    OrangeRed: {
        id: 128,
        description: "Цвет, определенный системой.",
        r: 255, g: 69,  b: 0
    },

    Orchid: {
        id: 129,
        description: "Цвет, определенный системой.",
        r: 218, g: 112, b: 214
    },

    PaleGoldenrod: {
        id: 130,
        description: "Цвет, определенный системой.",
        r: 238, g: 232, b: 170
    },

    PaleGreen: {
        id: 131,
        description: "Цвет, определенный системой.",
        r: 152, g: 251, b: 152
    },

    PaleTurquoise: {
        id: 132,
        description: "Цвет, определенный системой.",
        r: 175, g: 238, b: 238
    },

    PaleVioletRed: {
        id: 133,
        description: "Цвет, определенный системой.",
        r: 219, g: 112, b: 147
    },

    PapayaWhip: {
        id: 134,
        description: "Цвет, определенный системой.",
        r: 255, g: 239, b: 213
    },

    PeachPuff: {
        id: 135,
        description: "Цвет, определенный системой.",
        r: 255, g: 218, b: 185
    },

    Peru: {
        id: 136,
        description: "Цвет, определенный системой.",
        r: 205, g: 133, b: 63
    },

    Pink: {
        id: 137,
        description: "Цвет, определенный системой.",
        r: 255, g: 192, b: 203
    },

    Plum: {
        id: 138,
        description: "Цвет, определенный системой.",
        r: 221, g: 160, b: 221
    },

    PowderBlue: {
        id: 139,
        description: "Цвет, определенный системой.",
        r: 176, g: 224, b: 230
    },

    Purple: {
        id: 140,
        description: "Цвет, определенный системой.",
        r: 128, g: 0,   b: 128
    },

    Red: {
        id: 141,
        description: "Цвет, определенный системой.",
        r: 255, g: 0,   b: 0
    },

    RosyBrown: {
        id: 142,
        description: "Цвет, определенный системой.",
        r: 188, g: 143, b: 143
    },

    RoyalBlue: {
        id: 143,
        description: "Цвет, определенный системой.",
        r: 65,  g: 105, b: 225
    },

    SaddleBrown: {
        id: 144,
        description: "Цвет, определенный системой.",
        r: 139, g: 69,  b: 19
    },

    Salmon: {
        id: 145,
        description: "Цвет, определенный системой.",
        r: 250, g: 128, b: 114
    },

    SandyBrown: {
        id: 146,
        description: "Цвет, определенный системой.",
        r: 244, g: 164, b: 96
    },

    SeaGreen: {
        id: 147,
        description: "Цвет, определенный системой.",
        r: 46,  g: 139, b: 87
    },

    SeaShell: {
        id: 148,
        description: "Цвет, определенный системой.",
        r: 255, g: 245, b: 238
    },

    Sienna: {
        id: 149,
        description: "Цвет, определенный системой.",
        r: 160, g: 82,  b: 45
    },

    Silver: {
        id: 150,
        description: "Цвет, определенный системой.",
        r: 192, g: 192, b: 192
    },

    SkyBlue: {
        id: 151,
        description: "Цвет, определенный системой.",
        r: 135, g: 206, b: 235
    },

    SlateBlue: {
        id: 152,
        description: "Цвет, определенный системой.",
        r: 106, g: 90,  b: 205
    },

    SlateGray: {
        id: 153,
        description: "Цвет, определенный системой.",
        r: 112, g: 128, b: 144
    },

    Snow: {
        id: 154,
        description: "Цвет, определенный системой.",
        r: 255, g: 250, b: 250
    },

    SpringGreen: {
        id: 155,
        description: "Цвет, определенный системой.",
        r: 0,   g: 255, b: 127
    },

    SteelBlue: {
        id: 156,
        description: "Цвет, определенный системой.",
        r: 70,  g: 130, b: 180
    },

    Tan: {
        id: 157,
        description: "Цвет, определенный системой.",
        r: 210, g: 180, b: 140
    },

    Teal: {
        id: 158,
        description: "Цвет, определенный системой.",
        r: 0,   g: 128, b: 128
    },

    Thistle: {
        id: 159,
        description: "Цвет, определенный системой.",
        r: 216, g: 191, b: 216
    },

    Tomato: {
        id: 160,
        description: "Цвет, определенный системой.",
        r: 255, g: 99,  b: 71
    },

    Turquoise: {
        id: 161,
        description: "Цвет, определенный системой.",
        r: 64,  g: 224, b: 208
    },

    Violet: {
        id: 162,
        description: "Цвет, определенный системой.",
        r: 238, g: 130, b: 238
    },

    Wheat: {
        id: 163,
        description: "Цвет, определенный системой.",
        r: 245, g: 222, b: 179
    },

    White: {
        id: 164,
        description: "Цвет, определенный системой.",
        r: 255, g: 255, b: 255
    },

    WhiteSmoke: {
        id: 165,
        description: "Цвет, определенный системой.",
        r: 245, g: 245, b: 245
    },

    Yellow: {
        id: 166,
        description: "Цвет, определенный системой.",
        r: 255, g: 255, b: 0
    },

    YellowGreen: {
        id: 167,
        description: "Цвет, определенный системой.",
        r: 154, g: 205, b: 50
    },

    ButtonFace: {
        id: 168,
        description: "Определенный системой цвет лицевой стороны трехмерного элемента.",
        r: 240, g: 240, b: 240
    },

    ButtonHighlight: {
        id: 169,
        description: "Определенный системой цвет, являющийся цветом выделения трехмерного элемента.Этот цвет применяется к тем участкам трехмерного элемента, которые обращены к источнику света.",
        r: 255, g: 255, b: 255
    },

    ButtonShadow: {
        id: 170,
        description: "Определенный системой цвет, являющийся цветом тени трехмерного элемента.Этот цвет применяется к тем участкам трехмерного элемента, которые обращены не к источнику света, а от него.",
        r: 160, g: 160, b: 160
    },

    GradientActiveCaption: {
        id: 171,
        description: "Определенный системой цвет, являющийся самым светлым цветом градиента цвета в строке заголовка активного окна.",
        r: 185, g: 209, b: 234
    },

    GradientInactiveCaption: {
        id: 172,
        description: "Определенный системой цвет самого светлого цвета градиента цвета в строке заголовка неактивного окна.",
        r: 215, g: 228, b: 242
    },

    MenuBar: {
        id: 173,
        description: "Определенный системой цвет, представляющий собой цвет фона строки меню.",
        r: 240, g: 240, b: 240
    },

    MenuHighlight: {
        id: 174,
        description: "Определенный системой цвет, являющийся цветом, используемым для выделения пунктов меню, когда меню отображается как плоское меню.",
        r: 0,   g: 120, b: 215
    },

    Search: function() {
        switch (arguments.length) {
            case 1:
                if (typeof arguments[0] === 'string') {
                    for (let i of Object.keys(this))
                        if (arguments[0].toLowerCase() == i.toLowerCase())
                            return { id: this[i].id, name: i, description: this[i].description, r: this[i].r, g: this[i].g, b: this[i].b, };
                }
                else { throw "Входные параметры заданы неверно."; }
                break;
            
            case 3:
                if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && typeof arguments[2] === 'number') {
                    for (let i of Object.keys(this))
                        if (this[i].r == arguments[0] && this[i].g == arguments[1] && this[i].b == arguments[2])
                            if (!this.IsSystemColor(i))
                                return { id: this[i].id, name: i, description: this[i].description, r: this[i].r, g: this[i].g, b: this[i].b, };
                }
                else { throw "Входные параметры заданы неверно."; }
                break;

            default:
                throw "Входные параметры заданы неверно.";
        }

        return "";
    },

    IsKnownColor: function(Name) {
        for (let i of Object.keys(this))
            if (Name.toLowerCase() == i.toLowerCase()) return true;

        return false;
    },

    IsSystemColor: function(Name) {
        for (let i of Object.keys(this))
            if (Name.toLowerCase() == i.toLowerCase())
                if (this[i].id <= 26 || this[i].id > 167)  return true;

        return false;
    }
}

module.exports = KnownColor;