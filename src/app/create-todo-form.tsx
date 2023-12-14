"use client";

import { useFormState } from "react-dom";
import { FormState, createTodoAction } from "./action";
import { SubmitButton } from "./submit-button";

export function CreateTodoForm() {
  const [formState, wrappedCreateTodoAction] = useFormState(createTodoAction, {
    text: "",
    errors: {
      text: undefined,
    },
  } as FormState);

  return (
    <form action={wrappedCreateTodoAction}>
      <input defaultValue={formState.text} name="text" className="text-black" />
      {formState.errors.text && (
        <div className="text-red-400">{formState.errors.text}</div>
      )}
      <SubmitButton />
    </form>
  );
}
