'use struct';
const Color = require('./color');

/**
 * Каждое свойство является объектом "Color", который представляет собой цвет элемента изображения Windows.
 */
class SystemColors {
    
        /** Получает объект "Color", являющийся цветом границы активного окна. */
        static get ActiveBorder() { return new Color("ActiveBorder"); }

        /** Возвращает объект "Color", являющийся цветом фона клиентской области окна. */
        static get Window() { return new Color("Window"); }

        /** Возвращает объект "Color", являющийся цветом фона полосы прокрутки. */
        static get ScrollBar() { return new Color("ScrollBar"); }

        /** Получает объект "Color", являющийся цветом текста меню. */
        static get MenuText() { return new Color("MenuText"); }

        /** Возвращает объект "Color", являющийся цветом, используемым для выделения пунктов меню, когда меню отображается как плоское меню. */
        static get MenuHighlight() { return new Color("MenuHighlight"); }

        /** Возвращает объект "Color", являющийся цветом фона строки меню. */
        static get MenuBar() { return new Color("MenuBar"); }

        /** Получает объект "Color", являющийся цветом фона меню. */
        static get Menu() { return new Color("Menu"); }

        /** Возвращает объект "Color", являющийся цветом текста всплывающей подсказки. */
        static get InfoText() { return new Color("InfoText"); }

        /** Возвращает объект "Color", являющийся цветом фона всплывающей подсказки. */
        static get Info() { return new Color("Info"); }

        /** Возвращает объект "Color", являющийся цветом текста в строке заголовка неактивного окна. */
        static get InactiveCaptionText() { return new Color("InactiveCaptionText"); }

        /** Возвращает объект "Color", являющийся цветом фона строки заголовка неактивного окна. */
        static get InactiveCaption() { return new Color("InactiveCaption"); }

        /** Получает объект "Color", являющийся цветом границы неактивного окна. */
        static get InactiveBorder() { return new Color("InactiveBorder"); }

        /** Возвращает объект "Color", которая является цветом, используемым для обозначения отслеженного элемента. */
        static get HotTrack() { return new Color("HotTrack"); }

        /** Получает объект "Color", являющийся цветом текста выбранных элементов. */
        static get HighlightText() { return new Color("HighlightText"); }

        /** Возвращает объект "Color", являющийся цветом фона выбранных элементов. */
        static get Highlight() { return new Color("Highlight"); }

        /** Получает объект "Color", являющийся цветом рамки окна. */
        static get WindowFrame() { return new Color("WindowFrame"); }

        /** Возвращает объект "Color", являющийся цветом серого текста. */
        static get GrayText() { return new Color("GrayText"); }

        /** Возвращает объект "Color", являющийся самым светлым цветом градиента цвета в строке заголовка активного окна. */
        static get GradientActiveCaption() { return new Color("GradientActiveCaption"); }

        /** Получает объект "Color", являющийся цветом рабочего стола. */
        static get Desktop() { return new Color("Desktop"); }

        /** Возвращает объект "Color", являющийся цветом текста в трехмерном элементе. */
        static get ControlText() { return new Color("ControlText"); }

        /** Возвращает объект "Color", являющийся цветом выделения трехмерного элемента. */
        static get ControlLightLight() { return new Color("ControlLightLight"); }

        /** Возвращает объект "Color", являющийся светлым цветом трехмерного элемента. */
        static get ControlLight() { return new Color("ControlLight"); }

        /** Возвращает объект "Color", являющийся темным цветом тени трехмерного элемента. */
        static get ControlDarkDark() { return new Color("ControlDarkDark"); }

        /** Возвращает объект "Color", являющийся цветом тени трехмерного элемента. */
        static get ControlDark() { return new Color("ControlDark"); }

        /** Возвращает объект "Color", являющийся цветом лицевой стороны трехмерного элемента. */
        static get Control() { return new Color("Control"); }

        /** Возвращает объект "Color", являющийся цветом тени трехмерного элемента. */
        static get ButtonShadow() { return new Color("ButtonShadow"); }

        /** Возвращает объект "Color", являющийся цветом выделения трехмерного элемента. */
        static get ButtonHighlight() { return new Color("ButtonHighlight"); }

        /** Возвращает объект "Color", являющийся цветом лицевой стороны трехмерного элемента. */
        static get ButtonFace() { return new Color("ButtonFace"); }

        /** Получает объект "Color", являющийся цветом рабочей области приложения. */
        static get AppWorkspace() { return new Color("AppWorkspace"); }

        /** Получает объект "Color", являющийся цветом текста заголовка активного окна. */
        static get ActiveCaptionText() { return new Color("ActiveCaptionText"); }

        /** Возвращает объект "Color", являющийся цветом фона строки заголовка активного окна. */
        static get ActiveCaption() { return new Color("ActiveCaption"); }

        /** Возвращает объект "Color", являющийся самым светлым цветом градиента цвета в строке заголовка неактивного окна. */
        static get GradientInactiveCaption() { return new Color("GradientInactiveCaption"); }

        /** Получает объект "Color", являющийся цветом текста в клиентской области окна. */
        static get WindowText() { return new Color("WindowText"); }
}

module.exports = SystemColors;