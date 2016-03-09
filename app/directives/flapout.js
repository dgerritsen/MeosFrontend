angular.module('meosApp')
    .directive('flapout', function() {
        return {
            scope: {
                title: '=',
                person: '=',
            },
            transclude: true,
            templateUrl: 'directives/flapout.html',
            link: function(scope, el, attrs) {
                if(attrs.toplevel) {
                    el.find('.block_head').addClass("toplevel");
                }
            }
        };
    });