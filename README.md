
Pharmacy Management System (Angular Frontend)
This project is a Pharmacy Management System developed using Angular for the frontend. It aims to provide a comprehensive solution for managing various aspects of a pharmacy, including user roles such as Head, Admin, and Employee. The system enables efficient management of admins, pharmacies, employees, stock, manufacturers, shippers, customers, and orders.

User Roles
1. Head :-
The Head role has the highest level of authority in the system. The Head is responsible for managing admins, pharmacies, and employee loans. They have access to all functionalities and can perform the following tasks:
Add, edit, and remove admins
Add, edit, and remove pharmacies
Manage employee loans

2. Admin:-
The Admin role focuses on managing employees, stock, manufacturers, and shippers. Admins have access to the following functionalities:
Add, edit, and remove employees
Manage employee details such as personal information, roles, and permissions
Handle stock management, including adding and updating stock information
Manage manufacturers and their shippers, including adding, editing, and removing details

3. Employee:-
The Employee role is primarily responsible for managing customers and their orders. Employees have the following capabilities:

Add, edit, and remove customers
Manage customer information, including personal details and contact information

Features
This Pharmacy Management System offers the following features:

User Authentication: The system provides secure user authentication and authorization, ensuring that each user can access only the functionalities assigned to their respective roles.

Stock Management: The system provides functionality to manage the pharmacy's stock efficiently, including adding new stock items, updating stock levels, and monitoring inventory.

Manufacturer and Shipper Management: Admin users can add, edit, and remove manufacturers and their associated shippers. This feature helps in maintaining accurate information about suppliers and ensuring smooth operations.

Loan Management: The Head user has the ability to manage employee loans, including approving, rejecting, and tracking loan requests.

Order Management: Employees can process customer orders, update order statuses, and manage order-related tasks, such as cancellations and returns.

Installation
To set up the Pharmacy Management System locally, follow these steps:

Clone the repository from GitHub:

git clone https://github.com/AsadMeh146/Pharmacy-FrontEnd.git

Install the necessary dependencies:

npm install
Configure the backend: Please refer to the README file of the backend repository for instructions on setting up the server-side of the application.

Run the application:

ng serve

Access the application in your web browser at http://localhost:4200.

Conclusion
The Pharmacy Management System built with Angular provides a comprehensive solution for managing different aspects of a pharmacy. With user roles such as Head, Admin, and Employee, the system ensures efficient management of admins, pharmacies, employees, stock, manufacturers, shippers, customers, and orders. By following the installation instructions, you can easily set up and start using this system for your pharmacy management needs.
