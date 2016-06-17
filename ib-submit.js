'use strict';

angular
    .module('ib-submit', [])
    .directive('ibSubmit', ibSubmit);

function ibSubmit() {
    var directive = {
        restrict: 'A',
        scope: {
            submitAction: '&',
            afterSubmitText: '=',
        },
        link: link
    };

    function link(scope, elem, attr) {
        var text = scope.afterSubmitText ? scope.afterSubmitText : 'Saving...';
        var button = elem.find('button')[0];
        if (!button) {
            throw new Error('Put the <button></button> element inside the form.');
        }

        var mainText = button.innerHTML;
        elem.on("submit", function(event) {
            event.preventDefault();
            button.innerHTML = text;
            button.setAttribute('disabled', true);
            var action = scope.$eval(scope.submitAction);

            if (!action) {
                //action should return promise!
                var error = getError();
                throw new Error(error);
            }

            action.finally(function() {
                button.innerHTML = mainText;
                button.removeAttribute("disabled");
            });
        });

        function getError() {
            return [
                    'Your submit function should return promise.',
                    'EXAMPLE:',
                    '$scope.method = function() {',
                    '    return example().then(function(param) {',
                    '        return param',
                    '    });',
                    '};'
                ].join('\n');
        };
    };
    
    return directive;
}
