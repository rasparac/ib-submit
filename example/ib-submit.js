'use strict';

angular
    .module('ib-submit', [])
    .directive('ibSubmit', ibSubmit);

function ibSubmit() {
    var directive = {
        restrict: 'A',
        scope: {
            submitAction: '&'
        },
        link: link
    };

    function link(scope, elem, attr) {
        var text = attr.afterSubmitText ? attr.afterSubmitText : 'Saving...';
        var button = elem[0];
        var mainText = button.innerHTML;

        elem.on("click", function(event) {
            event.preventDefault();
            button.innerHTML = text;
            button.setAttribute('disabled', true);
            var action = scope.$eval(scope.submitAction);

            if (!action) {
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
