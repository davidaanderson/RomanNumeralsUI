'use strict';

const express = require('express');
const router = express.Router();
const RomanNumeral = require('roman-numerals-kata');

router.get('/:arabicInteger', (request, response) => {
    let arabicInteger = request.params.arabicInteger;
    var romanNumeral = RomanNumeral.parseInteger(arabicInteger);
    response.send(romanNumeral.toString());
});

module.exports = router;
