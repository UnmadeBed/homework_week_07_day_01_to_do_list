import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [],
      newItem:""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push(this.newItem);
        this.newItem = "";
      }
    }
  });
});
