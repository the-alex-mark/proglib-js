# SystemColors
Каждое свойство является объектом [Color](./color.md), который представляет собой цвет элемента изображения Windows.

## Инициализация
```js
const Drawing = require('proglib').Drawing;
const Color = Drawing.Color;
const SystemColors = Drawing.SystemColors;
```

## Свойства
```js
// Получает объект Color, являющийся цветом границы активного окна.
// 
// Возврат:
//    Color
SystemColors.ActiveBorder;

// Возвращает объект Color, являющийся цветом фона клиентской области окна.
// 
// Возврат:
//    Color
SystemColors.Window;

// Возвращает объект Color, являющийся цветом фона полосы прокрутки.
// 
// Возврат:
//    Color
SystemColors.ScrollBar;

// Получает объект Color, являющийся цветом текста меню.
// 
// Возврат:
//    Color
SystemColors.MenuText;

// Возвращает объект Color, являющийся цветом, используемым для выделения пунктов меню, когда меню отображается как плоское меню.
// 
// Возврат:
//    Color
SystemColors.MenuHighlight;

// Возвращает объект Color, являющийся цветом фона строки меню.
// 
// Возврат:
//    Color
SystemColors.MenuBar;

// Получает объект Color, являющийся цветом фона меню.
// 
// Возврат:
//    Color
SystemColors.Menu;

// Возвращает объект Color, являющийся цветом текста всплывающей подсказки.
// 
// Возврат:
//    Color
SystemColors.InfoText;

// Возвращает объект Color, являющийся цветом фона всплывающей подсказки.
// 
// Возврат:
//    Color
SystemColors.Info;

// Возвращает объект Color, являющийся цветом текста в строке заголовка неактивного окна.
// 
// Возврат:
//    Color
SystemColors.InactiveCaptionText;

// Возвращает объект Color, являющийся цветом фона строки заголовка неактивного окна.
// 
// Возврат:
//    Color
SystemColors.InactiveCaption;

// Получает объект Color, являющийся цветом границы неактивного окна.
// 
// Возврат:
//    Color
SystemColors.InactiveBorder;

// Возвращает объект Color, которая является цветом, используемым для обозначения отслеженного элемента.
// 
// Возврат:
//    Color
SystemColors.HotTrack;

// Получает объект Color, являющийся цветом текста выбранных элементов.
// 
// Возврат:
//    Color
SystemColors.HighlightText;

// Возвращает объект Color, являющийся цветом фона выбранных элементов.
// 
// Возврат:
//    Color
SystemColors.Highlight;

// Получает объект Color, являющийся цветом рамки окна.
// 
// Возврат:
//    Color
SystemColors.WindowFrame;

// Возвращает объект Color, являющийся цветом серого текста.
// 
// Возврат:
//    Color
SystemColors.GrayText;

// Возвращает объект Color, являющийся самым светлым цветом градиента цвета в строке заголовка активного окна.
// 
// Возврат:
//    Color
SystemColors.GradientActiveCaption;

// Получает объект Color, являющийся цветом рабочего стола.
// 
// Возврат:
//    Color
SystemColors.Desktop;

// Возвращает объект Color, являющийся цветом текста в трехмерном элементе.
// 
// Возврат:
//    Color
SystemColors.ControlText;

// Возвращает объект Color, являющийся цветом выделения трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ControlLightLight;

// Возвращает объект Color, являющийся светлым цветом трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ControlLight;

// Возвращает объект Color, являющийся темным цветом тени трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ControlDarkDark;

// Возвращает объект Color, являющийся цветом тени трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ControlDark;

// Возвращает объект Color, являющийся цветом лицевой стороны трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.Control;

// Возвращает объект Color, являющийся цветом тени трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ButtonShadow;

// Возвращает объект Color, являющийся цветом выделения трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ButtonHighlight;

// Возвращает объект Color, являющийся цветом лицевой стороны трехмерного элемента.
// 
// Возврат:
//    Color
SystemColors.ButtonFace;

// Получает объект Color, являющийся цветом рабочей области приложения.
// 
// Возврат:
//    Color
SystemColors.AppWorkspace;

// Получает объект Color, являющийся цветом текста заголовка активного окна.
// 
// Возврат:
//    Color
SystemColors.ActiveCaptionText;

// Возвращает объект Color, являющийся цветом фона строки заголовка активного окна.
// 
// Возврат:
//    Color
SystemColors.ActiveCaption;

// Возвращает объект Color, являющийся самым светлым цветом градиента цвета в строке заголовка неактивного окна.
// 
// Возврат:
//    Color
SystemColors.GradientInactiveCaption;

// Получает объект Color, являющийся цветом текста в клиентской области окна.
// 
// Возврат:
//    Color
SystemColors.WindowText;
```