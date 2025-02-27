// The elements

import { alphaT } from "three/webgpu";

export const nothing = "";

export function div({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<div class='${htmlClass}' id='${id}' ${args}>${text}${nest}</div>`;
}

export function h1({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<h1 class='${htmlClass}' id='${id}' ${args}>${text}${nest}</h1>`;
}

export function h2({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<h2 class='${htmlClass}' id='${id}' ${args}>${text}${nest}</h2>`;
}

export function h3({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<h3 class='${htmlClass}' id='${id}' ${args}>${text}${nest}</h3>`;
}

export function h4({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<h4 class='${htmlClass}' id='${id}' ${args}>${text}${nest}</h4>`;
}

export function h5({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<h5 class='${htmlClass}' id='${id}' ${args}>${text}${nest}</h5>`;
}

export function h6({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<h6 class='${htmlClass}' id='${id}' ${args}>${text}${nest}</h6>`;
}

export function p({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<p class='${htmlClass}' id='${id}' ${args}>${text}${nest}</p>`;
}

export function a({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<a class='${htmlClass}' id='${id}' ${args}>${text}${nest}</a>`;
}

export function span({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<span class='${htmlClass}' id='${id}' ${args}>${text}${nest}</span>`;
}

export function ul({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<ul class='${htmlClass}' id='${id}' ${args}>${text}${nest}</ul>`;
}

export function ol({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<ol class='${htmlClass}' id='${id}' ${args}>${text}${nest}</ol>`;
}

export function li({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<li class='${htmlClass}' id='${id}' ${args}>${text}${nest}</li>`;
}

export function table({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<table class='${htmlClass}' id='${id}' ${args}>${text}${nest}</table>`;
}

export function tr({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<tr class='${htmlClass}' id='${id}' ${args}>${text}${nest}</tr>`;
}

export function th({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<th class='${htmlClass}' id='${id}' ${args}>${text}${nest}</th>`;
}

export function td({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<td class='${htmlClass}' id='${id}' ${args}>${text}${nest}</td>`;
}

export function form({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<form class='${htmlClass}' id='${id}' ${args}>${text}${nest}</form>`;
}

export function i({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<i class='${htmlClass}' id='${id}' ${args}>${text}${nest}</i>`;
}

export function strong({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<strong class='${htmlClass}' id='${id}' ${args}>${text}${nest}</strong>`;
}

export function em({htmlClass = "", id = "", nest = "", args = "", text = ""}) {
    return `<em class='${htmlClass}' id='${id}' ${args}>${text}${nest}</em>`;
}

export function img({htmlClass = "", href = "", alt="", nest = "", id="" }) {
    return `<img class='${htmlClass}' id='${id}' href='${href}' alt='${alt}'>${nest}</img>`;
}
