import React, { useEffect } from 'react'
import './Home.css'
import Modal from '../components/Modal'
import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div className="">
        <div className="hero flex flex-col items-center justify-center text-2xl" >
          <h2 className='font-extrabold'>Welcome to my Recipe Collection!</h2>
          <NavLink to={"/Recipe"}><p>Search for mouth watering recipes to satisfy your cravings</p></NavLink>

          
        </div>
      </div>


      <div className="wrapper">
        <div className="grid-container">
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
            <Modal/>  
          </div>
          
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
          <div className="card">
            <h2> Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde, ipsam recusandae, at ut architecto natus corrupti explicabo, mollitia modi ea aliquam obcaecati quae dolorem voluptates soluta dolor culpa. Tenetur aliquam repellendus, eius perferendis non impedit fuga inventore nulla delectus cupiditate culpa quis provident enim doloremque voluptatum praesentium, totam velit. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
