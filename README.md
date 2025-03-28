# TaskDetails

A feature-rich task management application with sorting, filtering, and local storage persistence.

## Key Features
- **Full CRUD Operations**: Create, Read, Update, Delete tasks
- **Smart Sorting**: Tasks automatically sorted by deadline
- **Status Tracking**: Toggle between Completed/Pending status
- **Advanced Filtering**: Filter tasks by completion status
- **Persistent Storage**: All data saved in localStorage
- **Smooth UI**: Scroll-to-form editing and clean table display

## Technologies Used
- HTML
- CSS
- JavaScript (ES6+)


##  Technical Implementation

### Core Functions
- `ts()`: Renders the task table with deadline sorting
- `add(n)`: Handles task creation (n=0) and filtering (n=1)
- `toggle(x,y,z)`: Manages status toggling with context awareness (y=1 while in filtering) and  (y=0 while in ts())
- `edit(x,y,x)`: Prepares form for editing (y=1 while in filtering) and (y=0 while in ts()) with scroll-to behavior to form
- `update()`: Saves edited tasks back to storage
- `deleter(x,y)`: Handles task deletion with filter awareness (y=-1 while in ts()) and (y=originalindex of data while in filtering)
- `clearFilter()`: Resets the task view to normal ts()

### Data Structure
```javascript
{
  task: "String",
  description: "String",
  deadline: "YYYY-MM-DD",
  status: "Pending|Completed"
}

TASKTDETAILS/
├── index.html        # UI Structure
├── style.css        # Styling
├── script.js        # Core logic 
└── README.md        # Documentation (this file)

## Installation
1.Clone the repository:
   bash
   git clone <https://github.com/GunaKuppuchamy/TaskDetails.git>


2.Navigate to the project
bash
cd taskdetails

3.open index.html in your browser to visualize the output.
## Usage 
1. Enter a task name and description in the input fields.
2. Select a due date for the task.
3. Click the "Add Task"button to add the task to the list.
4. To edit a task, click the "Edit" button next to the task you want to modify.
5. To delete a task, click the "Delete" button next to the task.
6. Use the filter button to find specific tasks by status.
7. Use the filter dropdown to view tasks based on their status (all tasks, completed tasks, pending tasks).

