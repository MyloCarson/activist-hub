import { GRID, LIST_LAYOUT_TYPE } from 'src/constants';
import { v4 as uuidv4 } from 'uuid';

export const getUniqueKey = () => uuidv4().match(/(\w?\d)/g).join('').substring(0, 16);

export const formatDateOfBirth = (dateOfBirth) => {

    const newDate = new Date(dateOfBirth);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(newDate)
}

export const getListLayoutType = () => {
    if(localStorage.getItem(LIST_LAYOUT_TYPE)){
        return localStorage.getItem(LIST_LAYOUT_TYPE)
    } else {
        storeListLayoutType(GRID);
        return localStorage.getItem(LIST_LAYOUT_TYPE)
    }
};
export const storeListLayoutType = (type) => localStorage.setItem(LIST_LAYOUT_TYPE, type);

export const validateObject = (object, ...args) => {
    const _object = Object.assign({}, object);
    return args.every((arg) => _object.hasOwnProperty(arg) && _object[arg])

}