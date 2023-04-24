import { getParam, loadHeaderFooter, loadNav } from './utils.mjs'

loadHeaderFooter();
loadNav();

const params = getParam('q');

if (!params) {
    window.location = '/motors/';
} else {
    console.log(params);
}