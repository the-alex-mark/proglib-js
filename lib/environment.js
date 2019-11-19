'use struct';

const OS = require('os');
const FS = require('fs');
const Version = require('./version');
const FolderPath = require('./specialFolder');
const Path = require('./io/path');

function Exists(Path) {
    try {
        let FileInfo = FS.statSync(Path);
        return true;
    }
    catch { return false; }
}

/**
 * Предоставляет сведения о текущей среде и платформе, а также необходимые для управления ими средства.
 */
class Environment {

    /**
     * Возвращает строку, обозначающую в данной среде начало новой строки.
     */
    static get NewLine() {
        return OS.EOL;
    }

    /**
     * Возвращает имя пользователя, который на данный момент выполнил вход в операционную систему.
     */
    static get UserName() {
        return OS.userInfo().username;
    }

    /**
     * Возвращает имя NetBIOS данного локального компьютера.
     */
    static get MachineName() {
        return process.env.COMPUTERNAME;
    }

    /**
     * Возвращает имя сетевого домена, связанное с текущим пользователем.
     */
    static get UserDomainName() {
        return OS.hostname();
    }

    /**
     * Папка профиля пользователя.
     */
    static get UserProfile() {
        return OS.homedir();
    }

    /**
     * Возвращает или задаёт полный путь к текущей рабочей папке.
     */
    static get CurrentDirectory() {
        return process.cwd();
    }

    static set CurrentDirectory(Value) {
        process.chdir(Value);
    }

    /**
     * Возвращает путь к особой системной папке (Windows).
     * @param {Number} SpecialFolder Константа, позволяющая определить особую системную папку.
     * @param {Number} SpecialFolderOption Задает параметры, используемые для получения пути к особой папке.
     */
    static GetFolderPath(SpecialFolder, SpecialFolderOption = Environment.SpecialFolderOption.None) {
        let _path = FolderPath.SearchById(SpecialFolder);
        switch (SpecialFolderOption) {
            case Environment.SpecialFolderOption.None:
                return (Exists(_path)) ? _path : undefined;

            case Environment.SpecialFolderOption.DoNotVerify:
                return _path;

            case Environment.SpecialFolderOption.Create:
                if (_path) {
                    if (!Exists(_path)) FS.mkdirSync(_path);
                    return _path;
                }

                return undefined;

            default:
                throw new Error('Параметры получения пути заданы неверно.');
        }
    }

    /**
     * Предоставляет информацию об операционной системе.
     */
    static get OS() {
        return {
            Type: OS.type(),
            Platform: OS.platform(),
            Architecture: OS.arch()
        };
    }

    /**
     * Возвращает версию Node.js в объекте `Version`.
     * @typedef Version
     */
    static get Version() {
        return new Version(process.version.replace('v', ''));
    }

    /**
     * Возвращает строку, которая определяет архитектуру CPU на данной ОС.
     */
    static get Architecture() {
        return OS.arch();
    }

    /**
     * Возвращает число процессоров на текущем компьютере.
     */
    static get ProcessorCount() {
        return (process.env.NUMBER_OF_PROCESSORS)
            ? Number.parseInt(process.env.NUMBER_OF_PROCESSORS)
            : (OS.cpus().length > 0) ? OS.cpus().length : undefined;
    }

    /**
     * Возвращает время, истекшее с момента загрузки системы (в секундах).
     */
    static get TickCount() {
        return OS.uptime();
    }

    /**
     * Возвращает все количество системной памяти в байтах в виде целого числа.
     */
    static get TotalMemory() {
        return OS.totalmem();
    }

    /**
     * Возвращает количество свободной системной памяти в байтах в виде целого числа.
     */
    static get FreeMemory() {
        return OS.freemem();
    }

    /**
     * Возвращает строковый массив, содержащий аргументы командной строки для текущего процесса.
     */
    static GetCommandLineArgs() {
        return process.argv;
    }

    /**
     * Возвращает или задает код выхода из процесса.
     */
    static get ExitCode() {
        return process.exitCode;
    }
    
    static set ExitCode(Value) {
        process.exitCode = Value;
    }

    /**
     * Завершает этот процесс и возвращает внутренней операционной системе указанный код выхода.
     * @param {Number} ExitCode Код выхода, возвращаемый операционной системе. Чтобы указать, что процесс прошел успешно, следует использовать `0`.
     * @argument 1:    Uncaught Fatal Exception – неперехваченное исключение, необработанное доменом или обработчиком события "uncaughtException".
     * @argument 3:    Internal JavaScript Parse Error – исходный код JavaScript, встроенный в bootstrap-процесс Node.js привел к ошибке парсинга.
     * @argument 4:    Internal JavaScript Evaluation Failure – исходному коду JavaScript, встроенному в bootstrap-процесс Node.js не удалось возвратить оцененное значение функции.
     * @argument 5:    Fatal Error - фатальная ошибка в V8.
     * @argument 6:    Non-function Internal Exception Handler – неперехваченное исключение, но встроенная функция обработчика фатальных исключений каким-то образом не определилась как функция и не была вызвана.
     * @argument 7:    Internal Exception Handler Run-Time Failure – неперехваченное исключение, и встроенная функция обработчика фатальных исключений сама выдала ошибку при попытке его обработать.
     * @argument 9:    Invalid Argument – Либо была задана неизвестная опция, либо опция, требующая задания значения, была без значения.
     * @argument 10:   Internal JavaScript Run-Time Failure – исходный код JavaScript, встроенный в bootstrap-процесс Node.js, выдал ошибку, когда был вызвана bootstrap-функция.
     * @argument 12:   Invalid Debug Argument – опции --debug, --inspect и --debuf-brk были установлены, но выбранный номер порта был недопустимым либо недоступным.
     * @argument >128: Signal Exits – если Node.js получает фатальный сигнал, такой, как SIGKILL или SIGHUP, то его код завершения будет 128 плюс значение кода сигнала.
     */
    static Exit(ExitCode) {
        process.exit((ExitCode) ? ExitCode : (process.exitCode) ? process.exitCode : 0);
    }
    
    /**
     * Заставляет процесс Node.js немедленно закрываться с созданием core-файла.
     */
    static Abort() {
        process.abort()
    }

    /**
     * Задает параметры, используемые для получения пути к особой папке.
     */
    static SpecialFolderOption = {
        // Проверяется путь к папке.Если папка существует, возвращается путь. Если папка не существует, возвращается пустая строка. Это поведение установлено по умолчанию.
        None: 0,
        // Путь к папке возвращается без проверки наличия пути.
        DoNotVerify: 16384,
        // Создается путь к папке, если она еще не существует.
        Create: 32768
    }

    /**
     * Указывает перечислимые константы, используемые для получения путей к системным особым папкам.
     */
    static SpecialFolder = {
        /** Логический рабочий стол, а не физическое местоположение файлов системы. */
        Desktop: 0,

        /** Каталог, содержащий группы программ пользователя. */
        Programs: 2,

        /** Каталог, служащий общим репозиторием для документов. */
        Personal: 5,

        /** Папка Мои документы. */
        MyDocuments: 5,

        /** Каталог, служащий общим репозиторием для избранных элементов пользователя. */
        Favorites: 6,

        /** Каталог, соответствующий группе программ пользователя «Автозагрузка». */
        Startup: 7,

        /** Каталог, содержащий недавно использовавшиеся документы. */
        Recent: 8,

        /** Каталог, содержащий пункты меню «Отправить». */
        SendTo: 9,

        /** Каталог, содержащий пункты меню «Пуск». */
        StartMenu: 11,

        /** Папка Моя музыка. */
        MyMusic: 13,

        /** Каталог файловой системы, служащий репозиторием файлов видеозаписей, принадлежащих пользователю. */
        MyVideos: 14,

        /** Каталог, используемый для физического хранения файловых объектов рабочего стола. */
        DesktopDirectory: 16,

        /** Папка Мой компьютер. */
        MyComputer: 17,

        /** Каталог файловой системы, содержащий объекты ссылок, которые могут существовать в виртуальной папке Сетевое окружение. */
        NetworkShortcuts: 19,

        /** Виртуальная папка, содержащая шрифты. */
        Fonts: 20,

        /** Каталог, служащий общим репозиторием для шаблонов документов. */
        Templates: 21,

        /** Каталог файловой системы, содержащий программы и папки, отображающиеся в меню Пуск для всех пользователей. Эта особая папка действительна только для систем Windows NT. */
        CommonStartMenu: 22,

        /** Папка для компонентов, совместно используемых несколькими приложениями. Эта особая папка действительна только для систем Windows NT, Windows 2000 и Windows XP. */
        CommonPrograms: 23,

        /** Каталог файловой системы, содержащий программы и папки, отображающиеся в папке Автозагрузка для всех пользователей. Эта особая папка действительна только для систем Windows NT. */
        CommonStartup: 24,

        /** Каталог файловой системы, содержащий файлы и папки, отображающиеся на рабочих столах всех пользователей. Эта особая папка действительна только для систем Windows NT. */
        CommonDesktopDirectory: 25,

        /** Каталог, выполняющий функции общего репозитория для данных приложения текущего перемещающегося пользователя. */
        ApplicationData: 26,

        /** Каталог файловой системы, содержащий объекты ссылок, которые могут существовать в виртуальной папке Принтеры. */
        PrinterShortcuts: 27,

        /** Каталог, служащий общим репозиторием данных приложения, используемых текущим пользователем, который не перемещается. */
        LocalApplicationData: 28,

        /** Каталог, служащий общим репозиторием временных файлов Интернета. */
        InternetCache: 32,

        /** Каталог, служащий общим репозиторием файлов cookie Интернета. */
        Cookies: 33,

        /** Каталог, служащий общим репозиторием элементов журнала Интернета. */
        History: 34,

        /** Каталог, выполняющий функции общего репозитория для данных приложения, используемого всеми пользователями. */
        CommonApplicationData: 35,

        /** Каталог Windows или SYSROOT.Это соответствует переменным среды %windir% и %SYSTEMROOT%. */
        Windows: 36,

        /** Каталог System. */
        System: 37,

        /** Каталог файлов программ. */
        ProgramFiles: 38,

        /** Папка Мои рисунки. */
        MyPictures: 39,

        /** Папка профиля пользователя. */
        UserProfile: 40,

        /** Папка System ОС Windows. */
        SystemX86: 41,

        /** Папка Program Files. */
        ProgramFilesX86: 42,

        /** Каталог для компонентов, общих для приложений. */
        CommonProgramFiles: 43,

        /** Папка Program Files. */
        CommonProgramFilesX86: 44,

        /** Каталог файловой системы, содержащий шаблоны, доступные всем пользователям. Эта особая папка действительна только для систем Windows NT. */
        CommonTemplates: 45,

        /** Каталог файловой системы, содержащий документы, общие для всех пользователей. Эта особая папка действительна для систем Windows NT, Windows 95 и Windows 98 с установленной библиотекой Shfolder.dll. */
        CommonDocuments: 46,

        /** Каталог файловой системы, содержащий инструменты администрирования для всех пользователей компьютера. */
        CommonAdminTools: 47,

        /** Каталог файловой системы, используемый для хранения инструментов администрирования для отдельного пользователя.Консоль управления (MMC) сохраняет настроенные консоли в этом каталоге, и он будет перемещаться вслед за пользователем. */
        AdminTools: 48,

        /** Каталог файловой системы, служащий репозиторием музыкальных файлов, общих для всех пользователей. */
        CommonMusic: 53,

        /** Каталог файловой системы, служащий репозиторием файлов изображений, общих для всех пользователей. */
        CommonPictures: 54,

        /** Каталог файловой системы, служащий репозиторием файлов видеозаписей, общих для всех пользователей. */
        CommonVideos: 55,

        /** Каталог файловой системы, содержащий данные ресурсов. */
        Resources: 56,

        /** Каталог файловой системы, содержащий локализованные данные ресурсов. */
        LocalizedResources: 57,

        /** Это значение распознается ОС Windows Vista для обратной совместимости, но сама эта особая папка больше не используется. */
        CommonOemLinks: 58,

        /** Каталог файловой системы, выполняющий функции области промежуточного хранения для файлов, ожидающих записи на компакт-диск. */
        CDBurning: 59
    }
}

module.exports = Environment;