<template>
  <div>
    <h1 class="title">Your to-do list:</h1>
    <md-field class="addToList">
      <md-button @click="addTodo()" class="md-icon-button addItem">
        <md-icon>add</md-icon>
      </md-button>
      <md-input
        class="add"
        v-model="currentTodo"
        @keyup.enter="addTodo()"
        placeholder="to-do..."
      ></md-input>
    </md-field class="clearList">
    <md-list class="todos">
      <md-list-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        @dblclick="editTodo(index)"
        class="todo"
        :class="{completed: todo.completed}"
      >
        <md-checkbox
          v-model="boolean"

          value="todo.completed"
          @change="completeTodo(todo)"
        >
        </md-checkbox>
          <label v-if="!todo.edit">{{ todo.label }}</label>
          <input
            class="edit"
            type="text"
            v-model="todo.label"
            v-if="todo.edit"
            v-focus
            @blur="doneEdit(index)"
            @keyup.enter="doneEdit(index)"
          >
        <md-button class="remove" @click="removeTodo(todo)">remove</md-button>
      </md-list-item>
    </md-list>
    <footer v-show="todos.length > 0" class="clearList">
      <md-button class="clear" @click="removeAll()">Clear list</md-button><br>
      <md-button class="clear" @click="removeCompleted()">Clear completed</md-button>
    </footer>
  </div>
</template>

<script>
const focus = {
  inserted(el) {
    el.focus();
  }
};
export default {
  data() {
    return {
      todos: [],
      currentTodo: ""
    };
  },
  directives: { focus },
  methods: {
    addTodo() {
      if (this.currentTodo !== "") {
        this.todos.push({
          id: this.todos.length,
          label: this.currentTodo,
          completed: false,
          edit: false
        });
      }
      this.currentTodo = "";
    },
    completeTodo(todo) {
      if (todo.completed === true) {
        todo.completed = false;
      }
      if (todo.completed === false) {
        todo.completed = true;
      }
    },
    editTodo(index) {
      this.todos[index].edit = true;
    },
    doneEdit(index) {
      this.todos[index].edit = false;
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    removeAll() {
      this.todos = [];
    },
    removeCompleted() {
      this.todos = this.todos.filter(function(todo) {
        return !todo.completed;
      });
    }
  }
};
</script>

<style>
body {
  padding: 20px;
  background-color: #c9c9c9;
}

.remove {
  background-color: white;
  padding: 0.25em;
}

.addToList {
  background-color: white;
}

.clearList {
  background-color: white;
}

.todos {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.md-checkbox {
  border: 1px;
  border-color: grey;
  z-index: 999;
}

  .todo.completed label {
    text-decoration: line-through;
  }

  .md-checkbox .md-checkbox-container {
  border: 0.7px solid #a37c82;
  margin-left: 12px;
}
.md-checkbox.md-checked .md-checkbox-container:after {
  border-color: #a37c82;
}
.md-checkbox.md-theme-default {
  background: transparent;
}




</style>
