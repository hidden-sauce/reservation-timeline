import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('reservation-status-bar')
export class ReservationStatusBar extends LitElement {
  @property()
  start = '2000-01-01 00:00:00';
  @property()
  finish = '2000-01-01 00:00:01';
    
  static styles = css`
    div {
      display: flex;
      position: relative;
      background-color: #7ED7C1;
      height: 60px;
    }
  `;

  override render() {
    return html`
    <div>
      <slot></slot>
    </div>
    `;
  }

  constructor() {
    super();
  }

  public getPeriodSecond() {
    return (new Date(this.finish).getTime() - new Date(this.start).getTime());
  }
}

@customElement('reservation-status-bar-item')
export class ReservationStatusBarItem extends LitElement {
  @property()
  item_start = '2023-11-13 15:00:00';
  @property()
  item_finish = '2023-11-13 16:00:00';
  @property()
  note_comment = '';
  @property()
  title = '';

  @property({type: Object})
  custom_style = {'background-color': 'blue'};

  static styles = css`
    #container {
      position: absolute;
      top: 10%;
      left: 1%;
      width: 5%;
      height: 80%;
      border-radius: 5px;
    }

    #bar {
      width: 100%;
      transform: translateY(5%);
      -webkit-transform: translateY(5%);
      -ms-transform: translateY(5%);
    }

    span{
      position: absolute;
      background-color: #d3d3d3;
      visibility: hidden;
      width: auto;
      z-index: 1;
      white-space: pre-wrap;
    }

    #bar:hover + span {
      visibility: visible;
    }

 `;
  
  public position_style = {left: '0%', width: '0%'};

  override firstUpdated() {
    if (
	this.parentElement === null ||
	this.parentElement.tagName !== 'RESERVATION-STATUS-BAR' ||
	this.parentElement.start === undefined ||
	this.parentElement.getPeriodSecond === undefined
    ) {
      throw new Error('parent element must be reservation-status-bar');
    }
    this.position_style = {
      left: (new Date(this.item_start).getTime() - new Date(this.parentElement.start).getTime()) / this.parentElement.getPeriodSecond() * 100 + '%',
      width: (new Date(this.item_finish).getTime() - new Date(this.item_start).getTime()) / this.parentElement.getPeriodSecond() * 100 + '%'
    };

    this.position_style = Object.assign({}, this.position_style, this.custom_style);
    this.requestUpdate();
  }

  override render() {
    return html`
<div id="container" style=${styleMap(this.position_style)}>
<div id="bar">
${this.title}
</div>
${this.note_comment ? html`<span>${this.note_comment}</span>` : ''}
</div>

    `;
  }
}

