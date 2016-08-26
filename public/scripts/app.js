var exampleData = {
    message: 'Hello, friend!',
    name: 'joe'
};

window.onload = function() {
    // define
    var HeaderComponent = Vue.extend({
        template: '<div>This is the Header</div>'
    })

// register
    Vue.component('header-component', HeaderComponent)

    new Vue({
        el: '#app',
        data: exampleData,
        created: function() {
            console.log('The message is:', this.message)
        }
    })
};
