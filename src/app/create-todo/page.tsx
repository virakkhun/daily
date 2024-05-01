import { CreateTodoContainer } from "./_components/create-todo-container";
import { Metadata } from "next";
import { CreateTodoForm } from "./_components/create-todo-form";

export const metadata: Metadata = {
  title: "Todo App | Create task",
  description: "Add your new task for next hour, next day, or next month",
};

export default async function CreateTodoPage() {
  return (
    <CreateTodoContainer>
      <CreateTodoForm />
    </CreateTodoContainer>
  );
}
