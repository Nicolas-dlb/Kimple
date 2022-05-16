import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/pictures/k_loader.png";

function Sidebar(): JSX.Element {
  return (
    <div className="sidebar">
      <div className="logoWrapper">
        <img src={logo} alt="" />
      </div>
      <nav>
        <i className="fa-solid fa-angles-right" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <path d="M452.04 136.22c-62.71 7.48-114.5 22.44-167.81 48.52-49.86 24.55-91.48 54.08-130.41 93.21C77.1 354.47 30.31 447.87 13.43 558.33c-4.6 30.3-4.6 104.91.19 135.78 7.1 46.79 21.67 95.89 40.85 136.94 8.82 19.37 13.62 25.7 22.06 30.11 7.86 4.03 839.06 4.03 846.92 0 8.44-4.41 13.23-10.74 22.06-30.11 19.37-41.43 34.33-92.06 41.04-138.85 4.6-31.64 4.6-102.41 0-133.29-16.3-109.7-63.86-204.83-140.39-280.96-73.07-72.69-162.06-118.53-266.96-137.32-18.41-3.45-31.84-4.22-71.54-4.6-26.85-.39-51.97-.2-55.62.19zm17.26 93.2c0 38.36 2.11 45.64 14.19 53.32 15.34 9.4 36.44 3.45 43.54-12.27 3.07-6.71 3.64-12.85 3.64-41.04v-33.18l10.16 1.34c51.4 5.95 96.09 17.84 136.17 36.25l10.74 4.99-12.65 21.47c-20.33 34.71-22.25 39.32-21.1 48.91 2.49 22.06 27.81 34.71 45.64 22.82 7.1-4.6 10.93-10.36 29.34-42l11.89-20.52 16.11 12.08c21.67 16.11 42.77 35.29 60.6 54.85 14.77 16.3 37.21 45.26 37.21 47.56 0 .77-11.51 7.86-25.51 15.73-30.3 17.26-37.01 22.82-39.7 32.8-4.41 16.49 5.56 33.75 21.86 37.97 11.31 2.88 16.11 1.15 47.37-17.07 14.58-8.44 26.85-15.34 27.43-15.34 1.72 0 18.22 41.62 23.97 60.41 9.4 30.88 17.45 72.3 17.45 90.14v6.71h-34.14c-29.54 0-34.91.38-40.66 3.64-7.86 4.03-15.34 17.07-15.34 26.47 0 9.4 6.52 20.52 14.77 25.7 6.9 4.22 9.59 4.6 41.62 5.18l34.33.77-1.34 14.58c-2.88 33.18-17.45 89.37-31.64 121.78l-3.84 9.01-391.82-.38-391.62-.58-7.86-20.14c-13.62-34.71-23.97-76.91-27.04-109.7l-1.34-14.58 34.33-.77c32.22-.58 34.71-.77 41.81-5.18 8.06-4.99 14.38-16.49 14.58-26.27 0-8.82-7.67-21.86-15.34-25.89-5.75-3.26-11.12-3.64-41.04-3.64H71.73l1.34-15.92c1.92-23.59 9.78-59.84 19.18-88.22 7.1-21.48 18.6-50.06 21.1-52.74.58-.38 12.85 6.33 27.62 14.96 31.45 18.22 36.25 19.95 47.56 17.07 16.3-4.22 26.27-21.48 21.86-37.97-2.69-9.97-9.4-15.54-39.7-32.8-14-7.86-25.51-14.96-25.51-15.73 0-2.3 22.63-31.45 36.63-46.8 17.07-18.99 40.08-39.89 60.99-55.62 8.82-6.71 16.3-12.08 16.49-11.89.19.38 7.1 12.27 15.34 26.47 8.06 14.19 16.69 28 18.99 30.3 17.45 19.37 49.48 8.82 52.36-17.26 1.15-9.78 0-12.47-20.71-47.95l-13.04-22.44 10.74-4.99c40.47-18.41 103.18-34.91 143.07-37.21 3.07-.17 3.26 2.7 3.26 32.81z" />
          <path d="M673.94 450.36c-16.69 10.17-40.47 27.62-81.89 60.6-51.78 41.42-128.5 105.67-135.78 113.92-6.33 7.29-11.89 22.63-11.89 32.8 0 11.31 5.56 25.12 13.81 34.52 18.03 20.33 45.65 24.16 70.38 9.59 11.32-6.71 123.13-177.98 149.21-228.61 16.49-32.03 15.91-34.71-3.84-22.82z" />
        </svg>
        <i className="fa-solid fa-gauge" />
        <i className="fa-regular fa-copy" />
        <i className="fa-regular fa-paper-plane" />
        <i className="fa-solid fa-globe" />
        <i className="fa-solid fa-chart-line" />
        <i className="fa-solid fa-shield-halved" />
        <i className="fa-regular fa-circle-user" />
        <i className="fa-regular fa-circle-question" />
        <i className="fa-regular fa-lightbulb" />
      </nav>
    </div>
  );
}

export default Sidebar;
