// import str from './models/Search';


// // import {add as a  , mul as m , Id} from './views/searchView'
// import * as searchView from './views/searchView'


// console.log(`using imported functions and items ! ${searchView.add(searchView.Id,2)} and ${searchView.mul(3,2)} anddddd ${str}`)

import search from './models/Search'


const Search = new search('pizza');
console.log(Search)
Search.getResults();
