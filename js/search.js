import { getParam, loadHeaderFooter, loadNav } from './utils.mjs'
import Search from './Search.mjs';

const params = getParam('q');
loadHeaderFooter(params);
loadNav();


const search = new Search(params);
search.buildSearch(document.querySelector('#search-wrapper'));