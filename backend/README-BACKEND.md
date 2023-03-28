# MONGO db

## Creating your db
1. Create  mongodb account
2. Create the following:
    - `project` 
        - `cluster` = this is a collection of databases
            - `database`
                - `collection` = this is the tables
                    - `document` = this is the row in the table

## Connecting to your db
3. Create a user
4. Find the `CONNECT` button in your `cluster > database` dashboard
5. Find an option which will give you a linking url that looks something like this:
```mongodb+srv://homehunter:<password>@cluster0.hcs7q1d.mongodb.net/?retryWrites=true&w=majority```
6. See the `<password>` above? Change into the password you set for your user
7. Find a template for your backend directory. It should have the ff:
 - package.json
 - server.js
8. Populate your server.js with an `app.get('/<collection>',...` to fetch one data for testing.

