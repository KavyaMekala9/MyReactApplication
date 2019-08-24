import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
    // _.slice(items, startIndex); // items array need to be converted to a lodash wrapper and then convert this wrapper object 
    //to a regular array--so use .value() at the end
    // _.take() 
}