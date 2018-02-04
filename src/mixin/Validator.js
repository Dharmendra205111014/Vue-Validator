/*
 * @Author: dharmendra.patel26@gmail.com 
 * @Date: 2018-02-04 17:57:32 
 * @Last Modified by: dharmendra.patel26@gmail.com
 * @Last Modified time: 2018-02-04 17:58:18
 * @deprecated
 */
 
const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const validateObj = function() {
    this.errors= {};
    this.show= true;
};
validateObj.prototype.hasErrors = function() {
    for (let p in this.errors) {
        if(this.errors[p]){
            return true;
        }
    }
    return false;
};
validateObj.prototype.noInitialDisplay= function() {
    this.show = false;
};
validateObj.prototype.validated= function() {
    if(this.hasErrors()) {
        this.show = true;
        console.log(this);
        return false;
    }
    return true;
};

const validations = {
    validatePassword: function(val) {
        let res = /^[A-Za-z0-9]{5,9}$/.test(val);
        return !res ? 'Please Enter correct password contain Alphanumaric charactors only' : ''; 
    }
}

export const validator = {
    data() {
        return {
            validate: {}
        }
    },
    directives: {
        validate : {
            bind: function(el, binding, vNode) {
                if (typeof binding.value === 'function') {
                    if (typeof binding.value === 'function') {
                        var res =binding.value.call(vNode.context);
                        vNode.context.validate.errors[binding.arg] = res; 
                    }
                }
            },
            update: function(el, binding, vNode) {
                // console.log(el, el.value);
                // console.log(vNode);
                // console.log(binding);
                if (typeof binding.value === 'function') {
                    var res =binding.value.call(vNode.context);
                    vNode.context.validate.errors[binding.arg] = res; 
                } else if (typeof binding.value === "string") {
                    var res = validations[binding.value].call(null, el.value);
                    vNode.context.validate.errors[binding.arg] = res; 
                } else {
                    console.log("No matching validators found, please create custom one");
                }
            }
        }
    },
    watch: {
        // 'validate': {
        //     handler: function(nVal, oVal) {
        //         this.validate = nVal;
        //     },
        //     deep: true
        // }
        // // 'validate.show': function(n) {
        // //     console.log("validate.show changed to ", n)
        // // }
    },
    created() {
        this.validate = new validateObj();
    }
}