var exampleData = {
    message: 'Hello, friend!'
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
        data: exampleData
    })
};
