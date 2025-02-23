# To-Do List App

A simple To-Do List application where users can add tasks for today, the current week, and the current month. Users can update task titles and mark tasks as completed to remove them from the list. The app is built using Node.js, Express, EJS templating, and PostgreSQL for data persistence. It also utilizes middlewares like `body-parser` from npm.

## Features
- Add tasks for Today, This Week, and This Month.
- Update task titles.
- Mark tasks as completed to remove them from the list.
- Persistent storage using PostgreSQL.
- Server-side rendering with EJS templating.

## Technologies Used
- **Frontend**: EJS, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Middleware**: body-parser

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or later recommended)
- PostgreSQL (Ensure it's running and accessible)

### Steps to Install and Run
1. **Clone the repository**
   ```sh
   git clone https://github.com/coderPriyanshu007/todo-list-app.git
   cd todo-list-app
   ```

2. **Install dependencies**
   ```sh
   npm i
   ```

3. **Set up the database**
   - Create a PostgreSQL database.
   - Run sql scrips from queries.sql to create required table in database.
   - Modify database setup in index.js, update database name and password for postgres.
   - Check db setup properly to avoid any errors.

4. **Start the server**
   ```sh
   node index.js
   ```

5. **Access the app**
   The localhost server link will appear in the terminal, hold "ctrl" key and click the link to open the app or just open a browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
- Enter a task under "Today," "This Week," or "This Month."
- Click on edit button  to edit task's title.
- Check off completed tasks to remove them from the list.

## License
This project is licensed under the MIT License.

