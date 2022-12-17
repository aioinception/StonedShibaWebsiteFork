import React from 'react'
import './App.css';
import './css/carrousel.css';
import './libs/countdown.js';
import video from "./images/smoke-video.mp4"
import logo from "./images/shiba-logo.png"
import { useState } from 'react';
import Question from "../src/Detail/Accordion"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { Pagination } from "swiper";




function App() {


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>

            <div className="App">
                <header>
                    <ul>
                        <li><a href="#the-story-section">Story</a></li>
                        <li><a href="#dreams-section">Whitepaper</a></li>
                        <li ><a className='inception' href="https://www.inceptionaio.io/">Inception</a></li>
                        <li><a href="#roadmap-section">Roadmap</a></li>
                        <li><a href="#collaborators-section">Team</a></li>

                    </ul>

                </header>



                <main>





                    <section id="title-section">


                        <img className='logo-shiba' src={logo} alt="" />
                        <video muted autoPlay loop>

                            <source src={video} />
                        </video>

                        {/* <a href="#intro-background-section" id="scroll-to-adventure-action">Scroll to adventure</a> */}

                    </section>
                    {/* <section id="intro-background-section">
                        <img src={require("./images/intro-background.jpg")} alt="AstroGuy mirando a la tierra" />
                    </section> */}
                    <section id="the-story-section">
                        <div className="title">
                            <h3>Story</h3>
                            <h3 className='shadow'>Story</h3>
                        </div>
                        <div className="description">
                            <p>


                                Long ago, Inu-tochi was a thriving and prosperous ecosystem, with lush green plains rich in a variety of greenery. Within these plains lived a proud and glorious tribe of canines known as the Shibas. The Shibas were very protective of their lands and would destroy any foe who dared to intrude and pose a threat. With lightning-fast kicks and a ferocity that could sever limbs with one swift bite, the Shibas were a force to be reckoned with. Realizing the greatness of their power, the Shibas became arrogant and proud. However, this power was not their own. It was derived from a plant found in a remote area of the Inu-tochi plains that only the Shibas knew of. The effects of consuming these weeds were said to remove all pain, fear, and any sense of weakness, subsequently making The Shibas an unstoppable force of nature. <br />


                                <br />
                                <br />
                                All was well in Inu-tochi and the Shibas were thriving as peace and love spread throughout the land. That is, until a nefarious gang of outsiders acted on a plan to invade the plains of Inu-tochi and take down the Shibas.This gang of unknown origin overwhelmed the Shibas with sheer force and a blaze set to the once-green fields of Inu-tochi. The entire valley was reduced to ash, including the powerful weeds that had been the vital source of the Shibas power. The ambush left many of the surviving Shibas broken and injured, forced into a life of aimless wandering. Many more fell victim to the passing of time with untreated wounds or lack of food and water, while others simply lost the will to go on. The days were long and dark, and the remaining Shibas traveled with no direction and no destination, hope dwindling more with each passing day.
                                <br />
                                <br />
                                <br />
                                Finally, the Shibas found themselves faced with a thick mysterious fog, and could faintly hear sounds of laughter and friendly conversation coming from within. The Shibas were well worn down, but naturally curious. They mustered up what little strength they had left and made way towards the chatter, cautious and ready to fight. As the Shibas got closer to the noise, they realized they had stumbled upon a hidden civilization full of beings of all different origins–there were goats, apes, cets, and even humans! The Shibas, being warriors at heart, took a defensive stance and considered trying to seize this new territory for themselves before remembering their own recent turmoil. They would not impose the same will onto another innocent tribe, if that was indeed what they were. The shibas felt defeated and confused at the prospect of a new life among these beings. They had been on their own for so long, even before the attack. Just as they were turning to leave, feeling unworthy of this newfound utopia, a friendly hand reached out and offered them a sample of what this mysterious new land had to offer. This collective, known as Inception AIO, witnessed the rise and fall of the resilient race of Shibas, and offered the Shibas a chance to reclaim their former glory and rise to their true potential.

                                <br />
                                <br />
                                With the help of InceptionAIO, the Shibas are ready to blaze. <i className="fa-solid fa-cannabis"></i>

                            </p>
                        </div>
                        <img className="thestory-bg" src={require("./images/pruebaexport229.jfif")} alt="AstroGuys" />
                    </section>
                    <section id="dreams-section">
                        <div className="title">
                            <h3 className='whitepaper'>WHITEPAPER</h3>

                        </div>
                        <div className="description">
                            <p>
                                Check the <a className='a-whitepaper' href="https://docs.google.com/document/d/1t9bwarnNN063VsOIbJ0S6rYC6ARAXAirqYsGzpK_8_E/edit?usp=sharing">WHITEPAPER</a>
                            </p>
                        </div>
                    </section>



                    <section id="carousel">

                        <div className="slider">
                            <div className="slider-track">

                                <div className="slide">
                                    <img src={require("./images/nft1.png")} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={require("./images/nft2.png")} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={require("./images/nft3.png")} alt="" />
                                </div>

                                <div className="slide mobile ">
                                    <img src={require("./images/nft4.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft5.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft6.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft7.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft8.png")} alt="" />
                                </div>


                                <div className="slide">
                                    <img src={require("./images/nft1.png")} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={require("./images/nft2.png")} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={require("./images/nft3.png")} alt="" />
                                </div>

                                <div className="slide mobile ">
                                    <img src={require("./images/nft4.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft5.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft6.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft7.png")} alt="" />
                                </div>
                                <div className="slide mobile">
                                    <img src={require("./images/nft8.png")} alt="" />
                                </div>





                            </div>
                        </div>

                    </section>

               


                           


                 







                    <section id="roadmap-section">





                        <div className="title">

                            <h3>Roadmap</h3>
                        </div>

                        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {/* <SwiperSlide><img className='img-slider' src={require("./images/roadd1.png")} alt="" /></SwiperSlide> */}
                        <SwiperSlide><img className='img-slider' src="https://cdn.discordapp.com/attachments/1027679004209193061/1052699203769475092/CB4B6AE8-BBFA-4897-ABCC-48602DFFBAD6.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img-slider' src="https://cdn.discordapp.com/attachments/1027679004209193061/1052699204016947260/FD36387E-943C-4C8E-848D-D1A16FD81DFF.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img-slider' src="https://cdn.discordapp.com/attachments/1027679004209193061/1052699204247629936/560926E5-BAF1-4F84-9646-FAF0CFEE9389.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img-slider' src="https://cdn.discordapp.com/attachments/1027679004209193061/1052699204453146735/FD3E336E-D408-49A8-9F88-D128CCEB5123.jpg" alt="" /></SwiperSlide>


     
      </Swiper>
                       

                 
        

     
    

                    </section>


                    <section id="guyscoin-section">

                        <video muted autoPlay loop>

                            <source src={video} />
                        </video>
                        <div id="guyscoin-section-content">
                            <img src={require("./images/Kush_Coin.png")} alt="Guyscoin" />
                            <h3 >$KUSHCOIN</h3>
                            <h3>REWARDS</h3>
                            <p>Our native token $KUSH gives daily rewards with an array of emissions rates depending on the rarity of your Shiba collectible. It is our main utility token that will be offered to obtain certain cannabis related products and other rewards in the InceptionAIO network.</p>
                        </div>
                    </section>


                    <section id="collaborators-section">


                        <div className="title">
                            <h3>TEAM</h3>
                        </div>
                        <div className='team'>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft1.png")} alt="" />
                                <div className="member-description">
                                    <h6>CRYPTO CHRIS.</h6>
                                    <p>CEO</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft2.png")} alt="" />
                                <div className="member-description">
                                    <h6>ANTHONY Y.</h6>
                                    <p>VP & COO</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft3.png")} alt="" />
                                <div className="member-description">
                                    <h6>ROHAN S.</h6>
                                    <p>CTO & LEAD DEV</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft4.png")} alt="" />
                                <div className="member-description">
                                    <h6>ALAN.</h6>
                                    <p>FINANCIAL <br /> CONTROLLER</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft5.png")} alt="" />
                                <div className="member-description">
                                    <h6>JASON B.</h6>
                                    <p>EXECUTIVE COMMUNITY <br /> COORDINATOR</p>
                                </div>
                            </div>
                        </div>

                        <div className='team'>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft6.png")} alt="" />
                                <div className="member-description">
                                    <h6>DEAN B.</h6>
                                    <p>EXECUTIVE COMMUNITY <br /> COLLABORATOR</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft7.png")} alt="" />
                                <div className="member-description">
                                    <h6>HAILEY N.</h6>
                                    <p>EXECUTIVE ADMINISTRATIVE <br /> COORDINATOR</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft8.png")} alt="" />
                                <div className="member-description">
                                    <h6>TOMMY B.</h6>
                                    <p>EXECUTIVE COMMUNITY <br /> COLLABORATOR  </p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft9.png")} alt="" />
                                <div className="member-description">
                                    <h6>JOHN L.</h6>
                                    <p> EXECUTIVE DISCORD <br /> ADMINISTRATOR</p>
                                </div>
                            </div>

                            <div className='member1'>
                                <img className='img-member' src={require("./images/nft10.jpg")} alt="" />
                                <div className="member-description">
                                    <h6>MAX V.</h6>
                                    <p> EXECUTIVE ASSISTANT AND <br /> BUSINESS DEVELOPMENT</p>
                                </div>
                            </div>
                        </div>





                    </section>
                </main>
                <footer>
                    <div id="footer-content">
                        <img src={require("./images/inception-logo.png")} alt="Dezure logo" />
                        <div id="footer-info">
                            <span>© 2022 INCEPTION AIO.</span>
                            <a href="https://www.inceptionaio.io/"><i className="fa-solid fa-globe"></i></a>
                            <a href="https://twitter.com/InceptionAIO"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
                <script src="./libs/main.js"></script>
                <script src="./libs/countdown.js"></script>
            </div>
        </>
    );
}

export default App;
