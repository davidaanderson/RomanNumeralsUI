
'use strict';

(function () {
    var module = angular.module('roman-numeral-ui');
    module.service('RomanNumeralService', RomanNumeralService);

    function RomanNumeralService ($http, $q) {
        var service = {
            convertRomanNumeralToArabicInteger: convertRomanNumeralToArabicInteger,
            convertArabicIntegerToRomanNumeral: convertArabicIntegerToRomanNumeral
        };

        return service;

        function onSuccess (response) {
            return response.data;
        }

        function onError (response) {
            var error = {
                status: response.status,
                message: response.data.message
            };

            return $q.reject(error);
        }

        function convertRomanNumeralToArabicInteger (romanNumeral) {
            var url = '/api/arabic/' + romanNumeral;

            return $http.get(url)
                .then(onSuccess, onError);
        }

        function convertArabicIntegerToRomanNumeral (arabicInteger) {
            var url = '/api/roman/' + arabicInteger;
            return $http.get(url)
                .then(onSuccess)
                .catch(onError);
        }
    }
} ());
