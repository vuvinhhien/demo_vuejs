<template>
  <div>
    <h1>Using axios</h1>
    <form action="">
      <div>
        <label for="todoText">TodoText:</label>
        <input type="text" name="text" id="todoText" v-model="todoText" />
      </div>
      <v-button type="submit" :onClick="addTodoHandler">Add todo</v-button>
    </form>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        @click="deleteTodoHandler(todo.id)"
      >
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllTodos, addNewTodo, deleteTodo } from "@/services";
import BaseButton from "@/components/Button/BaseButton.vue";
export default {
  async created() {
    const { error, data } = await getAllTodos();
    if (error) {
      alert("Something wrong with the api");
      return;
    }

    this.todos = data;
  },
  data() {
    return {
      todoText: "",
      todos: [],
    };
  },
  methods: {
    async addTodoHandler(e) {
      e.preventDefault();
      const { data, error } = await addNewTodo(this.todoText);
      if (error) {
        alert("Something wrong with the api");
        return;
      }
      this.todos.push(data);
      this.todoText = "";
    },
    async deleteTodoHandler(todoId) {
      const { error } = await deleteTodo(todoId);
      if (error) {
        alert("Something wrong with the api");
        return;
      }
      const deletedTodoIndex = this.todos.findIndex(
        (todo) => todo.id === todoId
      );

      this.todos.splice(deletedTodoIndex, 1);
    },
  },
  components: {
    "v-button": BaseButton,
  },
};
</script>

<style></style>
