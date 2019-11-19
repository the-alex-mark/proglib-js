'use strict';
const os = require('os');
const fs = require('fs');
const path = require('path');
const Enviroment = require('../environment');
const StringExpansion = require('../stringExpansion');

/**
 * Выполняет операции для экземпляров объекта `String`, содержащих сведения о пути к файлу или каталогу.
 */
class Path {

    /**
     * Предоставляет символ, для разделения уровней папок в строке пути, в которой отражена иерархическая организация файловой системы.
     */
    static get DirectorySeparatorChar() {
        return '\\';
    }

    /**
     * Предоставляет дополнительный символ, для разделения уровней каталогов в строке пути, в которой отражена иерархическая организация файловой системы.
     */
    static get AltDirectorySeparatorChar() {
        return '/';
    }

    /**
     * Предоставляет разделитель томов.
     */
    static get VolumeSeparatorChar() {
        return ':';
    }

    /**
     * Предоставляет массив символов, которые не могут быть указаны в аргументах строки пути, передаваемых в элементы класса `Path`.
     */
    static get InvalidPathChars() {
        return [ '"', '<', '>', '|', '\0', String.fromCharCode(1), String.fromCharCode(2), String.fromCharCode(3), String.fromCharCode(4), String.fromCharCode(5), String.fromCharCode(6), String.fromCharCode(7), String.fromCharCode(8), String.fromCharCode(9), String.fromCharCode(10), String.fromCharCode(11), String.fromCharCode(12), String.fromCharCode(13), String.fromCharCode(14), String.fromCharCode(15), String.fromCharCode(16), String.fromCharCode(17), String.fromCharCode(18), String.fromCharCode(19), String.fromCharCode(20), String.fromCharCode(21), String.fromCharCode(22), String.fromCharCode(23), String.fromCharCode(24), String.fromCharCode(25), String.fromCharCode(26), String.fromCharCode(27), String.fromCharCode(28), String.fromCharCode(29), String.fromCharCode(30), String.fromCharCode(31) ];
    }

    /**
     * Разделитель, который используется в переменных среды для разделения строк пути.
     */
    static get PathSeparator() {
        return path.delimiter;
    }

    /**
     * Определяет, содежит ли путь запрещённые символы.
     * @param {String} Path Проверяемая строка пути.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     */
    static CheckInvalidPathChars(Path) {
        for (let i of this.InvalidPathChars)
            if (Path.indexOf(i, 0) > -1) { throw new Error("Путь содержит недопустимые знаки."); }

        return false;
    }

    /**
     * Определяет, имеет ли путь недопустимую форму.
     * @param {String} Path Проверяемая строка пути.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static CheckNormalPath(Path) {
        if (Path && Path != null && typeof Path == 'string') {
            this.CheckInvalidPathChars(Path);

            if (Path[0] != this.VolumeSeparatorChar)
                return true;
        }
        else { throw new Error("Путь имеет недопустимую форму."); }

        return false;
    }

    /**
     * Изменяет расширение строки пути.
     * @param {String} Path Сведения о пути, которые нужно изменить.
     * @param {String} Extension Новое расширение (начинающееся с точки или без нее). Задает `null` для удаления существующего расширения из параметра `Path`.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static ChangeExtension(Path, Extension) {
        this.CheckNormalPath(Path);

        let s = Path;
        for (let i = Path.length; --i >= 0;) {
            let ch = Path[i];
            if (ch == '.') {
                s = Path.substring(0, i);
                break;
            }
            if (ch == this.DirectorySeparatorChar || ch == this.AltDirectorySeparatorChar || ch == this.VolumeSeparatorChar) break;
        }
        if (Extension != null && Path.Length != 0) {
            if (Extension.Length == 0 || Extension[0] != '.') {
                s = s + ".";
            }
            s = s + Extension;
        }
        return s;
    }

    /**
     * Объединяет массив строк в путь.
     * @param {...String} Paths Массив частей пути.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Один из элементов Paths имеет пустое значение.
     */
    static Combine(...Paths) {
        const CombineNoChecks = (Path1, Path2) => {
            if (Path2.length == 0) return Path1;
            if (Path1.length == 0) return Path2;
    
            if (this.IsPathRooted(Path2)) return Path2;
    
            let ch = Path1[Path1.length - 1];
            if (ch != this.DirectorySeparatorChar && ch != this.AltDirectorySeparatorChar && Path2[0] != this.VolumeSeparatorChar) 
                return (Path1 + this.DirectorySeparatorChar + Path2).replace("::", ":").replace("\\\\", "\\").replace("//", "/");
    
            return (Path1 + Path2).replace("::", ":").replace("\\\\", "\\").replace("//", "/");
        }

        if (!Paths || Paths == null || Paths.length == 0)
            throw new Error("Данные не могут быть пустыми.");
            
        for (let i of Paths)
            this.CheckInvalidPathChars(i);
        
        let combine = "";
        for (let i of Paths)
            combine = CombineNoChecks(combine, i);

        return combine;
    }

    /**
     * Объединяет все данные сегменты пути вместе, используя для этого заданный платформенный разделитель, и приводит полученный путь к нормальному виду.
     * @param {...String} Paths Массив частей пути.
     */
    static Join(...Paths) {
        return path.join(...Paths);
    }

    /**
     * Возвращает объект, чьи свойства представляют собой важные элементы пути.
     * @param {String} Path Проверяемый путь.
     */
    static Parse(Path) {
        return path.parse(Path);
    }

    /**
     * Нормализует данный путь, распределяя сегменты `..` и `.`.
     * @param {String} Path Путь, который требуется нормализовать.
     */
    static Normalize(Path) {
        return path.normalize(Path);
    }

    /**
     * Возвращает приблизительный путь из `From` в `To`.
     * Если `From` и `To` приводят к одному и тому же пути (после вызова `Path.Resolve()` для обоих), возвращается строка с нулевой длиной.
     * @param {String} From 
     * @param {String} To 
     */
    static Relative(From, To) {
        return path.relative(From, To);
    }

    /**
     * Превращает последовательность путей или сегментов пути в абсолютный путь.
     * @param  {...String} Paths Последовательность путей.
     */
    static Resolve(...Paths) {
        return path.resolve(...Paths);
    }

    /**
     * Возвращает для указанной строки пути сведения о каталоге.
     * @param {String} Path Путь к файлу или каталогу.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static GetDirectoryName(Path) {
        this.CheckNormalPath(Path);

        let length = Path.length;
        for (let i = length; --i >= 0;) {
            let ch = Path[i];
            if (ch == this.DirectorySeparatorChar || ch == this.AltDirectorySeparatorChar || ch == this.VolumeSeparatorChar) {
                let pos = i;
                if (this.IsPathRooted(Path)) {
                    if (length <= 3) return null;
                    pos = (((Path.lastIndexOf(ch) == Path.indexOf(ch))) ? i + 1 : i);
                }

                return Path.substring(0, pos);
            }
        }

        return undefined;
    }

    /**
     * Возвращает расширение указанной строки пути.
     * @param {String} Path Строка пути, из которой нужно получить расширение.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static GetExtension(Path) {
        this.CheckNormalPath(Path);

        let length = Path.length;
        for (let i = length; --i >= 0;) {
            let ch = Path[i];
            if (ch == '.') {
                return (i != length - 1) ? Path.substring(i, length) : null;
            }
            if (ch == this.DirectorySeparatorChar || ch == this.AltDirectorySeparatorChar || ch == this.VolumeSeparatorChar)
                break;
        }

        return undefined;
    }

    /**
     * Возвращает имя файла и расширение указанной строки пути.
     * @param {String} Path Строка пути, из которой нужно получить имя файла и расширение.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static GetFileName(Path) {
        this.CheckNormalPath(Path);

        let length = Path.length;
        for (let i = length; --i >= 0;) {
            let ch = Path[i];
            if (ch == this.DirectorySeparatorChar || ch == this.AltDirectorySeparatorChar || ch == this.VolumeSeparatorChar)
                return Path.substring(i + 1, length);
        }

        return Path;
    }

    /**
     * Возвращает имя файла указанной строки пути без расширения.
     * @param {String} Path Путь к файлу.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static GetFileNameWithoutExtension(Path) {
        Path = this.GetFileName(Path);
        if (Path != null) {
            let i;
            return ((i = Path.lastIndexOf('.')) == -1) ? Path : Path.substring(0, i);
        }
        
        return undefined;
    }

    /**
     * Возвращает для указанной строки пути абсолютный путь.
     * @param {String} Path Файл или каталог, для которых нужно получить сведения об абсолютном пути.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static GetFullPath(Path) {
        this.CheckNormalPath(Path);

        if (this.IsPathRooted(Path)) { return Path; }
        else {
            let ch = Path[0];
            if (ch == this.DirectorySeparatorChar || ch == this.AltDirectorySeparatorChar || ch == this.VolumeSeparatorChar) {
                return Enviroment.CurrentDirectory + Path;
            }
            else {
                if (Path.indexOf(this.DirectorySeparatorChar) > -1)
                    return Enviroment.CurrentDirectory + this.DirectorySeparatorChar + Path;

                if (Path.indexOf(this.AltDirectorySeparatorChar) > -1)
                    return Enviroment.CurrentDirectory + this.AltDirectorySeparatorChar + Path;

                if (Path.indexOf(this.VolumeSeparatorChar) > -1)
                    return Enviroment.CurrentDirectory + this.VolumeSeparatorChar + Path;
            }
        }
    }

    /**
     * Возвращает массив, содержащий символы, которые не разрешены в именах файлов.
     */
    static GetInvalidFileNameChars() {
        return this.InvalidPathChars;
    }

    /**
     * Возвращает массив, содержащий символы, которые не разрешены в именах путей.
     */
    static GetInvalidPathChars() {
        return this.InvalidPathChars;
    }

    /**
     * Возвращает произвольное имя каталога.
     */
    static GetRandomDirectoryName() {
        return String.random(8).toLowerCase();
    }

    /**
     * Возвращает произвольное имя файла.
     */
    static GetRandomFileName() {
        return String.random(12).replaceAt(8, '.').toLowerCase();
    }

    /**
     * Возвращает сведения о корневом каталоге для указанного пути.
     * @param {String} Path Путь, из которого нужно получить сведения о корневом каталоге.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static GetPathRoot(Path) {
        this.CheckNormalPath(Path);

        let length = Path.length;
        return (this.IsPathRooted(Path))
            ? (length == 2) ? Path.substring(0, 2) : Path.substring(0, 3)
            : (length >= 1 && Path[0] == this.DirectorySeparatorChar || Path[0] == this.AltDirectorySeparatorChar) ? Path[0] : null;
    }

    /**
     * Возвращает путь к временной папке текущего пользователя.
     */
    static GetTempPath() {
        return os.tmpdir();
    }

    /**
     * Определяет, включает ли путь расширение имени файла.
     * @param {String} Path Путь для поиска расширения.
     * @throws Параметр Path содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр Path имеет пустое значение.
     */
    static HasExtension(Path) {
        this.CheckNormalPath(Path);
            
        for (let i = Path.length; --i >= 0;) {
            let ch = Path[i];
            if (ch == '.') {
                return (i != Path.length - 1) ? true : false;
            }
            if (ch == this.DirectorySeparatorChar || ch == this.AltDirectorySeparatorChar || ch == this.VolumeSeparatorChar) break;
        }

        return false;
    }

    /**
     * Определяет, является ли `Path` абсолютным путем.
     * @param {String} Path Проверяемый путь.
     * @throws Путь имеет неверный формат.
     */
    static IsAbsolute(Path) {
        return path.isAbsolute(Path);
    }

    /**
     * Возвращает значение, указывающее, содержит ли заданный путь корневую папку.
     * @param {String} Path Проверяемый путь.
     * @throws Параметр `Path` содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр `Path` имеет пустое значение.
     */
    static IsPathRooted(Path) {
        this.CheckNormalPath(Path);

        if (Path.length >= 2 && Path[1] == this.VolumeSeparatorChar)
            return true;

        return false;
    }

    /**
     * Определяет, существует ли заданный файл или каталог.
     * @param {String} Path Проверяемый путь.
     * @throws Параметр `Path` содержит один или несколько недопустимых символов, определенных в `Path.InvalidPathChars`.
     * @throws Параметр `Path` имеет пустое значение.
     */
    static Exists(Path) {
        this.CheckNormalPath(Path);
        try {
            let FileInfo = fs.statSync(Path);
            return true;
        }
        catch { return false; }
    }
}

module.exports = Path;