/* */ 
"format esm";
export var LifecycleHooks;
(function (LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
})(LifecycleHooks || (LifecycleHooks = {}));
/**
 * @internal
 */
export var LIFECYCLE_HOOKS_VALUES = [
    LifecycleHooks.OnInit,
    LifecycleHooks.OnDestroy,
    LifecycleHooks.DoCheck,
    LifecycleHooks.OnChanges,
    LifecycleHooks.AfterContentInit,
    LifecycleHooks.AfterContentChecked,
    LifecycleHooks.AfterViewInit,
    LifecycleHooks.AfterViewChecked
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbIkxpZmVjeWNsZUhvb2tzIl0sIm1hcHBpbmdzIjoiQUFHQSxXQUFZLGNBU1g7QUFURCxXQUFZLGNBQWM7SUFDeEJBLHVEQUFNQSxDQUFBQTtJQUNOQSw2REFBU0EsQ0FBQUE7SUFDVEEseURBQU9BLENBQUFBO0lBQ1BBLDZEQUFTQSxDQUFBQTtJQUNUQSwyRUFBZ0JBLENBQUFBO0lBQ2hCQSxpRkFBbUJBLENBQUFBO0lBQ25CQSxxRUFBYUEsQ0FBQUE7SUFDYkEsMkVBQWdCQSxDQUFBQTtBQUNsQkEsQ0FBQ0EsRUFUVyxjQUFjLEtBQWQsY0FBYyxRQVN6QjtBQUVEOztHQUVHO0FBQ0gsV0FBVyxzQkFBc0IsR0FBRztJQUNsQyxjQUFjLENBQUMsTUFBTTtJQUNyQixjQUFjLENBQUMsU0FBUztJQUN4QixjQUFjLENBQUMsT0FBTztJQUN0QixjQUFjLENBQUMsU0FBUztJQUN4QixjQUFjLENBQUMsZ0JBQWdCO0lBQy9CLGNBQWMsQ0FBQyxtQkFBbUI7SUFDbEMsY0FBYyxDQUFDLGFBQWE7SUFDNUIsY0FBYyxDQUFDLGdCQUFnQjtDQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtTaW1wbGVDaGFuZ2V9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbl91dGlsJztcblxuZXhwb3J0IGVudW0gTGlmZWN5Y2xlSG9va3Mge1xuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRG9DaGVjayxcbiAgT25DaGFuZ2VzLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlclZpZXdDaGVja2VkXG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCB2YXIgTElGRUNZQ0xFX0hPT0tTX1ZBTFVFUyA9IFtcbiAgTGlmZWN5Y2xlSG9va3MuT25Jbml0LFxuICBMaWZlY3ljbGVIb29rcy5PbkRlc3Ryb3ksXG4gIExpZmVjeWNsZUhvb2tzLkRvQ2hlY2ssXG4gIExpZmVjeWNsZUhvb2tzLk9uQ2hhbmdlcyxcbiAgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJDb250ZW50SW5pdCxcbiAgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJWaWV3SW5pdCxcbiAgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJWaWV3Q2hlY2tlZFxuXTtcblxuLyoqXG4gKiBMaWZlY3ljbGUgaG9va3MgYXJlIGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gKiAtIGBPbkNoYW5nZXNgIChpZiBhbnkgYmluZGluZ3MgaGF2ZSBjaGFuZ2VkKSxcbiAqIC0gYE9uSW5pdGAgKGFmdGVyIHRoZSBmaXJzdCBjaGVjayBvbmx5KSxcbiAqIC0gYERvQ2hlY2tgLFxuICogLSBgQWZ0ZXJDb250ZW50SW5pdGAsXG4gKiAtIGBBZnRlckNvbnRlbnRDaGVja2VkYCxcbiAqIC0gYEFmdGVyVmlld0luaXRgLFxuICogLSBgQWZ0ZXJWaWV3Q2hlY2tlZGAsXG4gKiAtIGBPbkRlc3Ryb3lgIChhdCB0aGUgdmVyeSBlbmQgYmVmb3JlIGRlc3RydWN0aW9uKVxuICovXG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGdldCBub3RpZmllZCB3aGVuIGFueSBkYXRhLWJvdW5kIHByb3BlcnR5IG9mIHlvdXIgZGlyZWN0aXZlIGNoYW5nZXMuXG4gKlxuICogYG5nT25DaGFuZ2VzYCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hlY2tlZCBhbmQgYmVmb3JlIHZpZXdcbiAqIGFuZCBjb250ZW50IGNoaWxkcmVuIGFyZSBjaGVja2VkIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGVtIGhhcyBjaGFuZ2VkLlxuICpcbiAqIFRoZSBgY2hhbmdlc2AgcGFyYW1ldGVyIGNvbnRhaW5zIGFuIGVudHJ5IGZvciBlYWNoIG9mIHRoZSBjaGFuZ2VkIGRhdGEtYm91bmQgcHJvcGVydHkuIFRoZSBrZXkgaXNcbiAqIHRoZSBwcm9wZXJ0eSBuYW1lIGFuZCB0aGUgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Yge0BsaW5rIFNpbXBsZUNoYW5nZX0uXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGV4YW1wbGVdKGh0dHA6Ly9wbG5rci5jby9lZGl0L0FIckI2b3BMcUhEQlBrdDRLcGRUP3A9cHJldmlldykpOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgPHA+bXlQcm9wID0ge3tteVByb3B9fTwvcD5gXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICogICBASW5wdXQoKSBteVByb3A6IGFueTtcbiAqXG4gKiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAqICAgICBjb25zb2xlLmxvZygnbmdPbkNoYW5nZXMgLSBteVByb3AgPSAnICsgY2hhbmdlc1snbXlQcm9wJ10uY3VycmVudFZhbHVlKTtcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwidmFsdWUgPSB2YWx1ZSArIDFcIj5DaGFuZ2UgTXlDb21wb25lbnQ8L2J1dHRvbj5cbiAqICAgICA8bXktY21wIFtteS1wcm9wXT1cInZhbHVlXCI+PC9teS1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW015Q29tcG9uZW50XVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogICB2YWx1ZSA9IDA7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPbkNoYW5nZXMgeyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZXhlY3V0ZSBjdXN0b20gaW5pdGlhbGl6YXRpb24gbG9naWMgYWZ0ZXIgeW91ciBkaXJlY3RpdmUnc1xuICogZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBpbml0aWFsaXplZC5cbiAqXG4gKiBgbmdPbkluaXRgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgZGlyZWN0aXZlJ3MgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkIGZvciB0aGVcbiAqIGZpcnN0IHRpbWUsIGFuZCBiZWZvcmUgYW55IG9mIGl0cyBjaGlsZHJlbiBoYXZlIGJlZW4gY2hlY2tlZC4gSXQgaXMgaW52b2tlZCBvbmx5IG9uY2Ugd2hlbiB0aGVcbiAqIGRpcmVjdGl2ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGV4YW1wbGVdKGh0dHA6Ly9wbG5rci5jby9lZGl0LzFNQnlwUnJ5WGQ2NHY0cFYwM1luP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8cD5teS1jb21wb25lbnQ8L3A+YFxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICogICBuZ09uSW5pdCgpIHtcbiAqICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQnKTtcbiAqICAgfVxuICpcbiAqICAgbmdPbkRlc3Ryb3koKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ25nT25EZXN0cm95Jyk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxidXR0b24gKGNsaWNrKT1cImhhc0NoaWxkID0gIWhhc0NoaWxkXCI+XG4gKiAgICAgICB7e2hhc0NoaWxkID8gJ0Rlc3Ryb3knIDogJ0NyZWF0ZSd9fSBNeUNvbXBvbmVudFxuICogICAgIDwvYnV0dG9uPlxuICogICAgIDxteS1jbXAgKm5nSWY9XCJoYXNDaGlsZFwiPjwvbXktY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtNeUNvbXBvbmVudCwgTmdJZl1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqICAgaGFzQ2hpbGQgPSB0cnVlO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uSW5pdCB7IG5nT25Jbml0KCk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBhbGdvcml0aG0gZm9yIHlvdXIgZGlyZWN0aXZlLlxuICpcbiAqIGBuZ0RvQ2hlY2tgIGdldHMgY2FsbGVkIHRvIGNoZWNrIHRoZSBjaGFuZ2VzIGluIHRoZSBkaXJlY3RpdmVzIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgYWxnb3JpdGhtLlxuICpcbiAqIFRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gYWxnb3JpdGhtIGxvb2tzIGZvciBkaWZmZXJlbmNlcyBieSBjb21wYXJpbmcgYm91bmQtcHJvcGVydHkgdmFsdWVzXG4gKiBieSByZWZlcmVuY2UgYWNyb3NzIGNoYW5nZSBkZXRlY3Rpb24gcnVucy4gV2hlbiBgRG9DaGVja2AgaXMgaW1wbGVtZW50ZWQsIHRoZSBkZWZhdWx0IGFsZ29yaXRobVxuICogaXMgZGlzYWJsZWQgYW5kIGBuZ0RvQ2hlY2tgIGlzIHJlc3BvbnNpYmxlIGZvciBjaGVja2luZyBmb3IgY2hhbmdlcy5cbiAqXG4gKiBJbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYWxsb3dzIGltcHJvdmluZyBwZXJmb3JtYW5jZSBieSB1c2luZyBpbnNpZ2h0cyBhYm91dCB0aGUgY29tcG9uZW50LFxuICogaXRzIGltcGxlbWVudGF0aW9uIGFuZCBkYXRhIHR5cGVzIG9mIGl0cyBwcm9wZXJ0aWVzLlxuICpcbiAqIE5vdGUgdGhhdCBhIGRpcmVjdGl2ZSBzaG91bGQgbm90IGltcGxlbWVudCBib3RoIGBEb0NoZWNrYCBhbmQge0BsaW5rIE9uQ2hhbmdlc30gYXQgdGhlIHNhbWUgdGltZS5cbiAqIGBuZ09uQ2hhbmdlc2Agd291bGQgbm90IGJlIGNhbGxlZCB3aGVuIGEgZGlyZWN0aXZlIGltcGxlbWVudHMgYERvQ2hlY2tgLiBSZWFjdGlvbiB0byB0aGUgY2hhbmdlc1xuICogaGF2ZSB0byBiZSBoYW5kbGVkIGZyb20gd2l0aGluIHRoZSBgbmdEb0NoZWNrYCBjYWxsYmFjay5cbiAqXG4gKiBVc2Uge0BsaW5rIEtleVZhbHVlRGlmZmVyc30gYW5kIHtAbGluayBJdGVyYWJsZURpZmZlcnN9IHRvIGFkZCB5b3VyIGN1c3RvbSBjaGVjayBtZWNoYW5pc21zLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9RcG5JbEYwQ1IyaTViY1liSEVVSj9wPXByZXZpZXcpKVxuICpcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSBgbmdEb0NoZWNrYCB1c2VzIGFuIHtAbGluayBJdGVyYWJsZURpZmZlcnN9IHRvIGRldGVjdCB0aGUgdXBkYXRlcyB0byB0aGVcbiAqIGFycmF5IGBsaXN0YDpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdjdXN0b20tY2hlY2snLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxwPkNoYW5nZXM6PC9wPlxuICogICAgIDx1bD5cbiAqICAgICAgIDxsaSAqbmdGb3I9XCIjbGluZSBvZiBsb2dzXCI+e3tsaW5lfX08L2xpPlxuICogICAgIDwvdWw+YCxcbiAqICAgZGlyZWN0aXZlczogW05nRm9yXVxuICogfSlcbiAqIGNsYXNzIEN1c3RvbUNoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG4gKiAgIEBJbnB1dCgpIGxpc3Q6IGFueVtdO1xuICogICBkaWZmZXI6IGFueTtcbiAqICAgbG9ncyA9IFtdO1xuICpcbiAqICAgY29uc3RydWN0b3IoZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XG4gKiAgICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAqICAgfVxuICpcbiAqICAgbmdEb0NoZWNrKCkge1xuICogICAgIHZhciBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLmxpc3QpO1xuICpcbiAqICAgICBpZiAoY2hhbmdlcykge1xuICogICAgICAgY2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKHIgPT4gdGhpcy5sb2dzLnB1c2goJ2FkZGVkICcgKyByLml0ZW0pKTtcbiAqICAgICAgIGNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKHIgPT4gdGhpcy5sb2dzLnB1c2goJ3JlbW92ZWQgJyArIHIuaXRlbSkpXG4gKiAgICAgfVxuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8YnV0dG9uIChjbGljayk9XCJsaXN0LnB1c2gobGlzdC5sZW5ndGgpXCI+UHVzaDwvYnV0dG9uPlxuICogICAgIDxidXR0b24gKGNsaWNrKT1cImxpc3QucG9wKClcIj5Qb3A8L2J1dHRvbj5cbiAqICAgICA8Y3VzdG9tLWNoZWNrIFtsaXN0XT1cImxpc3RcIj48L2N1c3RvbS1jaGVjaz5gLFxuICogICBkaXJlY3RpdmVzOiBbQ3VzdG9tQ2hlY2tDb21wb25lbnRdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIGxpc3QgPSBbXTtcbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvQ2hlY2sgeyBuZ0RvQ2hlY2soKTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBnZXQgbm90aWZpZWQgd2hlbiB5b3VyIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXG4gKlxuICogYG5nT25EZXN0cm95YCBjYWxsYmFjayBpcyB0eXBpY2FsbHkgdXNlZCBmb3IgYW55IGN1c3RvbSBjbGVhbnVwIHRoYXQgbmVlZHMgdG8gb2NjdXIgd2hlbiB0aGVcbiAqIGluc3RhbmNlIGlzIGRlc3Ryb3llZFxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBleGFtcGxlXShodHRwOi8vcGxua3IuY28vZWRpdC8xTUJ5cFJyeVhkNjR2NHBWMDNZbj9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8cD5teS1jb21wb25lbnQ8L3A+YFxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICogICBuZ09uSW5pdCgpIHtcbiAqICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQnKTtcbiAqICAgfVxuICpcbiAqICAgbmdPbkRlc3Ryb3koKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ25nT25EZXN0cm95Jyk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxidXR0b24gKGNsaWNrKT1cImhhc0NoaWxkID0gIWhhc0NoaWxkXCI+XG4gKiAgICAgICB7e2hhc0NoaWxkID8gJ0Rlc3Ryb3knIDogJ0NyZWF0ZSd9fSBNeUNvbXBvbmVudFxuICogICAgIDwvYnV0dG9uPlxuICogICAgIDxteS1jbXAgKm5nSWY9XCJoYXNDaGlsZFwiPjwvbXktY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtNeUNvbXBvbmVudCwgTmdJZl1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqICAgaGFzQ2hpbGQgPSB0cnVlO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKlxuICpcbiAqIFRvIGNyZWF0ZSBhIHN0YXRlZnVsIFBpcGUsIHlvdSBzaG91bGQgaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIGFuZCBzZXQgdGhlIGBwdXJlYFxuICogcGFyYW1ldGVyIHRvIGBmYWxzZWAgaW4gdGhlIHtAbGluayBQaXBlTWV0YWRhdGF9LlxuICpcbiAqIEEgc3RhdGVmdWwgcGlwZSBtYXkgcHJvZHVjZSBkaWZmZXJlbnQgb3V0cHV0LCBnaXZlbiB0aGUgc2FtZSBpbnB1dC4gSXQgaXNcbiAqIGxpa2VseSB0aGF0IGEgc3RhdGVmdWwgcGlwZSBtYXkgY29udGFpbiBzdGF0ZSB0aGF0IHNob3VsZCBiZSBjbGVhbmVkIHVwIHdoZW5cbiAqIGEgYmluZGluZyBpcyBkZXN0cm95ZWQuIEZvciBleGFtcGxlLCBhIHN1YnNjcmlwdGlvbiB0byBhIHN0cmVhbSBvZiBkYXRhIG1heSBuZWVkIHRvXG4gKiBiZSBkaXNwb3NlZCwgb3IgYW4gaW50ZXJ2YWwgbWF5IG5lZWQgdG8gYmUgY2xlYXJlZC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvaThwbTVick80c1BhTHhCeDU2TVI/cD1wcmV2aWV3KSlcbiAqXG4gKiBJbiB0aGlzIGV4YW1wbGUsIGEgcGlwZSBpcyBjcmVhdGVkIHRvIGNvdW50ZG93biBpdHMgaW5wdXQgdmFsdWUsIHVwZGF0aW5nIGl0IGV2ZXJ5XG4gKiA1MG1zLiBCZWNhdXNlIGl0IG1haW50YWlucyBhbiBpbnRlcm5hbCBpbnRlcnZhbCwgaXQgYXV0b21hdGljYWxseSBjbGVhcnNcbiAqIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBiaW5kaW5nIGlzIGRlc3Ryb3llZCBvciB0aGUgY291bnRkb3duIGNvbXBsZXRlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7T25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuICogQFBpcGUoe25hbWU6ICdjb3VudGRvd24nLCBwdXJlOiBmYWxzZX0pXG4gKiBjbGFzcyBDb3VudERvd24gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICogICByZW1haW5pbmdUaW1lOk51bWJlcjtcbiAqICAgaW50ZXJ2YWw6U2V0SW50ZXJ2YWw7XG4gKiAgIG5nT25EZXN0cm95KCkge1xuICogICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gKiAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICogICAgIH1cbiAqICAgfVxuICogICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBbXSkge1xuICogICAgIGlmICghcGFyc2VJbnQodmFsdWUsIDEwKSkgcmV0dXJuIG51bGw7XG4gKiAgICAgaWYgKHR5cGVvZiB0aGlzLnJlbWFpbmluZ1RpbWUgIT09ICdudW1iZXInKSB7XG4gKiAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICogICAgIH1cbiAqICAgICBpZiAoIXRoaXMuaW50ZXJ2YWwpIHtcbiAqICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gKiAgICAgICAgIHRoaXMucmVtYWluaW5nVGltZS09NTA7XG4gKiAgICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ1RpbWUgPD0gMCkge1xuICogICAgICAgICAgIHRoaXMucmVtYWluaW5nVGltZSA9IDA7XG4gKiAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAqICAgICAgICAgICBkZWxldGUgdGhpcy5pbnRlcnZhbDtcbiAqICAgICAgICAgfVxuICogICAgICAgfSwgNTApO1xuICogICAgIH1cbiAqICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdUaW1lO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBJbnZva2luZyBge3sgMTAwMDAgfCBjb3VudGRvd24gfX1gIHdvdWxkIGNhdXNlIHRoZSB2YWx1ZSB0byBiZSBkZWNyZW1lbnRlZCBieSA1MCxcbiAqIGV2ZXJ5IDUwbXMsIHVudGlsIGl0IHJlYWNoZXMgMC5cbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT25EZXN0cm95IHsgbmdPbkRlc3Ryb3koKTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBnZXQgbm90aWZpZWQgd2hlbiB5b3VyIGRpcmVjdGl2ZSdzIGNvbnRlbnQgaGFzIGJlZW4gZnVsbHlcbiAqIGluaXRpYWxpemVkLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9wbGFtWFVwc0xRYklYcFZpWmhVTz9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2NoaWxkLWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBge3t3aGVyZX19IGNoaWxkYFxuICogfSlcbiAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAqICAgQElucHV0KCkgd2hlcmU6IHN0cmluZztcbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdwYXJlbnQtY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxuICogfSlcbiAqIGNsYXNzIFBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICogICBAQ29udGVudENoaWxkKENoaWxkQ29tcG9uZW50KSBjb250ZW50Q2hpbGQ6IENoaWxkQ29tcG9uZW50O1xuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgLy8gY29udGVudENoaWxkIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcbiAqICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE1lc3NhZ2UodGhpcy5jb250ZW50Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICogICAgIC8vIGNvbnRlbnRDaGlsZCBpcyB1cGRhdGVkIGFmdGVyIHRoZSBjb250ZW50IGhhcyBiZWVuIGNoZWNrZWRcbiAqICAgICBjb25zb2xlLmxvZygnQWZ0ZXJDb250ZW50SW5pdDogJyArIHRoaXMuZ2V0TWVzc2FnZSh0aGlzLmNvbnRlbnRDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBwcml2YXRlIGdldE1lc3NhZ2UoY21wOiBDaGlsZENvbXBvbmVudCk6IHN0cmluZyB7XG4gKiAgICAgcmV0dXJuIGNtcCA/IGNtcC53aGVyZSArICcgY2hpbGQnIDogJ25vIGNoaWxkJztcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPHBhcmVudC1jbXA+XG4gKiAgICAgICA8Y2hpbGQtY21wIHdoZXJlPVwiY29udGVudFwiPjwvY2hpbGQtY21wPlxuICogICAgIDwvcGFyZW50LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbUGFyZW50Q29tcG9uZW50LCBDaGlsZENvbXBvbmVudF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyQ29udGVudEluaXQgeyBuZ0FmdGVyQ29udGVudEluaXQoKTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBnZXQgbm90aWZpZWQgYWZ0ZXIgZXZlcnkgY2hlY2sgb2YgeW91ciBkaXJlY3RpdmUncyBjb250ZW50LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC90R2RyeXRORUtRbmVjSVBrRDdOVT9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe3NlbGVjdG9yOiAnY2hpbGQtY21wJywgdGVtcGxhdGU6IGB7e3doZXJlfX0gY2hpbGRgfSlcbiAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAqICAgQElucHV0KCkgd2hlcmU6IHN0cmluZztcbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtzZWxlY3RvcjogJ3BhcmVudC1jbXAnLCB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gfSlcbiAqIGNsYXNzIFBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICogICBAQ29udGVudENoaWxkKENoaWxkQ29tcG9uZW50KSBjb250ZW50Q2hpbGQ6IENoaWxkQ29tcG9uZW50O1xuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgLy8gY29udGVudENoaWxkIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcbiAqICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE1lc3NhZ2UodGhpcy5jb250ZW50Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICogICAgIC8vIGNvbnRlbnRDaGlsZCBpcyB1cGRhdGVkIGFmdGVyIHRoZSBjb250ZW50IGhhcyBiZWVuIGNoZWNrZWRcbiAqICAgICBjb25zb2xlLmxvZygnQWZ0ZXJDb250ZW50Q2hlY2tlZDogJyArIHRoaXMuZ2V0TWVzc2FnZSh0aGlzLmNvbnRlbnRDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBwcml2YXRlIGdldE1lc3NhZ2UoY21wOiBDaGlsZENvbXBvbmVudCk6IHN0cmluZyB7XG4gKiAgICAgcmV0dXJuIGNtcCA/IGNtcC53aGVyZSArICcgY2hpbGQnIDogJ25vIGNoaWxkJztcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPHBhcmVudC1jbXA+XG4gKiAgICAgICA8YnV0dG9uIChjbGljayk9XCJoYXNDb250ZW50ID0gIWhhc0NvbnRlbnRcIj5Ub2dnbGUgY29udGVudCBjaGlsZDwvYnV0dG9uPlxuICogICAgICAgPGNoaWxkLWNtcCAqbmdJZj1cImhhc0NvbnRlbnRcIiB3aGVyZT1cImNvbnRlbnRcIj48L2NoaWxkLWNtcD5cbiAqICAgICA8L3BhcmVudC1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW05nSWYsIFBhcmVudENvbXBvbmVudCwgQ2hpbGRDb21wb25lbnRdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7IG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGdldCBub3RpZmllZCB3aGVuIHlvdXIgY29tcG9uZW50J3MgdmlldyBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvTGhUS1ZNRU0wZmtKZ3lwNENJMVc/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtzZWxlY3RvcjogJ2NoaWxkLWNtcCcsIHRlbXBsYXRlOiBge3t3aGVyZX19IGNoaWxkYH0pXG4gKiBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gKiAgIEBJbnB1dCgpIHdoZXJlOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAncGFyZW50LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgPGNoaWxkLWNtcCB3aGVyZT1cInZpZXdcIj48L2NoaWxkLWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbQ2hpbGRDb21wb25lbnRdXG4gKiB9KVxuICogY2xhc3MgUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gKiAgIEBWaWV3Q2hpbGQoQ2hpbGRDb21wb25lbnQpIHZpZXdDaGlsZDogQ2hpbGRDb21wb25lbnQ7XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICAvLyB2aWV3Q2hpbGQgaXMgbm90IGluaXRpYWxpemVkIHlldFxuICogICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TWVzc2FnZSh0aGlzLnZpZXdDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gKiAgICAgLy8gdmlld0NoaWxkIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcbiAqICAgICBjb25zb2xlLmxvZygnbmdBZnRlclZpZXdJbml0OiAnICsgdGhpcy5nZXRNZXNzYWdlKHRoaXMudmlld0NoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIHByaXZhdGUgZ2V0TWVzc2FnZShjbXA6IENoaWxkQ29tcG9uZW50KTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gY21wID8gY21wLndoZXJlICsgJyBjaGlsZCcgOiAnbm8gY2hpbGQnO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGA8cGFyZW50LWNtcD48L3BhcmVudC1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW1BhcmVudENvbXBvbmVudF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyVmlld0luaXQgeyBuZ0FmdGVyVmlld0luaXQoKTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBnZXQgbm90aWZpZWQgYWZ0ZXIgZXZlcnkgY2hlY2sgb2YgeW91ciBjb21wb25lbnQncyB2aWV3LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC8wcURHSGNQUWtjMjVDWGhUTnpLVT9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe3NlbGVjdG9yOiAnY2hpbGQtY21wJywgdGVtcGxhdGU6IGB7e3doZXJlfX0gY2hpbGRgfSlcbiAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAqICAgQElucHV0KCkgd2hlcmU6IHN0cmluZztcbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdwYXJlbnQtY21wJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8YnV0dG9uIChjbGljayk9XCJzaG93VmlldyA9ICFzaG93Vmlld1wiPlRvZ2dsZSB2aWV3IGNoaWxkPC9idXR0b24+XG4gKiAgICAgPGNoaWxkLWNtcCAqbmdJZj1cInNob3dWaWV3XCIgd2hlcmU9XCJ2aWV3XCI+PC9jaGlsZC1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW05nSWYsIENoaWxkQ29tcG9uZW50XVxuICogfSlcbiAqIGNsYXNzIFBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICogICBAVmlld0NoaWxkKENoaWxkQ29tcG9uZW50KSB2aWV3Q2hpbGQ6IENoaWxkQ29tcG9uZW50O1xuICogICBzaG93VmlldyA9IHRydWU7XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICAvLyB2aWV3Q2hpbGQgaXMgbm90IGluaXRpYWxpemVkIHlldFxuICogICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TWVzc2FnZSh0aGlzLnZpZXdDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gKiAgICAgLy8gdmlld0NoaWxkIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gY2hlY2tlZFxuICogICAgIGNvbnNvbGUubG9nKCdBZnRlclZpZXdDaGVja2VkOiAnICsgdGhpcy5nZXRNZXNzYWdlKHRoaXMudmlld0NoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIHByaXZhdGUgZ2V0TWVzc2FnZShjbXA6IENoaWxkQ29tcG9uZW50KTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gY21wID8gY21wLndoZXJlICsgJyBjaGlsZCcgOiAnbm8gY2hpbGQnO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGA8cGFyZW50LWNtcD48L3BhcmVudC1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW1BhcmVudENvbXBvbmVudF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyVmlld0NoZWNrZWQgeyBuZ0FmdGVyVmlld0NoZWNrZWQoKTsgfVxuIl19