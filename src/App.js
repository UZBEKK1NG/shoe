import React from 'react'
import "./App.css"
import imgOne from './assets/shoe3.png'
import imgTwo from './assets/shoe2.png'
import imgThree from './assets/shoe1.png'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"
const App = () => {
  return (
    <div className='box'>
      <div className='container'>


        <motion.div animate={{ x: 0, y: 0, rotate: 0, scale: 1 }} transition={{ duration: 1.2 }} initial={{ x: -500, y: 400, scale: 0.5 }} className='cardOne'>
          <div className='card_orange'>
            <h2>Hartbee</h2>
            <img src={imgTwo} alt="Shoe 1" />
          </div>
          <span><h2>Hartbee</h2><p>New</p> </span>
          <div className='icon'>
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaStar className="icons" />
          </div>
          <h3>SIZE</h3>
          <div className='numbers one'>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <h3>COLORS</h3>
          <div className='colors colorsOne'>
            <div></div>
            <div></div>
            <div></div>
            <div><span></span></div>
          </div>
          <div className='buttons'>
            <button><b>$35</b> <br /> <p>USD</p></button>
            <button>More Details</button>
          </div>
        </motion.div>

        <motion.div animate={{ x: 0, y: 0, scale: 1, rotate: 0 }} transition={{ duration: 1.2 }} initial={{ scale: 0.2, rotate: 150 }} className='cardOne'>
          <div className='card_purple'>
            <h2>Loafers</h2>
            <img src={imgOne} alt="Shoe 1" />
          </div>
          <span><h2>Loafers</h2><p>New</p> </span>
          <div className='icon'>
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaRegStar className="icons" />
          </div>
          <h3>SIZE</h3>
          <div className='numbers two'>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <h3>COLORS</h3>
          <div className='colors colorsTwo'>
            <div><span></span></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='buttons'>
            <button><b>$23.234</b> <br /> <p>USD</p></button>
            <button>More Details</button>
          </div>
        </motion.div>

        <motion.div animate={{ x: 0, y: 0, rotate: 0, scale: 1 }} transition={{ duration: 1.2 }} initial={{ x: 500, y: -400, scale: 0.5 }} className='cardOne'>
          <div className='card_pink'>
            <h2>Brogue</h2>
            <img src={imgThree} alt="Shoe 1" />
          </div>
          <span><h2>Brogue</h2></span>
          <div className='icon'>
            <FaStar className="icons" />
            <FaStar className="icons" />
            <FaRegStar className="icons" />
            <FaRegStar className="icons" />
            <FaRegStar className="icons" />
          </div>
          <h3>SIZE</h3>
          <div className='numbers three'>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <h3>COLORS</h3>
          <div className='colors colorsThree'>
            <div></div>
            <div></div>
            <div></div>
            <div><span></span></div>
          </div>
          <div className='buttons buttonsThree'>
            <button><b>$127</b> <br /> <p>USD</p></button>
            <button>More Details</button>
          </div>
        </motion.div>


      </div>
    </div>
  )
}

export default App