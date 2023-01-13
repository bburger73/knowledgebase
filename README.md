One unified project that requires an api and front end.
Build it in all languages. 
Explicitly define endpoints and calls required.
Choose ONE lang/framework to learn for ONE part of the project


Build to the MVC structure SOLID principles... Maybe.


FE-Basic Signin With Images and Movement
BE-Basic Signin With Security
DB-Basic Signin With Security


FE = Language ( + Framework )
BE = Language ( + Framework )
DB = Database

FE pages -- should be same as current autobuild:
    Forgot
    Recover
    Sign Up
    Sign In
    Dashboard Sign Out
    Settings

BE parts:
    CRUD user_account
        sign in
            manual
            auto
        sign up
        delete account
        update account
            settings
    CRUD user_pass
        should all be handled through user_account
    CRUD user_forgot
        update account
            settings
            recovery
        forgot
    CRUD user_push
        should implement a push note call to an api
    Images Hosted
        Local
        url-local
        url-global

DB parts:
    user_account
        `user_id`, 
        `authority`, 
        `email`, 
        `name`, 
        `notification`, 
        `create_date`, 
        `modified_date`, 
        `delete_date`
    user_forgot
        `user_id`, 
        `token`, 
        `create_date`, 
        `expire_date`,
        `modified_date`, 
        `delete_date`
    user_pass
        `user_id`, 
        `password`,
        `create_date`, 
        `expire_date`,
        `modified_date`, 
        `delete_date`
    user_push
        `user_id`, 
        `token`,
        `create_date`, 
        `modified_date`, 
        `delete_date`
    user_token
        `user_id`, 
        `token`, 
        `reset_token`, 
        `create_date`, 
        `expire_date`,
        `modified_date`, 
        `delete_date`


Notes To Take:
    the whole stack used
    the target to learn in the stack
    how to initialize any given project
    how to start any given project
    how to access the project after it starts
    Neuances noticed during development
    how to import classes
    basics of syntax



publish the apis to be accessed by **language**.burgertechnologies.com
publish the front end to be accessed by **language**.burgertechnologies.com
publish dbs to... may need to set up an AWS account...






