import React from "react";
import HeroImage from "./../assets/HeroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
    return(
    <>
        <div className="">
            <div>
                <h1>I'm a Full Stack Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem eum illum, 
                    officia vel animi, veniam alias voluptatum deleniti consequuntur nesciunt iusto commodi 
                    fugiat aut impedit, dolorum sint? Iure, obcaecati. Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Explicabo, quas. Quam consequuntur velit, voluptatem saepe accusantium quaerat. 
                    Saepe dolor pariatur, eius vitae non sequi corrupti magni, itaque in suscipit veniam?</p>
                <div>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img className="w-2/3 md:w-full mx-auto rounded-2xl"
                src={HeroImage} alt="My Profile" />
            </div>
        </div>
    </>) 
}
export default Home;