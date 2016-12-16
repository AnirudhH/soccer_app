module.exports.ifCond = function (v1, operator, v2, options) {
    // console.log('ifCond', v1, v2);
// Thanks to http://stackoverflow.com/a/16315366/559680
    switch (operator) {
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
};
module.exports.ifExists = function (elem, list, options) {
    // console.log('ifIn',v1,v2);
    if(list.indexOf(elem) > -1) {
        return options.fn(this);
    }
    return options.inverse(this);
};/**
 * Created by Ani on 16-12-2016.
 */
