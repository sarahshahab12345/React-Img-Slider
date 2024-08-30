# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Image Slider Project Documentation

This project creates a simple image slider using React and Material UI. The slider displays a collection of images fetched from an external API and allows users to navigate through the images using arrow buttons.

### Project Overview

- **Framework:** React
- **Styling:** Material UI (MUI)
- **Icons:** React Icons (FaArrowLeft, FaArrowRight)
- **Data Fetching:** Axios

### Key Features

- **Image Slider:** Displays images fetched from an external API.
- **Navigation Controls:** Users can navigate through the images using left and right arrow buttons.
- **Dynamic Content:** Images are dynamically loaded and updated using state management in React.

### API Used for Data Fetching

- **API Endpoint:** Picsum API
- **URL:** [https://picsum.photos/v2/list?page=1&limit=6](https://picsum.photos/v2/list?page=1&limit=6)
- **Purpose:** Fetches a list of 6 random images.

### How the Project Works

#### Data Fetching:

- The `fetchData` function uses Axios to fetch images from the Picsum API when the component mounts (`useEffect`).
- The fetched data is stored in the `data` state using the `setdata` function.

#### Displaying Images:

- The slider uses the `selectedImg` state to keep track of the currently displayed image.
- Images are mapped and displayed based on the `selectedImg` value.

#### Navigation Controls:

- **Left Button (FaArrowLeft):** Navigates to the previous image. If on the first image, it loops to the last image.
- **Right Button (FaArrowRight):** Navigates to the next image. If on the last image, it loops back to the first image.

### Code Overview

#### State Management:

- `data`: Stores the fetched images.
- `selectedImg`: Keeps track of the currently selected image index.

#### Core Functions:

- `fetchData`: Fetches the images from the Picsum API using Axios.
- `useEffect`: Calls `fetchData` once when the component mounts to load the images.

#### UI Components:

- **Box:** A flexbox container from Material UI to layout the content.
- **Typography:** Displays the title of the image slider.
- **Button:** Wrapped around the navigation icons to handle image transitions.

### Usage

To use this project:

1. Clone the repository or copy the code into a new React project.
2. Run `npm install` to install necessary dependencies (`axios`, `@mui/material`, `react-icons`).
3. Start the development server with `npm start`.

### Sample Code Snippet

```jsx
const fetchData = async () => {
  let response = await axios.get("https://picsum.photos/v2/list?page=1&limit=6");
  setdata(response.data);
}

useEffect(() => {
  fetchData();
}, []);
```

## Customization

Change the Number of Images: Modify the limit parameter in the API URL to fetch more or fewer images.
Styling: Customize the appearance by changing the MUI sx properties.
Navigation Logic: Update the button click handlers to implement different navigation behaviors.
By following this documentation, you can understand how the image slider works and make customizations as needed.
