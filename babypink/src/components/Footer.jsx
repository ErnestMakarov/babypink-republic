import React from 'react'
import Instagram from "../img/instagram (2).png"
import TicTok from "../img/tiktok (2).png"
import Telegram from "../img/telegram (2).png"
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
    return (
        <footer>
            <div className="footer_container">

                <div className="footer-left">
                    The Babypink Republic 2025. All rights reserved &copy;
                </div>

                <div className="footer-right">
                    <div className="footer-address">
                        <IoLocationSharp size={16} />
                        <span>Punane 1</span>
                    </div>

                    <div className="footer-socials">
                        <a target='blank' href="https://www.instagram.com/babypinkrepublic?igsh=MWtjaXhzMDN3aGJiZg==">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a target='blank' href="https://www.tiktok.com/@babypink_republic?_r=1&_t=ZM-91jMfs7440i">
                            <img src={TicTok} alt="TikTok" />
                        </a>
                        <a target='blank' href="https://web.telegram.org/a/#1600402070">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}
