'use strict';

// namespace ProgLib.IO
const Path = require('./lib/io/path');

// namespace ProgLib.Drawing
const Color = require('./lib/drawing/color');
const convert = require('./lib/drawing/convert/convert');
const SystemColors = require('./lib/drawing/systemColors');
const MetroColors = require('./lib/drawing/metroColors');

// namespace ProgLib
const stringExpansion = require('./lib/stringExpansion');
const numberExpansion = require('./lib/numberExpansion');

module.exports = {
    IO: {
        Path: Path
    },
    Drawing: {
        Color: Color,
        convert: convert,
        SystemColors: SystemColors,
        MetroColors: MetroColors
    },

    toBase64: stringExpansion.toBase64,
    round: numberExpansion.round
}