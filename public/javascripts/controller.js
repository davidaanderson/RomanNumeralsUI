'use strict';

(function () {
    var module = angular.module('roman-numeral-ui');
    module.controller('IndexController', IndexController);

    function IndexController (toastr, RomanNumeralService) {
        var self = this;
        self.romanNumeral = '';
        self.arabicInteger = '';
        self.showSpinner = false;

        self.textInputOptions = {
            updateOn: 'keypress',
            debounce: '750'
        };

        function showToastrError (status, message) {
            toastr.error(status, message);
        }

        self.onKeyPressed = function () {
            self.showSpinner = true;
        };

        self.reset = function () {
            self.showSpinner = false;
            self.arabicInteger = '';
            self.romanNumeral = '';
        };

        self.onRomanNumeralChanged = function () {
            RomanNumeralService
                .convertRomanNumeralToArabicInteger(self.romanNumeral)
                .then(onRomanNumeralChangeSuccess, onRomanNumeralChangedError);

            function onRomanNumeralChangeSuccess (arabicInteger) {
                self.arabicInteger = arabicInteger;
                self.showSpinner = false;
            }

            function onRomanNumeralChangedError (error) {
                self.showSpinner = false;
                showToastrError(error.message, error.status);
            }
        };

        self.onArabicIntegerChanged = function () {
            RomanNumeralService
                .convertArabicIntegerToRomanNumeral(self.arabicInteger)
                .then(onArabicIntegerChangedSuccess, onArabicIntegerChangedError);

            function onArabicIntegerChangedSuccess (romanNumeral) {
                self.romanNumeral = romanNumeral;
                self.showSpinner = false;
            }

            function onArabicIntegerChangedError (error) {
                self.showSpinner = false;
                showToastrError(error.message, error.status);
            }
        };
    }
} ());
