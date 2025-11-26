import React from 'react'
import Instagram from "../img/instagram (1).png"
import TicTok from "../img/tiktok (1).png"
import Telegram from "../img/telegram (1).png"

export default function Footer() {
    return (
        <footer>
            The Babypink Republic 2025. all rights are recived &copy;
            <div className="footer-links">
                <a target='blank' href="https://www.instagram.com/babypinkrepublic?igsh=MWtjaXhzMDN3aGJiZg=="><img src={Instagram} alt="" /></a>
                <a target='blank' href="https://www.tiktok.com/@babypink_republic?_r=1&_t=ZM-91jMfs7440i"><img src={TicTok} alt="" /></a>
                <a target='blank' href="https://web.telegram.org/a/#1600402070"><img src={Telegram} alt="" /></a>

            </div>

        </footer>
    )
}

