import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const interestsCheckboxes = screen.getAllByRole("checkbox");

  expect(interestsCheckboxes.length).toBe(3); // Assuming there are 3 checkboxes
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const interestsCheckboxes = screen.getAllByRole("checkbox");

  interestsCheckboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const interestsCheckboxes = screen.getAllByRole("checkbox");

  fireEvent.click(interestsCheckboxes[0]); // Check the first interest

  expect(interestsCheckboxes[0]).toBeChecked();

  fireEvent.click(interestsCheckboxes[0]); // Uncheck the first interest

  expect(interestsCheckboxes[0]).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.click(submitButton);

  const successMessage = screen.getByText(/submitted successfully/i);
  expect(successMessage).toBeInTheDocument();
});
