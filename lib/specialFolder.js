'use struct';

const HomeDrive = process.env.HOMEDRIVE;
const UserName = process.env.USERNAME;

const SpecialFolder = {
    /** Логический рабочий стол, а не физическое местоположение файлов системы. */
    Desktop: {
        id: 0,
        description: "Логический рабочий стол, а не физическое местоположение файлов системы.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Desktop"
    },

    /** Каталог, содержащий группы программ пользователя. */
    Programs: {
        id: 2,
        description: "Каталог, содержащий группы программ пользователя.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs"
    },

    /** Каталог, служащий общим репозиторием для документов. */
    Personal: {
        id: 5,
        description: "Каталог, служащий общим репозиторием для документов.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Documents"
    },

    /** Папка Мои документы. */
    MyDocuments: {
        id: 5,
        description: "Папка Мои документы.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Documents"
    },

    /** Каталог, служащий общим репозиторием для избранных элементов пользователя. */
    Favorites: {
        id: 6,
        description: "Каталог, служащий общим репозиторием для избранных элементов пользователя.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Favorites"
    },

    /** Каталог, соответствующий группе программ пользователя «Автозагрузка». */
    Startup: {
        id: 7,
        description: "Каталог, соответствующий группе программ пользователя «Автозагрузка».",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"
    },

    /** Каталог, содержащий недавно использовавшиеся документы. */
    Recent: {
        id: 8,
        description: "Каталог, содержащий недавно использовавшиеся документы.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Recent"
    },

    /** Каталог, содержащий пункты меню «Отправить». */
    SendTo: {
        id: 9,
        description: "Каталог, содержащий пункты меню «Отправить».",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\SendTo"
    },

    /** Каталог, содержащий пункты меню «Пуск». */
    StartMenu: {
        id: 11,
        description: "Каталог, содержащий пункты меню «Пуск».",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu"
    },

    /** Папка Моя музыка. */
    MyMusi: {
        id: 13,
        description: "Папка Моя музыка.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Music"
    },

    /** Каталог файловой системы, служащий репозиторием файлов видеозаписей, принадлежащих пользователю. */
    MyVideos: {
        id: 14,
        description: "Каталог файловой системы, служащий репозиторием файлов видеозаписей, принадлежащих пользователю.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Videos"
    },

    /** Каталог, используемый для физического хранения файловых объектов рабочего стола. */
    DesktopDirectory: {
        id: 16,
        description: "Каталог, используемый для физического хранения файловых объектов рабочего стола.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Desktop"
    },

    /** Папка Мой компьютер. */
    MyComputer: {
        id: 17,
        description: "Папка Мой компьютер.",
		path: undefined
    },

    /** Каталог файловой системы, содержащий объекты ссылок, которые могут существовать в виртуальной папке Сетевое окружение. */
    NetworkShortcuts: {
        id: 19,
        description: "Каталог файловой системы, содержащий объекты ссылок, которые могут существовать в виртуальной папке Сетевое окружение.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Network Shortcuts"
    },

    /** Виртуальная папка, содержащая шрифты. */
    Fonts: {
        id: 20,
        description: "Виртуальная папка, содержащая шрифты.",
		path: HomeDrive + "\\WINDOWS\\Fonts"
    },

    /** Каталог, служащий общим репозиторием для шаблонов документов. */
    Templates: {
        id: 21,
        description: "Каталог, служащий общим репозиторием для шаблонов документов.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Templates"
    },

    /** Каталог файловой системы, содержащий программы и папки, отображающиеся в меню Пуск для всех пользователей. Эта особая папка действительна только для систем Windows NT. */
    CommonStartMenu: {
        id: 22,
        description: "Каталог файловой системы, содержащий программы и папки, отображающиеся в меню Пуск для всех пользователей.",
		path: HomeDrive + "\\ProgramData\\Microsoft\\Windows\\Start Menu"
    },

    /** Папка для компонентов, совместно используемых несколькими приложениями. Эта особая папка действительна только для систем Windows NT, Windows 2000 и Windows XP. */
    CommonPrograms: {
        id: 23,
        description: "Папка для компонентов, совместно используемых несколькими приложениями.",
		path: HomeDrive + "\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs"
    },

    /** Каталог файловой системы, содержащий программы и папки, отображающиеся в папке Автозагрузка для всех пользователей. Эта особая папка действительна только для систем Windows NT. */
    CommonStartup: {
        id: 24,
        description: "Каталог файловой системы, содержащий программы и папки, отображающиеся в папке Автозагрузка для всех пользователей.",
		path: HomeDrive + "\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"
    },

    /** Каталог файловой системы, содержащий файлы и папки, отображающиеся на рабочих столах всех пользователей. Эта особая папка действительна только для систем Windows NT. */
    CommonDesktopDirectory: {
        id: 25,
        description: "Каталог файловой системы, содержащий файлы и папки, отображающиеся на рабочих столах всех пользователей.",
		path: HomeDrive + "\\Users\\Public\\Desktop"
    },

    /** Каталог, выполняющий функции общего репозитория для данных приложения текущего перемещающегося пользователя. */
    ApplicationData: {
        id: 26,
        description: "Каталог, выполняющий функции общего репозитория для данных приложения текущего перемещающегося пользователя.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming"
    },

    /** Каталог файловой системы, содержащий объекты ссылок, которые могут существовать в виртуальной папке Принтеры. */
    PrinterShortcuts: {
        id: 27,
        description: "Каталог файловой системы, содержащий объекты ссылок, которые могут существовать в виртуальной папке Принтеры.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Printer Shortcuts"
    },

    /** Каталог, служащий общим репозиторием данных приложения, используемых текущим пользователем, который не перемещается. */
    LocalApplicationData: {
        id: 28,
        description: "Каталог, служащий общим репозиторием данных приложения, используемых текущим пользователем, который не перемещается.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Local"
    },

    /** Каталог, служащий общим репозиторием временных файлов Интернета. */
    InternetCache: {
        id: 32,
        description: "Каталог, служащий общим репозиторием временных файлов Интернета.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Local\\Microsoft\\Windows\\INetCache"
    },

    /** Каталог, служащий общим репозиторием файлов cookie Интернета. */
    Cookies: {
        id: 33,
        description: "Каталог, служащий общим репозиторием файлов cookie Интернета.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Local\\Microsoft\\Windows\\INetCookies"
    },

    /** Каталог, служащий общим репозиторием элементов журнала Интернета. */
    History: {
        id: 34,
        description: "Каталог, служащий общим репозиторием элементов журнала Интернета.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Local\\Microsoft\\Windows\\History"
    },

    /** Каталог, выполняющий функции общего репозитория для данных приложения, используемого всеми пользователями. */
    CommonApplicationData: {
        id: 35,
        description: "Каталог, выполняющий функции общего репозитория для данных приложения, используемого всеми пользователями.",
		path: HomeDrive + "\\ProgramData"
    },

    /** Каталог Windows или SYSROOT.Это соответствует переменным среды %windir% и %SYSTEMROOT%. */
    Windows: {
        id: 36,
        description: "Каталог Windows или SYSROOT.",
		path: HomeDrive + "\\WINDOWS"
    },

    /** Каталог System. */
    System: {
        id: 37,
        description: "Каталог System.",
		path: HomeDrive + "\\WINDOWS\\system32"
    },

    /** Каталог файлов программ. */
    ProgramFiles: {
        id: 38,
        description: "Каталог файлов программ.",
		path: HomeDrive + "\\Program Files (x86)"
    },

    /** Папка Мои рисунки. */
    MyPictures: {
        id: 39,
        description: "Папка Мои рисунки.",
		path: HomeDrive + "\\Users\\" + UserName + "\\Pictures"
    },

    /** Папка профиля пользователя.Приложения не должны создавать файлы или папки на этом уровне. */
    UserProfile: {
        id: 40,
        description: "Папка профиля пользователя.",
		path: HomeDrive + "\\Users\\" + UserName + undefined
    },

    /** Папка System ОС Windows. */
    SystemX86: {
        id: 41,
        description: "Папка System ОС Windows.",
		path: HomeDrive + "\\WINDOWS\\SysWOW64"
    },

    /** Папка Program Files. */
    ProgramFilesX86: {
        id: 42,
        description: "Папка Program Files.",
		path: HomeDrive + "\\Program Files (x86)"
    },

    /** Каталог для компонентов, общих для приложений. */
    CommonProgramFiles: {
        id: 43,
        description: "Каталог для компонентов, общих для приложений.",
		path: HomeDrive + "\\Program Files (x86)\\Common Files"
    },

    /** Папка Program Files. */
    CommonProgramFilesX86: {
        id: 44,
        description: "Папка Program Files.",
		path: HomeDrive + "\\Program Files (x86)\\Common Files"
    },

    /** Каталог файловой системы, содержащий шаблоны, доступные всем пользователям. Эта особая папка действительна только для систем Windows NT. */
    CommonTemplates: {
        id: 45,
        description: "Каталог файловой системы, содержащий шаблоны, доступные всем пользователям.",
		path: HomeDrive + "\\ProgramData\\Microsoft\\Windows\\Templates"
    },

    /** Каталог файловой системы, содержащий документы, общие для всех пользователей. Эта особая папка действительна для систем Windows NT, Windows 95 и Windows 98 с установленной библиотекой Shfolder.dll. */
    CommonDocuments: {
        id: 46,
        description: "Каталог файловой системы, содержащий документы, общие для всех пользователей.",
		path: HomeDrive + "\\Users\\Public\\Documents"
    },

    /** Каталог файловой системы, содержащий инструменты администрирования для всех пользователей компьютера. */
    CommonAdminTools: {
        id: 47,
        description: "Каталог файловой системы, содержащий инструменты администрирования для всех пользователей компьютера.",
		path: HomeDrive + "\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools"
    },

    /** Каталог файловой системы, используемый для хранения инструментов администрирования для отдельного пользователя.Консоль управления (MMC) сохраняет настроенные консоли в этом каталоге, и он будет перемещаться вслед за пользователем. */
    AdminTools: {
        id: 48,
        description: "Каталог файловой системы, используемый для хранения инструментов администрирования для отдельного пользователя.Консоль управления (MMC) сохраняет настроенные консоли в этом каталоге, и он будет перемещаться вслед за пользователем.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools"
    },

    /** Каталог файловой системы, служащий репозиторием музыкальных файлов, общих для всех пользователей. */
    CommonMusis: {
        id: 53,
        description: "Каталог файловой системы, служащий репозиторием музыкальных файлов, общих для всех пользователей.",
		path: HomeDrive + "\\Users\\Public\\Music"
    },

    /** Каталог файловой системы, служащий репозиторием файлов изображений, общих для всех пользователей. */
    CommonPictures: {
        id: 54,
        description: "Каталог файловой системы, служащий репозиторием файлов изображений, общих для всех пользователей.",
		path: HomeDrive + "\\Users\\Public\\Pictures"
    },

    /** Каталог файловой системы, служащий репозиторием файлов видеозаписей, общих для всех пользователей. */
    CommonVideos: {
        id: 55,
        description: "Каталог файловой системы, служащий репозиторием файлов видеозаписей, общих для всех пользователей.",
		path: HomeDrive + "\\Users\\Public\\Videos"
    },

    /** Каталог файловой системы, содержащий данные ресурсов. */
    Resources: {
        id: 56,
        description: "Каталог файловой системы, содержащий данные ресурсов.",
		path: HomeDrive + "\\WINDOWS\\resources"
    },

    /** Каталог файловой системы, содержащий локализованные данные ресурсов. */
    LocalizedResources: {
        id: 57,
        description: "Каталог файловой системы, содержащий локализованные данные ресурсов.",
		path: undefined
    },

    /** Это значение распознается ОС Windows Vista для обратной совместимости, но сама эта особая папка больше не используется. */
    CommonOemLinks: {
        id: 58,
        description: "Это значение распознается ОС Windows Vista для обратной совместимости.",
		path: undefined
    },

    /** Каталог файловой системы, выполняющий функции области промежуточного хранения для файлов, ожидающих записи на компакт-диск. */
    CDBurning: {
        id: 59,
        description: "Каталог файловой системы, выполняющий функции области промежуточного хранения для файлов, ожидающих записи на компакт-диск.",
		path: HomeDrive + "\\Users\\" + UserName + "\\AppData\\Local\\Microsoft\\Windows\\Burn\\Burn"
    },

    Search: function(SpecialFolder) {
        for (let i of Object.keys(this)) {
            if (SpecialFolder.toLowerCase() == i.toLowerCase())
                return this[i].path;
        }

        return undefined;
    },

    SearchById: function(SpecialFolder) {
        for (let i of Object.keys(this)) {
            if (SpecialFolder == this[i].id) {
                return this[i].path;
            }
        }

        return undefined;
    }
};

module.exports = SpecialFolder;