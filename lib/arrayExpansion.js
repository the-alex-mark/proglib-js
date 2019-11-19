'use strict';

if (!Array.prototype.insertAt) {
    /**
     * 
     */
    Array.prototype.insertAt = function (Index, Item) {
        this.splice(Index, 0, Item);
    };
}

module.exports = {
    insertAt: Array.prototype.insertAt
}