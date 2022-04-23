import instance from "../configs/axios";

export const getAllTodos = async () => {
  try {
    const response = await instance.get("/todos");
    return { data: response.data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const addNewTodo = async (todoText) => {
  try {
    const response = await instance.post("/todos", { content: todoText });
    return { data: response.data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const response = await instance.delete(`/todos/${todoId}`);
    return { data: response.data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
