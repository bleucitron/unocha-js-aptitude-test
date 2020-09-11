# UNOCHA - JavaScript/TypeScript (Node and React) Basic Aptitude Test

## Quick Start

Requirements:
* Git
* Node.js v10
* NPM

## Overview

This is a general test for proficiency in Node and React,
to help us determine if your application is suitable within our team
as a Backend, Frontend or Full Stack developer.

Please read the following instructions carefully.

In your submission, please fill out the `notes.txt` file indicating which
of the 2 you feel your skillsets are stronger in,
with regards to developing Backend Node and/or Front end React.

This test is split into 2: a backend and frontend task.
Please do the task which you feel your skillset is strongest in.
If you think you are able to do both tasks,
start on the one which you are strongest in first,
and complete as much as you can of the other in the available time.
The backend and frontend tasks will be scored separately,
rather than added up as a total.

The tasks within this test are designed to be completed within 3 hours total:
2 hours for the backend and 1 hour for the frontend.
None of these tasks should require any particular tricks or advanced programming
skills, they may however require the use of external resources,
such as documentation, modules etc... which you are welcome to use as you wish.

You will be assessed on your ability to complete the subtasks, as well as the
process by which you complete them.
Please do not implement features beyond the scope of this excercise,
as they will not be taken into consideration during this assesment;
demonstrated good coding practices however will,
including the regularity and content of commits and quality of commit messages.

## Backend Tasks

This is a very simple REST API that allows for a list of employees to be read,
created, updated and deleted.
The aim of this test is to expand the scope of this little API,
and improve test coverage.

The API Uses the following:

* Node.js v10
* Express for routing and request handling
* Sequelize as the ORM
* SQLite3 as the DB
* Jest for running unit tests

### Task 1: Add missing tests

There is currently one test, which essentially checks the home (`/`) endpoint.
Your first task is to write tests for the employee CRUD endpoints too.
Code coverage will be taken into account here.

### Task 2: "Team" feature

We want to be able to assign employees to teams.
A team can have multiple employees, and likewise,
an employee can be in multiple teams.
Each team requires a leader (an employee can be the leader of more than 1 team).
A team's main defining feature is its name.

Update the schema, and create new CRUD endpoints to create and manage teams.

### Additional Notes:

* you may tackle these tasks in any order that you wish
* good documentation, commenting and git atiquette are appreciated
* good use of TypeScript types (e.g. reduced use of `any`) is appreciated
* should you be unsure about any of the tasks,
  please document your assumptions in the code
  (no further details will be provided form our end)
* good luck!

## Frontend Tasks

The task here is to implement the mimimal UI to manage
(create / read / edit / delete) and list employees.

(If you have enough time, and have completed all other tasks, you are welcome to
extend the UI to create and manage the teams endpoints too)

### Additional Notes:

* The aim here is to test your skills in React,
  and not assess your UX or UI design skills. As such, please avoid spending
  time on design elements such as colours, images and look or feel.
  A basic layout that is easily understood will suffice.
* you are free to interpret the requirements any way you wish,
  please include comments/notes about any assumptions you make.
* good documentation, commenting and git atiquette are appreciated
* good use of TypeScript types (e.g. reduced use of `any`) is appreciated
* should you be unsure about any of the tasks,
  please document your assumptions in the code
  (no further details will be provided form our end)
* good luck!
