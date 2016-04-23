import React, { Component } from 'react';
import KanbanBoard from './kanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with samples in this book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Contact List Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
];

React.render(<KandbanBoard cards={cardsList} />, document.querySelector("#root"));
