Vue.component('assignment-item', {
  props: ['assignment'],
  template: '<div>{{ assignment.text }} {{ assignment.weight }}</div>'
})

var gpaCalc = new Vue({
  el: '#calculator',
  
  data: {
    newTask: "",
    newGrade: 20,

    assignments: [
      { weight: 15, text: 'Assignment 1' },
      { weight: 20, text: 'Test' },
      { weight: 15, text: 'Quiz' }
    ]
  },
  
  methods: {

    addTask: function () {
      var task = this.newTask.trim();
      var grade = this.newGrade;

      if (task) {
        this.assignments.push({text: task, weight: grade});
        this.newTask = "";
      }
    },
    
    total: function() {
      var subtotal = 0;
      var total = 0;

      this.assignments.forEach(function(s) {
        subtotal += s.weight;
      });
       
      total = subtotal/4;
      
      return total;
    }
  }
})