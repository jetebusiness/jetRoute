"use strict";

/**
 * jetRoute
 * Author: Heitor Ramon Ribeiro
 * Email: heitor.ramon@gmail.com
 * Site: heitorramon.com
 */
;(function ($, window, document, undefined) {
    "use strict";
    /**
     * $.jetRoute Plugin
     * @param route (Initial Route)
     * @param callback (Execute if Route is the current)
     * @param options (Route Options)
     * @returns {*}
     */

    $.jetRoute = function (route, callback, options) {
        var settings = $.extend({}, $.jetRoute.settings, options);
        var routeManager = {
            init: function init() {
                this.currentURL = this.getUrlArray(this.getCurrentUrl(settings.routeType));
                this.currentRoute = this.getUrlArray(this.getRoute(route));
                document.routeParams = {
                    route: this.getRoute(route)
                };
                if (this.checkRoute()) {
                    callback();
                }
            },
            getCurrentUrl: function getCurrentUrl(type) {
                if (type === "window") {
                    return window.location.pathname;
                }
                if (type === "cookie") {
                    var getCookie = function getCookie(name) {
                        var cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
                        return cookie ? cookie.pop() : '';
                    };
                    return getCookie(settings.cookieName);
                }
                if (typeof type === "function") {
                    return type();
                }
            },

            /**
             * Return the URI of the called initial route.
             * @param route
             * @returns {*}
             */
            getRoute: function getRoute(route) {
                for (var key in settings.routes) {
                    if (key === route) {
                        return settings.routes[key];
                    }
                }
            },
            checkRoute: function checkRoute() {
                return this.compareUrlRoute(this.currentURL, this.currentRoute);
            },

            /**
             * Route Compare and Dynamic Route Atributes
             * @param currentURL
             * @param currentRoute
             * @returns {boolean}
             */
            compareUrlRoute: function compareUrlRoute(currentURL, currentRoute) {
                var regex = /\{(.*)\}/i;
                var arraySize = currentRoute.length,
                    testValue = false;
                for (var i = 0; i < arraySize; i++) {
                    var dynamic = regex.exec(currentRoute[i]);
                    if (dynamic) {
                        document.routeParams[dynamic[1]] = currentURL[i];
                    } else {
                        if (currentRoute[i] === currentURL[i]) {
                            testValue = true;
                        }
                    }
                }

                return testValue;
            },
            getUrlArray: function getUrlArray(url) {
                var _url = url.split("/");
                if (_url[0] === "") {
                    _url.shift();
                }
                return _url;
            }
        };
        return routeManager.init();
    };
    $.jetRoute.settings = {
        routes: {},
        routeType: "",
        cookieName: ""
    };
})(jQuery, window, document);