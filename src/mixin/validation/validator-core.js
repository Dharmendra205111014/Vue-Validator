export const errorObj = function() {
    this.errors= [];
    this.show= true;
    this.gerError = function(key) {
        for (let e in this.errors) {
            if (Object.keys(this.errors[e]).includes(key)) {
                return this.errors[e][key];
            }
        }
        return '';
    },
    this.hasErrors = function() {
        return this.errors.length > 0;
    },
    this.hasError = function(key) {
        return !!this.gerError(key);
    },
    this.addError = function(key, value) {
        for (let e in this.errors) {
            if (Object.keys(this.errors[e]).includes(key)) {
                this.errors.pop(e);
            }
        }
        let o = {};
        o[key] = value;
        return this.errors.push(o);
    }
};

errorObj.prototype.noInitialDisplay= function() {
    this.show = false;
};
errorObj.prototype.validated= function() {
    if(this.hasErrors()) {
        this.show = true;
        console.log(this);
        return false;
    }
    return true;
};

export const validations = {
    validatePassword: function(val) {
        let res = /^[A-Za-z0-9]{5,9}$/.test(val);
        return !res ? 'Please Enter correct password contain Alphanumaric charactors only' : ''; 
    }
}
