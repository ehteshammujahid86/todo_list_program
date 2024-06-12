#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
let todo = [];
while (condition) {
    let todoList = await inquirer.prompt([
        {
            name: "list",
            type: "input",
            message: "Please add something in your todos",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more in your todos",
            default: "false",
        },
    ]);
    todo.push(todoList.list);
    condition = todoList.addmore;
    console.log(todo);
}
