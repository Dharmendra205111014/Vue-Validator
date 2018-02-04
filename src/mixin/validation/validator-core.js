/*
 * @Author: dharmendra.patel26@gmail.com 
 * @Date: 2018-02-04 17:55:46 
 * @Last Modified by: dharmendra.patel26@gmail.com
 * @Last Modified time: 2018-02-04 17:56:07
 * @fileOverview To have all core feature of Vue-validator. Responsible for error object and predefine validate functions
 */

/**
 * @constant {object} list for regex to be matched for cetrain type of validation
 */
const LIST_REGEX = {
    ALPHA_NUMARIC_LENGTH_5_9 : /^[A-Za-z0-9]{5,9}$/
} ;

/**
 * This is validate error object 
 */
export const errorObj = function() {
    this.errors= [];
    this.show= true;
    /**
     * To get specific error
     * @param  {string} key
     * @returns {string} error
     */

    this.getError = function(key) {
        for (let e in this.errors) {
            if (Object.keys(this.errors[e]).includes(key)) {
                return this.errors[e][key];
            }
        }
        return '';
    };

    /**
     * To check if any error exist in component
     * @returns {boolean}
     */
    this.hasErrors = function() {
        return this.errors.length > 0;
    };

    /**
     * To check if specific error exist
     * @param  {string} key
     * @returns {boolean}
     */
    this.hasError = function(key) {
        return !!this.getError(key);
    };
    
    /**
     * To add error in errorList
     * @param  {string} key - model name
     * @param  {string} value - message
     */
    this.addError = function(key, value) {
        for (let e in this.errors) {
            if (Object.keys(this.errors[e]).includes(key)) {
                this.errors.splice(e,1);
            }
        }
        if (value) {
            let o = {};
            o[key] = value;
            this.errors.push(o);
        }
    }
};

/**
 * This set the error display from start of the component
 */
errorObj.prototype.noInitialDisplay= function() {
    this.show = false;
};

/**
 * To check if there is any error present in component model, Mostly should be used on form submit
 * @returns {boolean}
 */
errorObj.prototype.validated= function() {
    if(this.hasErrors()) {
        this.show = true;
        return false;
    }
    return true;
};

export const validations = {
    /**
     * To validate password.
     * @param  {string} val
     * @returns {string} error message
     */
    validatePassword: function(val, message) {
        message = message || 'Please Enter correct password contain Alphanumaric charactors only';
        return !LIST_REGEX.ALPHA_NUMARIC_LENGTH_5_9.test(val) ?  message: ''; 
    }
}
