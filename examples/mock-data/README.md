# JSON Server

Today we will look into a very handy tool json-server, which can give you a mock rest json server in a minute. In a regular enterprise application, you work with many teams and third party APIs. Imagine you have to call a third party restful web service that will get you JSON data to work on. You are in a tight schedule, so you can’t wait for them to finish their work and then start your own. If you wish to have a mockup Rest Web service in place to get the demo data for you, then json-server is the tool you are looking for.

JSON Server is a Node Module that you can use to create demo rest json webservice in less than a minute. All you need is a JSON file for sample data.

## Installing JSON Server

You should have NPM installed on your machine. If not, then refer this post to install NPM. Below shows the one liner command to install json-server with output on my machine.

```bash
$ npm install -D json-server
```

## Run JSON Server
Now it’s time to start our json-server. Below is a sample file with my employees json data.

```json
{
  "employees": [
    {
      "id": 1,
      "name": "Pankaj",
      "salary": "10000"
    },
    {
      "name": "David",
      "salary": "5000",
      "id": 2
    }
  ]
}
```

Important point here is the name of array i.e employees. JSON server will create the REST APIs based on this. Let’s start our json-server with above file.

```bash
$ npx json-server --watch db.json
```

### JSON Server GET - Read All Employees
Now we can access our employees data using below URL.

```bash
$ curl -X GET -H "Content-Type: application/json"  "https://localhost:3000/employees"
[
  {
    "id": 1,
    "name": "Pankaj",
    "salary": "10000"
  },
  {
    "name": "David",
    "salary": "5000",
    "id": 2
  }
]
```

### Get Employee based on ID from json-server

```bash
$ curl -X GET -H "Content-Type: application/json"  "https://localhost:3000/employees/1"
{
  "id": 1,
  "name": "Pankaj",
  "salary": "10000"
}
```

### JSON Server POST - Create an Employee

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "Lisa","salary": "2000"}' "https://localhost:3000/employees"
{
  "name": "Lisa",
  "salary": 2000,
  "id": 3
}
```

### JSON Server PUT - Update Employee Data

```bash
$ curl -XPUT -H "Content-Type: application/json" -d '{"name": "Lisa", "salary": "8000"}' "https://localhost:3000/employees/3"
{
  "name": "Lisa",
  "salary": 8000,
  "id": 3
}
```

### JSON Server DELETE - Delete an Employee

```bash
$ curl -X DELETE -H "Content-Type: application/json"  "https://localhost:3000/employees/2"
{}
```
