var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let Reservation = class Reservation extends LitElement {
    constructor() {
        super(...arguments);
        this.start = 'aa';
        this.finish = 'bb';
    }
    render() {
        return html `
<div>
    <h2>Welcome to the </h2>
</div>
    `;
    }
};
Reservation.styles = css `
    div {
      width: 30%;
      left: 35%;
    }
  `;
__decorate([
    property()
], Reservation.prototype, "this", void 0);
__decorate([
    property()
], Reservation.prototype, "this", void 0);
Reservation = __decorate([
    customElement('reservation')
], Reservation);
export { Reservation };
//# sourceMappingURL=reservation.js.map