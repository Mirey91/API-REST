# REST API by Mirey Morales

For all of this instructions, change your work directory to this once it's uncompressed.

## REST API instalation instructions
- Make sure you have the v12 or superior version of Node installed
- Install the source code of the app running `npm i`
- Run the command `npm run dev` 
- Run the Database installation instructions
## Database installation instructions
- Make sure you have the version 6 or superior of MySQL installed.
- Enter the MySQL Command Line Interface. You should see the this prompt: `mysql>`
- In the MySQL CLI run the following command (Make sure you changed the work directory to this): 
`source pet_store_mirey_morales.sql`  
## How to use the REST API
- Open Postman
- Select the method you want to use selecc
(GET/POST)
- Make sure you have in the section of URL `localhost/3000/pets`
- Then send the test 
- For the POST method on the body part, this is an example 
    {
    "name": "Hamster ball",
    "tag": "small ball "
}
