import { LitElement } from 'lit';
export declare class ReservationStatusBar extends LitElement {
    start: string;
    finish: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    constructor();
    getPeriodSecond(): number;
}
export declare class ReservationStatusBarItem extends LitElement {
    item_start: string;
    item_finish: string;
    note_comment: string;
    title: string;
    custom_style: {
        'background-color': string;
    };
    static styles: import("lit").CSSResult;
    position_style: {
        left: string;
        width: string;
    };
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=reservation-status-bar.d.ts.map