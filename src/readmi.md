# Name: Dev Stack Builder Website

## Description: Dev Stack Builder is a responsive web application where developers can explore different technologies and build their ideal development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

- Browse technologies with category, difficulty, rating, and badge information.
- Add technologies to your own stack and remove them individually or all at once.
- Fully responsive design for mobile, tablet, and desktop.

## Answer of some Questions

1. What is JSX, and why is it used in React?
   Answer: Jsx is syntax thats lets us write HTML code inside javascript. its makes react ul easier to write and understand.

2. What is the difference between props and state?
   Answer: props are data passed parent component to child component, State is data that a component manage and can change.

3. What does the `useState` hook do, and where did you use it in this project?
   Answer: useState is used to create and manage changing data in a component. i used it to manage the technology stack in this project.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   Answer: useEffect is used to run code after rendering. I did not use it in this project. I used fetch() and Suspense to load the JSON data.

5. Why does every item in a `.map()` list need a unique `key` prop?
   Answer: A unique key helps React identify each item in a list. It helps react update the list correctly and efficiently.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   Answer: conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when there are no items in the stack. example: {isSelected.length === 0 ? (
   <p className="font-jakarta text-[12px] text-[#64748B] mb-4 mt-1">
   No technologies selected yet.
   </p>
   ) : (
   <p className="font-jakarta text-[12px] text-[#64748B] mb-4 mt-1">
   {isSelected.length} technologies selected yet.
   </p>
   )}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   Answer: We pass data from parent to child using props. A child can send data back by calling a function passed from the parent as a prop.
