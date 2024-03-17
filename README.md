# Project Name: devDirect
Coding Test for Junior Frontend Developer from I-ON Communications

## Getting Started
 Node.js: v20.9.0 (v18 or later)
 npm (v6 or later) or yarn (v1.22 or later)

 ### Installation
1. Clone the repository to your local machine.
  git clone https://github.com/nlduyavoda/devDirect.git

2. Navigate to the project directory:
  cd project-name

3. Install the dependencies:
  npm install # or yarn install
  
4. Create a .env file in the root directory and define your environment variables:
   
  BASE_DIRECTORY=/YOUR-PATH/devDirect/pages/api/
  example: BASE_DIRECTORY=/Users/nguyenduy/Documents/devDirect/pages/api/
  
Architecture (follow nextjs Project Structure):

```markdown
pages/
|-- index.js
|-- admin/
|   |-- index.js
|   |-- methods.js
|-- api/
|   |-- data.json
|   |-- items.js
|-- components/
|   |-- Button.js
|   |-- Card.js
|   |-- Each.js
|   |-- PrimaryContent.js
|   |-- RightComponent.js
|   |-- SplitScreen.js
|   |-- SplitScreenVertical.js
|   |-- Tag.js
|-- customer/
|   |-- index.js
|-- index.js
```

older Structure
The project follows this folder structure:

Certainly! Here's the folder structure represented in Markdown format:

```markdown
# Folder Structure

```
- **pages/**: Contains all the pages of the application.
  - `index.js`: Main landing page of the application.
- **pages/admin/**: Admin-related pages.
  - `index.js`: Admin dashboard page.
  - `methods.js`: Methods related to admin functionalities.
- **pages/customer/**: Customer-related pages.
  - `index.js`: Customer dashboard page.
- **pages/api/**: API routes.
  - `data.json`: Sample JSON data for API responses.
  - `items.js`: API route handler for items.
- **components/**: Reusable React components.
  - `Button.js`: Button component.
  - `Card.js`: Card component.
  - `Each.js`: Each component.
  - `PrimaryContent.js`: PrimaryContent component.
  - `RightComponent.js`: RightComponent component.
  - `SplitScreen.js`: SplitScreen component.
  - `SplitScreenVertical.js`: SplitScreenVertical component.
  - `Tag.js`: Tag component.

React: Design Patterns
1. Layout Components (Split-screen components)
2. Component composition
3. Controlled vs. uncontrolled components
4. Higher-order components

Estimate for 2 days: 11 points (11 hours)
day 1: 
-   plannning and listout (2 points)
-   init project and build the frame (build some layout and some UI components) (3 points)
- day 2:
-   apply logic function. and fix bugs (5 point)
-   push code, write document (1 point).


Getting Started



