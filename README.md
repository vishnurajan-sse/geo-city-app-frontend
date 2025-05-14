# Geo City Application

## Requirement 
Build and deploy a web application in React to an Azure app service with the basic styling, unit test and use of 1 or 2 hooks either as part of the page, or using a separate app.

### Task:

1. Create a simple single page web application in React

      1.1 Consume the following JSON file (list of cities): https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json


      1.2 Render the list in a tabular format, displaying all fields, loading 10 rows initially sorted by the "name" field, loading further batches of 10 on a button click, like an infinity loader. 


      1.3 The layout of the page should be a 2 column layout with the tabular City data in the first column and some text related to that City, left aligned, in the second column. This text should be dynamic, based on a row click and can be something like - "The city of [London] has GeoNameID: [2643743] and is in Country: [United Kingdom].".

      1.4 The content of the table cells should not wrap for smaller screen sizes in a responsive layout.

      1.5 The UI should have separation of styles from the presentation layer. The tabular data should have alternated background colour for the table rows.


          
2. Ideally, deploy the application to a Cloud platform web app service (e.g. Azure)  

      2.1 Provision an App service

      2.2 Push application code to the app service.

      Note: If this is not possible, a localhost demo will be acceptable.

3. Demo the deployed application.


## Getting Started

### Prerequisites

- Node.js
- npm
- VScode
- Git

### 1. Clone Repo

```bash
git clone git clone https://github.com/vishnurajan-sse/geo-city-app-frontend.git
```

### 2. Install Dependencies

```bash
npm install 
```
### 3. Run the Development Server
```bash
npm run dev 
```

Runs the app in development mode.
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.


### 3. Run Test
```bash
npm run test 
```

This will show the test report in the terminal console

### Reference Links

- [Vite as a frontend build tool](https://vite.dev/guide/)
- [Tailwind css for styling the application ](https://tailwindcss.com/docs/installation/using-vite)
- [Ref - For easy integation of unit test case using vitest and react testing library ](https://medium.com/@kimtai.developer/react-typescript-vite-testing-with-vitest-react-testing-library-rtl-and-mock-service-worker-6f5790eedf84)
- [Ref - Tailwind compoenets that can be used from flowbite ](https://flowbite.com/docs/components/tables/)
- [Nominatim Reverse geocoding generates an address from a coordinate given as latitude and longitude. ](https://nominatim.org/release-docs/latest/api/Reverse/)