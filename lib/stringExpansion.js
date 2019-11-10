'use strict';

/**
 * Преобразует данные в строку Base64.
 */
String.prototype.toBase64 = function() {
    let buffer = (this instanceof Buffer) ? this : Buffer.from(this.toString(), 'binary');
    return buffer.toString('base64');
};

module.exports = {
    toBase64: String.prototype.toBase64
}