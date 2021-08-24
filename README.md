# CRUDfiredevs

## Install and serve

This API was deployed with [express.js](https://expressjs.com/). For serve, download proyect and execute:

    npm install
    node server.js

App start serve at [http://localhost:3080](http://localhost:3080), it was deployed using **Node** *vv10.19.0* and **MySQL** *mysql-server v8.0.26*. Tables used have this data structure.

name: students 

| Field     | Type        | Null | Key | Default | Extra          |
| --------- | ----------- | ---- | --- | ------- | -------------- |
| id        | int         | NO   | PRI | NULL    | auto_increment |
| name      | varchar(250)| NO   |     | NULL    |                |
| city      | varchar(250)| NO   |     | NULL    |                |
| email     | varchar(80) | NO   |     | NULL    |                |
| age       | tinyint     | NO   |     | NULL    |                |
| sex       | varchar(20) | NO   |     | NULL    |                |
| group_id  | varchar(20) | NO   |     | NULL    |                |
| born_date | date        | NO   |     | NULL    |                |

&nbsp;
name: group_data 

| Field     | Type        | Null | Key | Default | Extra          |
| --------- | ----------- | ---- | --- | ------- | -------------- |
| id        | int         | NO   | PRI | NULL    | auto_increment |
| name      | varchar(40) | NO   |     | NULL    |                |
| teacher   | varchar(40) | NO   |     | NULL    |                |

&nbsp;

## Response
It response only to addresses in table below, it does with json data or message with info about request.

| Address                     | GET | POST | PUT | DELETE |
| --------------------------- | --- | ---- | --- | ------ |
| localhost:3080              |  X  |      |     |        |
| localhost:3080/students     |  X  |   X  |     |        |
| localhost:3080/students/:id |  X  |      |  X  |    X   |
| localhost:3080/groups       |  X  |   X  |     |        |
| localhost:3080/groups/:id   |  X  |      |  X  |    X   |

&nbsp;

### GET
* In root address **/** a message "Hello World" that say if server is running.
* In **/students** return all data in students table.
* In **/students/:id** return all data about student with id.
* In **/groups** return all data in group_data table.
* In **/groups/:id** return all data about group with id.

### POST
* Is used for create data for a new student or new group.
* In request body should by all data for new entry.

### PUT 
* Used for update data for a existed student.
* In request body should insert all updated data.

### DELETE
* Used for remove all entry of a student with specific id.

