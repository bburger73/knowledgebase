# Building Dreams
## Idea

### The idea is to:
Make containers to hold all of the APIs, UIs, and DBs that I have created
* make api's that always allow access on the same port/url:
    - php          192.168.0.88:80
    - go           192.168.0.88:80
    - node         192.168.0.88:80
    - python       192.168.0.88:80
    - rust         192.168.0.88:80
    - tomcat       192.168.0.88:80
    - .net         192.168.0.88:80
    - c/c++        192.168.0.88:80

* make db's that always allow access on the same port/url:
    - MySQL        192.168.0.88:3306
    - SQL          192.168.0.88:1433
    - PostgreSQL   192.168.0.88:5432
    - Redis        192.168.0.88:6379
    - MariaDB      192.168.0.88:3306
    - DynamoDB     192.168.0.88:8000
    - Cassandra    192.168.0.88:7000
    - MongoDB      192.168.0.88:27017

* make ui's that use the same url and port per language:
    - angular      192.168.0.88:4200
    - react        192.168.0.88:3000
    - react native 192.168.0.88:19000
    - rubyonrails  192.168.0.88:3000
    - vue          192.168.0.88:8080
    - .net         192.168.0.88:7097

#### This setup should let me:
* use the local url/ip localhost and 192.168.0.88 respectively
* use the port from dev runs of the frontend frameworks
* goal is to use the same exact urls for all api calls http://192.168.0.88/
* keep a single postman for each api call (Not language)  ->  http://192.168.0.88/
* have config files for each api connection to databases (start dbs in php)






