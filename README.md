# To-Do List App

This is a simple To-Do List application using React and Redux Toolkit. 
The app allow users to add, edit, delete, mark to do as completed, filter and search the todos.

### Node

- node version 20.11.0

### libraries

- Redux Toolkit
- React Redux
- axios
- tailwindcss



## Installation

1. Clone the project

```bash
git clone https://github.com/NishanShamika/To-Do-List-App
```

2. Go to the project directory

```bash
cd To-Do-List-App
```
3. Install dependencies

```bash
npm install
```
Run the project

```bash
npm run dev
```
## Redux Toolkit's role in this project

In this todo application, the redux tool kit helps to keep centralized data stored for the application. The application used a centralized todos state and several reducers to add, remove, edit, and delete todos(for state management). And also filter, search, loading, and error handling are also handled using the redux tool kit. createSlice, and createAsyncThunk functions from the redux tool used in this application.
