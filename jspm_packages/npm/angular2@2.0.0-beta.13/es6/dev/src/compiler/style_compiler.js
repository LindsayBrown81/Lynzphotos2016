/* */ 
"format esm";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SourceModule, SourceExpression, moduleRef } from './source_module';
import { ViewEncapsulation } from 'angular2/src/core/metadata/view';
import { XHR } from 'angular2/src/compiler/xhr';
import { IS_DART, isBlank } from 'angular2/src/facade/lang';
import { PromiseWrapper } from 'angular2/src/facade/async';
import { ShadowCss } from 'angular2/src/compiler/shadow_css';
import { UrlResolver } from 'angular2/src/compiler/url_resolver';
import { extractStyleUrls } from './style_url_resolver';
import { escapeSingleQuoteString, codeGenExportVariable, MODULE_SUFFIX } from './util';
import { Injectable } from 'angular2/src/core/di';
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
export let StyleCompiler = class {
    constructor(_xhr, _urlResolver) {
        this._xhr = _xhr;
        this._urlResolver = _urlResolver;
        this._styleCache = new Map();
        this._shadowCss = new ShadowCss();
    }
    compileComponentRuntime(template) {
        var styles = template.styles;
        var styleAbsUrls = template.styleUrls;
        return this._loadStyles(styles, styleAbsUrls, template.encapsulation === ViewEncapsulation.Emulated);
    }
    compileComponentCodeGen(template) {
        var shim = template.encapsulation === ViewEncapsulation.Emulated;
        return this._styleCodeGen(template.styles, template.styleUrls, shim);
    }
    compileStylesheetCodeGen(stylesheetUrl, cssText) {
        var styleWithImports = extractStyleUrls(this._urlResolver, stylesheetUrl, cssText);
        return [
            this._styleModule(stylesheetUrl, false, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, false)),
            this._styleModule(stylesheetUrl, true, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, true))
        ];
    }
    clearCache() { this._styleCache.clear(); }
    _loadStyles(plainStyles, absUrls, encapsulate) {
        var promises = absUrls.map((absUrl) => {
            var cacheKey = `${absUrl}${encapsulate ? '.shim' : ''}`;
            var result = this._styleCache.get(cacheKey);
            if (isBlank(result)) {
                result = this._xhr.get(absUrl).then((style) => {
                    var styleWithImports = extractStyleUrls(this._urlResolver, absUrl, style);
                    return this._loadStyles([styleWithImports.style], styleWithImports.styleUrls, encapsulate);
                });
                this._styleCache.set(cacheKey, result);
            }
            return result;
        });
        return PromiseWrapper.all(promises).then((nestedStyles) => {
            var result = plainStyles.map(plainStyle => this._shimIfNeeded(plainStyle, encapsulate));
            nestedStyles.forEach(styles => result.push(styles));
            return result;
        });
    }
    _styleCodeGen(plainStyles, absUrls, shim) {
        var arrayPrefix = IS_DART ? `const` : '';
        var styleExpressions = plainStyles.map(plainStyle => escapeSingleQuoteString(this._shimIfNeeded(plainStyle, shim)));
        for (var i = 0; i < absUrls.length; i++) {
            var moduleUrl = this._createModuleUrl(absUrls[i], shim);
            styleExpressions.push(`${moduleRef(moduleUrl)}STYLES`);
        }
        var expressionSource = `${arrayPrefix} [${styleExpressions.join(',')}]`;
        return new SourceExpression([], expressionSource);
    }
    _styleModule(stylesheetUrl, shim, expression) {
        var moduleSource = `
      ${expression.declarations.join('\n')}
      ${codeGenExportVariable('STYLES')}${expression.expression};
    `;
        return new SourceModule(this._createModuleUrl(stylesheetUrl, shim), moduleSource);
    }
    _shimIfNeeded(style, shim) {
        return shim ? this._shadowCss.shimCssText(style, CONTENT_ATTR, HOST_ATTR) : style;
    }
    _createModuleUrl(stylesheetUrl, shim) {
        return shim ? `${stylesheetUrl}.shim${MODULE_SUFFIX}` : `${stylesheetUrl}${MODULE_SUFFIX}`;
    }
};
StyleCompiler = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [XHR, UrlResolver])
], StyleCompiler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29tcGlsZXIvc3R5bGVfY29tcGlsZXIudHMiXSwibmFtZXMiOlsiU3R5bGVDb21waWxlciIsIlN0eWxlQ29tcGlsZXIuY29uc3RydWN0b3IiLCJTdHlsZUNvbXBpbGVyLmNvbXBpbGVDb21wb25lbnRSdW50aW1lIiwiU3R5bGVDb21waWxlci5jb21waWxlQ29tcG9uZW50Q29kZUdlbiIsIlN0eWxlQ29tcGlsZXIuY29tcGlsZVN0eWxlc2hlZXRDb2RlR2VuIiwiU3R5bGVDb21waWxlci5jbGVhckNhY2hlIiwiU3R5bGVDb21waWxlci5fbG9hZFN0eWxlcyIsIlN0eWxlQ29tcGlsZXIuX3N0eWxlQ29kZUdlbiIsIlN0eWxlQ29tcGlsZXIuX3N0eWxlTW9kdWxlIiwiU3R5bGVDb21waWxlci5fc2hpbUlmTmVlZGVkIiwiU3R5bGVDb21waWxlci5fY3JlYXRlTW9kdWxlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FDTyxFQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUMsTUFBTSxpQkFBaUI7T0FDbEUsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQztPQUMxRCxFQUFDLEdBQUcsRUFBQyxNQUFNLDJCQUEyQjtPQUN0QyxFQUFDLE9BQU8sRUFBaUIsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO09BQ2pFLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCO09BQ2pELEVBQUMsU0FBUyxFQUFDLE1BQU0sa0NBQWtDO09BQ25ELEVBQUMsV0FBVyxFQUFDLE1BQU0sb0NBQW9DO09BQ3ZELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0I7T0FDOUMsRUFDTCx1QkFBdUIsRUFDdkIscUJBQXFCLEVBRXJCLGFBQWEsRUFDZCxNQUFNLFFBQVE7T0FDUixFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQjtBQUUvQyxNQUFNLGtCQUFrQixHQUFHLFFBQVEs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QUNBLENBQUNBO0lBQ3BGQSxDQUFDQTtJQUVPUixhQUFhQSxDQUFDQSxLQUFhQSxFQUFFQSxJQUFhQTtRQUNoRFMsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsRUFBRUEsWUFBWUEsRUFBRUEsU0FBU0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDcEZBLENBQUNBO0lBRU9ULGdCQUFnQkEsQ0FBQ0EsYUFBcUJBLEVBQUVBLElBQWFBO1FBQzNEVSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFHQSxhQUFhQSxRQUFRQSxhQUFhQSxFQUFFQSxHQUFHQSxHQUFHQSxhQUFhQSxHQUFHQSxhQUFhQSxFQUFFQSxDQUFDQTtJQUM3RkEsQ0FBQ0E7QUFDSFYsQ0FBQ0E7QUFwRkQ7SUFBQyxVQUFVLEVBQUU7O2tCQW9GWjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21waWxlVHlwZU1ldGFkYXRhLCBDb21waWxlVGVtcGxhdGVNZXRhZGF0YX0gZnJvbSAnLi9kaXJlY3RpdmVfbWV0YWRhdGEnO1xuaW1wb3J0IHtTb3VyY2VNb2R1bGUsIFNvdXJjZUV4cHJlc3Npb24sIG1vZHVsZVJlZn0gZnJvbSAnLi9zb3VyY2VfbW9kdWxlJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci94aHInO1xuaW1wb3J0IHtJU19EQVJULCBTdHJpbmdXcmFwcGVyLCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1NoYWRvd0Nzc30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NoYWRvd19jc3MnO1xuaW1wb3J0IHtVcmxSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge2V4dHJhY3RTdHlsZVVybHN9IGZyb20gJy4vc3R5bGVfdXJsX3Jlc29sdmVyJztcbmltcG9ydCB7XG4gIGVzY2FwZVNpbmdsZVF1b3RlU3RyaW5nLFxuICBjb2RlR2VuRXhwb3J0VmFyaWFibGUsXG4gIGNvZGVHZW5Ub1N0cmluZyxcbiAgTU9EVUxFX1NVRkZJWFxufSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5cbmNvbnN0IENPTVBPTkVOVF9WQVJJQUJMRSA9ICclQ09NUCUnO1xuY29uc3QgSE9TVF9BVFRSID0gYF9uZ2hvc3QtJHtDT01QT05FTlRfVkFSSUFCTEV9YDtcbmNvbnN0IENPTlRFTlRfQVRUUiA9IGBfbmdjb250ZW50LSR7Q09NUE9ORU5UX1ZBUklBQkxFfWA7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHlsZUNvbXBpbGVyIHtcbiAgcHJpdmF0ZSBfc3R5bGVDYWNoZTogTWFwPHN0cmluZywgUHJvbWlzZTxzdHJpbmdbXT4+ID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8c3RyaW5nW10+PigpO1xuICBwcml2YXRlIF9zaGFkb3dDc3M6IFNoYWRvd0NzcyA9IG5ldyBTaGFkb3dDc3MoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF94aHI6IFhIUiwgcHJpdmF0ZSBfdXJsUmVzb2x2ZXI6IFVybFJlc29sdmVyKSB7fVxuXG4gIGNvbXBpbGVDb21wb25lbnRSdW50aW1lKHRlbXBsYXRlOiBDb21waWxlVGVtcGxhdGVNZXRhZGF0YSk6IFByb21pc2U8QXJyYXk8c3RyaW5nIHwgYW55W10+PiB7XG4gICAgdmFyIHN0eWxlcyA9IHRlbXBsYXRlLnN0eWxlcztcbiAgICB2YXIgc3R5bGVBYnNVcmxzID0gdGVtcGxhdGUuc3R5bGVVcmxzO1xuICAgIHJldHVybiB0aGlzLl9sb2FkU3R5bGVzKHN0eWxlcywgc3R5bGVBYnNVcmxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLmVuY2Fwc3VsYXRpb24gPT09IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkKTtcbiAgfVxuXG4gIGNvbXBpbGVDb21wb25lbnRDb2RlR2VuKHRlbXBsYXRlOiBDb21waWxlVGVtcGxhdGVNZXRhZGF0YSk6IFNvdXJjZUV4cHJlc3Npb24ge1xuICAgIHZhciBzaGltID0gdGVtcGxhdGUuZW5jYXBzdWxhdGlvbiA9PT0gVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQ7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlQ29kZUdlbih0ZW1wbGF0ZS5zdHlsZXMsIHRlbXBsYXRlLnN0eWxlVXJscywgc2hpbSk7XG4gIH1cblxuICBjb21waWxlU3R5bGVzaGVldENvZGVHZW4oc3R5bGVzaGVldFVybDogc3RyaW5nLCBjc3NUZXh0OiBzdHJpbmcpOiBTb3VyY2VNb2R1bGVbXSB7XG4gICAgdmFyIHN0eWxlV2l0aEltcG9ydHMgPSBleHRyYWN0U3R5bGVVcmxzKHRoaXMuX3VybFJlc29sdmVyLCBzdHlsZXNoZWV0VXJsLCBjc3NUZXh0KTtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5fc3R5bGVNb2R1bGUoXG4gICAgICAgICAgc3R5bGVzaGVldFVybCwgZmFsc2UsXG4gICAgICAgICAgdGhpcy5fc3R5bGVDb2RlR2VuKFtzdHlsZVdpdGhJbXBvcnRzLnN0eWxlXSwgc3R5bGVXaXRoSW1wb3J0cy5zdHlsZVVybHMsIGZhbHNlKSksXG4gICAgICB0aGlzLl9zdHlsZU1vZHVsZShzdHlsZXNoZWV0VXJsLCB0cnVlLCB0aGlzLl9zdHlsZUNvZGVHZW4oW3N0eWxlV2l0aEltcG9ydHMuc3R5bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlV2l0aEltcG9ydHMuc3R5bGVVcmxzLCB0cnVlKSlcbiAgICBdO1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHsgdGhpcy5fc3R5bGVDYWNoZS5jbGVhcigpOyB9XG5cbiAgcHJpdmF0ZSBfbG9hZFN0eWxlcyhwbGFpblN0eWxlczogc3RyaW5nW10sIGFic1VybHM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICAgICAgIGVuY2Fwc3VsYXRlOiBib29sZWFuKTogUHJvbWlzZTxBcnJheTxzdHJpbmcgfCBhbnlbXT4+IHtcbiAgICB2YXIgcHJvbWlzZXM6IFByb21pc2U8c3RyaW5nW10+W10gPSBhYnNVcmxzLm1hcCgoYWJzVXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG4gICAgICB2YXIgY2FjaGVLZXkgPSBgJHthYnNVcmx9JHtlbmNhcHN1bGF0ZSA/ICcuc2hpbScgOiAnJ31gO1xuICAgICAgdmFyIHJlc3VsdDogUHJvbWlzZTxzdHJpbmdbXT4gPSB0aGlzLl9zdHlsZUNhY2hlLmdldChjYWNoZUtleSk7XG4gICAgICBpZiAoaXNCbGFuayhyZXN1bHQpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX3hoci5nZXQoYWJzVXJsKS50aGVuKChzdHlsZSkgPT4ge1xuICAgICAgICAgIHZhciBzdHlsZVdpdGhJbXBvcnRzID0gZXh0cmFjdFN0eWxlVXJscyh0aGlzLl91cmxSZXNvbHZlciwgYWJzVXJsLCBzdHlsZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTdHlsZXMoW3N0eWxlV2l0aEltcG9ydHMuc3R5bGVdLCBzdHlsZVdpdGhJbXBvcnRzLnN0eWxlVXJscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNhcHN1bGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zdHlsZUNhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2VXcmFwcGVyLmFsbDxzdHJpbmdbXT4ocHJvbWlzZXMpLnRoZW4oKG5lc3RlZFN0eWxlczogc3RyaW5nW11bXSkgPT4ge1xuICAgICAgdmFyIHJlc3VsdDogQXJyYXk8c3RyaW5nIHwgYW55W10+ID1cbiAgICAgICAgICBwbGFpblN0eWxlcy5tYXAocGxhaW5TdHlsZSA9PiB0aGlzLl9zaGltSWZOZWVkZWQocGxhaW5TdHlsZSwgZW5jYXBzdWxhdGUpKTtcbiAgICAgIG5lc3RlZFN0eWxlcy5mb3JFYWNoKHN0eWxlcyA9PiByZXN1bHQucHVzaChzdHlsZXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zdHlsZUNvZGVHZW4ocGxhaW5TdHlsZXM6IHN0cmluZ1tdLCBhYnNVcmxzOiBzdHJpbmdbXSwgc2hpbTogYm9vbGVhbik6IFNvdXJjZUV4cHJlc3Npb24ge1xuICAgIHZhciBhcnJheVByZWZpeCA9IElTX0RBUlQgPyBgY29uc3RgIDogJyc7XG4gICAgdmFyIHN0eWxlRXhwcmVzc2lvbnMgPSBwbGFpblN0eWxlcy5tYXAoXG4gICAgICAgIHBsYWluU3R5bGUgPT4gZXNjYXBlU2luZ2xlUXVvdGVTdHJpbmcodGhpcy5fc2hpbUlmTmVlZGVkKHBsYWluU3R5bGUsIHNoaW0pKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFic1VybHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtb2R1bGVVcmwgPSB0aGlzLl9jcmVhdGVNb2R1bGVVcmwoYWJzVXJsc1tpXSwgc2hpbSk7XG4gICAgICBzdHlsZUV4cHJlc3Npb25zLnB1c2goYCR7bW9kdWxlUmVmKG1vZHVsZVVybCl9U1RZTEVTYCk7XG4gICAgfVxuICAgIHZhciBleHByZXNzaW9uU291cmNlID0gYCR7YXJyYXlQcmVmaXh9IFske3N0eWxlRXhwcmVzc2lvbnMuam9pbignLCcpfV1gO1xuICAgIHJldHVybiBuZXcgU291cmNlRXhwcmVzc2lvbihbXSwgZXhwcmVzc2lvblNvdXJjZSk7XG4gIH1cblxuICBwcml2YXRlIF9zdHlsZU1vZHVsZShzdHlsZXNoZWV0VXJsOiBzdHJpbmcsIHNoaW06IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFNvdXJjZUV4cHJlc3Npb24pOiBTb3VyY2VNb2R1bGUge1xuICAgIHZhciBtb2R1bGVTb3VyY2UgPSBgXG4gICAgICAke2V4cHJlc3Npb24uZGVjbGFyYXRpb25zLmpvaW4oJ1xcbicpfVxuICAgICAgJHtjb2RlR2VuRXhwb3J0VmFyaWFibGUoJ1NUWUxFUycpfSR7ZXhwcmVzc2lvbi5leHByZXNzaW9ufTtcbiAgICBgO1xuICAgIHJldHVybiBuZXcgU291cmNlTW9kdWxlKHRoaXMuX2NyZWF0ZU1vZHVsZVVybChzdHlsZXNoZWV0VXJsLCBzaGltKSwgbW9kdWxlU291cmNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NoaW1JZk5lZWRlZChzdHlsZTogc3RyaW5nLCBzaGltOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2hpbSA/IHRoaXMuX3NoYWRvd0Nzcy5zaGltQ3NzVGV4dChzdHlsZSwgQ09OVEVOVF9BVFRSLCBIT1NUX0FUVFIpIDogc3R5bGU7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVNb2R1bGVVcmwoc3R5bGVzaGVldFVybDogc3RyaW5nLCBzaGltOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2hpbSA/IGAke3N0eWxlc2hlZXRVcmx9LnNoaW0ke01PRFVMRV9TVUZGSVh9YCA6IGAke3N0eWxlc2hlZXRVcmx9JHtNT0RVTEVfU1VGRklYfWA7XG4gIH1cbn1cbiJdfQ==