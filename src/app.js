import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Iron clothes", "Revise notes", "Food shopping"],
      newItem:""
    }
  });
});
