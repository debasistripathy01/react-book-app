# Architecture

1. Setting Architecture
  - Redux Folder
    - action.js
    - actionTypes.js
    - reducer.js
    - store.js
2. Setting the JSON server
  -  "server": "json-server --watch db.json -port 8080" 
3. Creating Folder and components
   - Pages
      - Book Page
   - Components 
    - Books ( need to fetch all the data present in the db.json)
    - Books POST request (afterwards)

4. Component Tree
    - App.js
      - AllRoute

        - Homepage
          - GET('/') to get Books (Filters, pagination, ) // using Backend system
          - Edit the Document PATCH('/:id')
          - SearchBar   (Throttling)
          - Results Data( Extend inside a div )
