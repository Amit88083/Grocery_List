Overview	
The Grocery List Manager is a web application that allows users to manage their grocery lists. Users can add, edit, and delete grocery items with their quantities and prices. The application also calculates the total cost of the grocery list based on the quantity and price of each item.
Features
1. View Grocery List
•	The main dashboard displays the list of grocery items with their respective quantities and prices. 
•	The total cost of the grocery list is displayed at the top of the dashboard.
2. Add Grocery Item
•	Users can add a new grocery item to the list by entering the item name, quantity, and price.
•	Clicking the "+" button will add the item to the list.
3. Edit Grocery Item
•	Users can edit an existing grocery item by clicking the edit icon next to the item. 
•	The item's name, quantity, and price will be loaded into the input fields, allowing the user to make changes.
•	Clicking the "up" button will update the item with the edited information.
4. Delete Grocery Item
•	Users can remove a grocery item from the list by clicking the delete icon next to the item.
5. Unique Text Validation
•	The application ensures that each grocery item's name is unique, regardless of capitalization (i.e., case-insensitive).
6. Input Validation
•	The application validates user inputs to ensure that quantity and price are non-negative numbers.


Technologies Used
Frontend:
•	React (JavaScript library for building user interfaces)

•	Axios (HTTP client for making API requests)

Backend:
•	Node.js (JavaScript runtime environment)
•	Express.js (Web application framework for Node.js)
•	MongoDB (NoSQL database for storing grocery items)

