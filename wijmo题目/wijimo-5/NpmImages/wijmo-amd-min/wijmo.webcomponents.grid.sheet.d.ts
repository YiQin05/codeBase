import * as wjcWebcomponentsBase from 'wijmo/wijmo.webcomponents.base';
import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
export declare class WjcFlexSheet extends wjcGridSheet.FlexSheet {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
export declare class WjcSheet extends HTMLElement {
    static wrappedClass: () => typeof wjcGridSheet.Sheet;
    static parentProp: string;
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
