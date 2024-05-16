"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colouredText = exports.countDigits = void 0;
function countDigits(n) {
    return Math.abs(n).toString().length;
}
exports.countDigits = countDigits;
function colouredText(text, style) {
    return `\x1b[${style}m${text}\x1b[0m`;
}
exports.colouredText = colouredText;
