'use strict';
const StringBuilder = require('./text/stringBuilder');

if (!String.prototype.toBase64) {
    /**
     * Преобразует данные в строку Base64.
     */
    String.prototype.toBase64 = function() {
        let buffer = (this instanceof Buffer) ? this : Buffer.from(this.toString(), 'binary');
        return buffer.toString('base64');
    };
}

if (!String.prototype.replaceAt) {
    /**
     * 
     */
    String.prototype.replaceAt = function(index, value) {
        return this.substr(0, index) + value + this.substr(index + 1);
    }
}

if (!String.prototype.replaceAll) {
    /**
     * 
     */
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
}

if (!String.random) {
    /**
     * Генерирует новою произвольную строку, обусловленную симолами [A-Z], [a-z], [0-9].
     * @param {Number} Length Длина генерируемой строки строки.
     * @param {String} Characters Набор символов для генерации строки. 
     */
    String.random = function(Length = 12, Сharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
        let result = "";
        let charsLength = Сharacters.length;
        for (let i = 0; i < Length; i++) {
            result += Сharacters.charAt(Math.floor(Math.random() * charsLength));
        }

        return result;
    };
}

if (!String.prototype.insert) {
    /**
     * 
     */
    String.prototype.insert = function(index, value) {
        return this.substr(0, index) + value + this.substr(index);
    }
}

if (!String.format) {
    /**
     * 
     */
    String.format = function(value, ...Parameters) {
        let SB = new StringBuilder();
        SB.AppendFormat(value, ...Parameters);

        return SB.toString();
    }
}

module.exports = {
    toBase64: String.prototype.toBase64,
    replaceAt: String.prototype.replaceAt,
    replaceAll: String.prototype.replaceAll,
    random: String.random,
    format: String.format
}