/*
 * @Author: dharmendra.patel26@gmail.com 
 * @Date: 2018-02-04 17:56:49 
 * @Last Modified by:   dharmendra.patel26@gmail.com 
 * @Last Modified time: 2018-02-04 17:56:49 
 */

import { errorObj, validations} from './validator-core';

const addInputEvents = () => {

};

export const validator = {
    data() {
        return {
            validate: {}
        }
    },
    watch: {
        validate: {
            handler: function(n,o) {

            },
            deep: true
        }
    },
    directives: {
        validate : {
            bind: function(el, binding, vNode) {
                // console.log(el, binding, vNode);
                // console.log(typeof vNode.context.setErrorCode);

                // if given binding.arg is present in context as function, if so call it
                // else if check binding.arg is present in validations and is function, if so call it
                // else do nothing, just log the error
                if (vNode.context[binding.arg] && typeof vNode.context[binding.arg] === 'function') {
                    let fun = vNode.context[binding.arg];
                    var res =fun.call(vNode.context, el.value);
                    vNode.context.validate.addError(binding.value, res);
                    el.addEventListener("keyup", () => {
                        var res =fun.call(vNode.context, el.value);
                        vNode.context.validate.addError(binding.value, res);
                    });
                    el.addEventListener("keydown", () => {
                        var res =fun.call(vNode.context, el.value);
                        vNode.context.validate.addError(binding.value, res);
                    });
                    el.addEventListener("input", () => {
                        var res =fun.call(vNode.context, el.value);
                        vNode.context.validate.addError(binding.value, res);
                    });
                } else if (validations[binding.arg] && typeof validations[binding.arg] === 'function'){
                    let fun = validations[binding.arg];
                    var res =fun.call(vNode.context, el.value);
                    vNode.context.validate.addError(binding.value, res);
                    el.addEventListener("keyup", () => {
                        var res =fun.call(vNode.context, el.value);
                        vNode.context.validate.addError(binding.value, res);
                    });
                    el.addEventListener("keydown", () => {
                        var res =fun.call(vNode.context, el.value);
                        vNode.context.validate.addError(binding.value, res);
                    });
                    el.addEventListener("input", () => {
                        var res =fun.call(vNode.context, el.value);
                        vNode.context.validate.addError(binding.value, res);
                    });
                } else {
                    console.log("No matching validators found, please create custom one");
                }
            },
            update: function(el, binding, vNode) {

            }
        }
    },
    created() {
        this.validate = new errorObj();
    }
}