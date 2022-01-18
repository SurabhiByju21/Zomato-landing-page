import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from 'react-router-dom';

//HOC imports
import HomeLayoutHOC from './HOC/home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';

//Pages
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  return (
    <>
      <Route path = "/" exact>
      <Redirect to ="/delivery" />
      </Route>
        <HomeLayoutHOC exact component = {HomePage} path="/"/>
        <HomeLayoutHOC exact component = {HomePage} path="/:type"/>
        <RestaurantLayoutHoc path = "/restaurant/:id" exact component ={Redirect} />
        <RestaurantLayoutHoc path = "/restaurant/:id/overview" exact component ={HomePage} />
        <RestaurantLayoutHoc path = "/restaurant/:id/order-online" exact component ={HomePage} />
        <RestaurantLayoutHoc path = "/restaurant/:id/menu" exact component ={HomePage} />
        <RestaurantLayoutHoc path = "/restaurant/:id/photos" exact component ={HomePage} />
    </>
  );
}

export default App;