import * as wjcWebcomponentsBase from 'wijmo/wijmo.webcomponents.base';
import * as wjcViewer from 'wijmo/wijmo.viewer';
import 'wijmo/wijmo.webcomponents.input';
export declare class WjcReportViewer extends wjcViewer.ReportViewer {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
export declare class WjcPdfViewer extends wjcViewer.PdfViewer {
    _wjBehaviour: wjcWebcomponentsBase.WjComponentBehavior;
    constructor();
    static readonly observedAttributes: wjcWebcomponentsBase.IPropsMeta;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    addEventListener(...args: any[]): void;
}
