/* */ 
"format cjs";
'use strict';var lang_1 = require('angular2/src/facade/lang');
var route_path_1 = require('./route_path');
var RegexRoutePath = (function () {
    function RegexRoutePath(_reString, _serializer) {
        this._reString = _reString;
        this._serializer = _serializer;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = lang_1.RegExpWrapper.create(this._reString);
    }
    RegexRoutePath.prototype.matchUrl = function (url) {
        var urlPath = url.toString();
        var params = {};
        var matcher = lang_1.RegExpWrapper.matcher(this._regex, urlPath);
        var match = lang_1.RegExpMatcherWrapper.next(matcher);
        if (lang_1.isBlank(match)) {
            return null;
        }
        for (var i = 0; i < match.length; i += 1) {
            params[i.toString()] = match[i];
        }
        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
    };
    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
    RegexRoutePath.prototype.toString = function () { return this._reString; };
    return RegexRoutePath;
})();
exports.RegexRoutePath = RegexRoutePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhfcm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6WyJSZWdleFJvdXRlUGF0aCIsIlJlZ2V4Um91dGVQYXRoLmNvbnN0cnVjdG9yIiwiUmVnZXhSb3V0ZVBhdGgubWF0Y2hVcmwiLCJSZWdleFJvdXRlUGF0aC5nZW5lcmF0ZVVybCIsIlJlZ2V4Um91dGVQYXRoLnRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBMkQsMEJBQTBCLENBQUMsQ0FBQTtBQUV0RiwyQkFBa0QsY0FBYyxDQUFDLENBQUE7QUFLakU7SUFPRUEsd0JBQW9CQSxTQUFpQkEsRUFBVUEsV0FBNEJBO1FBQXZEQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFRQTtRQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBaUJBO1FBTHBFQSxhQUFRQSxHQUFZQSxJQUFJQSxDQUFDQTtRQUN6QkEsZ0JBQVdBLEdBQVdBLEdBQUdBLENBQUNBO1FBSy9CQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0Esb0JBQWFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVERCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBUUE7UUFDZkUsSUFBSUEsT0FBT0EsR0FBR0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDN0JBLElBQUlBLE1BQU1BLEdBQTRCQSxFQUFFQSxDQUFDQTtRQUN6Q0EsSUFBSUEsT0FBT0EsR0FBR0Esb0JBQWFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFEQSxJQUFJQSxLQUFLQSxHQUFHQSwyQkFBb0JBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBRS9DQSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDekNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDdkRBLENBQUNBO0lBRURGLG9DQUFXQSxHQUFYQSxVQUFZQSxNQUE0QkEsSUFBa0JHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTVGSCxpQ0FBUUEsR0FBUkEsY0FBYUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNKLHFCQUFDQTtBQUFEQSxDQUFDQSxBQWhDRCxJQWdDQztBQWhDWSxzQkFBYyxpQkFnQzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZ0V4cFdyYXBwZXIsIFJlZ0V4cE1hdGNoZXJXcmFwcGVyLCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtVcmwsIFJvb3RVcmx9IGZyb20gJy4uLy4uL3VybF9wYXJzZXInO1xuaW1wb3J0IHtSb3V0ZVBhdGgsIEdlbmVyYXRlZFVybCwgTWF0Y2hlZFVybH0gZnJvbSAnLi9yb3V0ZV9wYXRoJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2V4U2VyaWFsaXplciB7IChwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogR2VuZXJhdGVkVXJsOyB9XG5cbmV4cG9ydCBjbGFzcyBSZWdleFJvdXRlUGF0aCBpbXBsZW1lbnRzIFJvdXRlUGF0aCB7XG4gIHB1YmxpYyBoYXNoOiBzdHJpbmc7XG4gIHB1YmxpYyB0ZXJtaW5hbDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzcGVjaWZpY2l0eTogc3RyaW5nID0gJzInO1xuXG4gIHByaXZhdGUgX3JlZ2V4OiBSZWdFeHA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVTdHJpbmc6IHN0cmluZywgcHJpdmF0ZSBfc2VyaWFsaXplcjogUmVnZXhTZXJpYWxpemVyKSB7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5fcmVTdHJpbmc7XG4gICAgdGhpcy5fcmVnZXggPSBSZWdFeHBXcmFwcGVyLmNyZWF0ZSh0aGlzLl9yZVN0cmluZyk7XG4gIH1cblxuICBtYXRjaFVybCh1cmw6IFVybCk6IE1hdGNoZWRVcmwge1xuICAgIHZhciB1cmxQYXRoID0gdXJsLnRvU3RyaW5nKCk7XG4gICAgdmFyIHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cFdyYXBwZXIubWF0Y2hlcih0aGlzLl9yZWdleCwgdXJsUGF0aCk7XG4gICAgdmFyIG1hdGNoID0gUmVnRXhwTWF0Y2hlcldyYXBwZXIubmV4dChtYXRjaGVyKTtcblxuICAgIGlmIChpc0JsYW5rKG1hdGNoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcGFyYW1zW2kudG9TdHJpbmcoKV0gPSBtYXRjaFtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1hdGNoZWRVcmwodXJsUGF0aCwgW10sIHBhcmFtcywgW10sIG51bGwpO1xuICB9XG5cbiAgZ2VuZXJhdGVVcmwocGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IEdlbmVyYXRlZFVybCB7IHJldHVybiB0aGlzLl9zZXJpYWxpemVyKHBhcmFtcyk7IH1cblxuICB0b1N0cmluZygpIHsgcmV0dXJuIHRoaXMuX3JlU3RyaW5nOyB9XG59Il19