import * as wjcWebcomponentsBase from 'wijmo/wijmo.webcomponents.base';
import * as wjcOlap from 'wijmo/wijmo.olap';
import 'wijmo/wijmo.webcomponents.chart';
export declare class WjcPivotGrid extends wjcOlap.PivotGrid {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
export declare class WjcPivotChart extends wjcOlap.PivotChart {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
export declare class WjcPivotPanel extends wjcOlap.PivotPanel {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
export declare class WjcSlicer extends wjcOlap.Slicer {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
