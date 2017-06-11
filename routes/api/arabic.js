'use strict';

const express = require('express');
const router = express.Router();
const RomanNumeral = require('roman-numerals-kata');

router.get('/:romanNumeral', (request, response) => {
    let romanNumeralString = request.params.romanNumeral;
    var romanNumeral = RomanNumeral.parseString(romanNumeralString);
    response.send(romanNumeral.toInteger().toString());
});

module.exports = router;
