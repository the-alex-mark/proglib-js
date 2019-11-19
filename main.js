'use strict';

// namespace ProgLib.Data
const DataRow = require('./lib/data/dataRow');
const DataColumn = require('./lib/data/dataColumn');
const DataRowCollection = require('./lib/data/dataRowCollection');
const DataColumnCollection = require('./lib/data/dataColumnCollection');
const DataTable = require('./lib/data/dataTable');

// namespace ProgLib.Drawing
const Color = require('./lib/drawing/color');
const convert = require('./lib/drawing/convert/convert');
const SystemColors = require('./lib/drawing/systemColors');
const MetroColors = require('./lib/drawing/metroColors');
const Point = require('./lib/drawing/point');
const Size = require('./lib/drawing/size');
const Rectangle = require('./lib/drawing/rectangle');

// namespace ProgLib.IO
const Path = require('./lib/io/path');

// namespace ProgLib.Text
const StringBuilder = require('./lib/text/stringBuilder');

// namespace ProgLib
const Version = require('./lib/version');
const Environment = require('./lib/environment');
const stringExpansion = require('./lib/stringExpansion');
const numberExpansion = require('./lib/numberExpansion');
const arrayExpansion = require('./lib/arrayExpansion');

module.exports = {
    Data: {
        DataRow: DataRow,
        DataRowCollection: DataRowCollection,
        DataColumn: DataColumn,
        DataColumnCollection: DataColumnCollection,
        DataTable: DataTable
    },
    Drawing: {
        Color: Color,
        convert: convert,
        SystemColors: SystemColors,
        MetroColors: MetroColors,
        Point: Point,
        Size: Size,
        Rectangle: Rectangle
    },
    IO: {
        Path: Path
    },
    Text: {
        StringBuilder: StringBuilder
    },

    Version: Version,
    Environment: Environment,
    round: numberExpansion.round,
    toBase64: stringExpansion.toBase64,
    replaceAt: stringExpansion.replaceAt,
    replaceAll: stringExpansion.replaceAll,
    random: stringExpansion.random,
    format: stringExpansion.format,
    insertAt: arrayExpansion.insertAt
}