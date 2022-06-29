# React-Practice-Work

# HTML Website to React SPA

In this Task i have converted HTML website to React Single Page Application.

Original Site: https://sahiljanbandhu.github.io/

React SPA Version of above Site: https://html-to-react-spa.netlify.app/


### Note When Hosting React SPA
<details>
  <summary><b>Note When Hosting React SPA</b></summary>
  <br />
  If your SPA is build with React then React Router handles routing on the client side (browser) when you visit internal page (e.g. http://localhost:3000/about) but once you host your SPA on Netlify (server-side) the routing logic has to be modified because Netlify does not know how to handle the route.

Create a file named _redirects without any extension inside public folder.

Copy paste the below content in the file

/*    /index.html   200  

</details>
