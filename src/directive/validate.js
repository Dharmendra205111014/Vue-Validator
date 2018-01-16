import Vue from 'vue'

// export const validator = {
//     errors: {}
// }

export const validate = {
    bind: function(el, binding, vNode) {
        if (typeof binding.value === 'function') {
            if (typeof binding.value === 'function') {
                var res =binding.value.call(vNode.context);
                //vNode.context.validate.errors[binding.arg] = res; 
            }
        }
        //console.log(binding);
        //console.log(el);
        console.log(vNode);
    },
    update: function(el, binding, vNode) {
        if (typeof binding.value === 'function') {
            var res =binding.value.call(vNode.context);
            vNode.context.validate.errors[binding.arg] = res; 
        }
    },
    
}

// To make it available globally
//Vue.directive('validate', validate);