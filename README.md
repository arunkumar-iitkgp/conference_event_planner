Conference Expense Planner
Conference Expense Planner is a React-based web application that helps users efficiently plan the cost of organizing a conference. It provides an interactive interface to select venue rooms, add-ons (AV equipment), and meal options for attendees, while displaying a live summary of the total cost.

🚀 Features

🎯 Venue Selection: Choose from various available halls, including limited-capacity options (e.g., Auditorium with a max of 3).
🎛️ Add-ons: Select additional items such as projectors, microphones, and speakers.
🍽️ Meal Plans: Choose meal options for a specified number of attendees.
💰 Live Cost Summary: Displays dynamic total costs per section and overall.
✅ Responsive UI: Clean and interactive user experience using React hooks and Redux.

🛠️ Built With

React – Frontend UI

Redux Toolkit – State management for venue, AV, and meals
CSS – Styling and animations

🧠 How It Works

The user clicks Get Started from the landing page.
Sections for Venue, Add-ons, and Meals are revealed with a smooth transition.
Users add or remove items using buttons.
A Show Details button allows reviewing selected items and the overall cost.
All logic is managed using Redux slices to ensure consistent state updates.

🧪 Setup & Installation

git clone https://github.com/YOUR_USERNAME/conference_event_planner.git
cd conference_event_planner
npm install
npm start
