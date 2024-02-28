
import React from "react"
import Footerbar from '/public/assets/footerbar.png'
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <Image className="footer-img" src={Footerbar} alt="footerbar" />
            <Container fluid className="footer">
                <div>
                    <p className="footer-head">4OVER HEADQUARTERS</p>
                    <p className="footer-content"> 1225 Los Angeles Street Glendale, CA 91204 Mon - Fri: 6am - 4pm PT</p>
                    <p className="footer-content">Phone: 1-844-944-6837</p>
                    <p className="footer-content">Fax: 1-877-972-9117</p>
                </div>
                <div>
                    <p className="footer-head">Shop</p>
                    <ul className="footer-list">
                        <li className="footer-content"><Link href="#home">Business cards</Link></li>
                        <li className="footer-content"><Link href="#features">marketing products</Link></li>
                        <li className="footer-content"><Link href="#pricing">signs & banner</Link></li>
                        <li className="footer-content"><Link href="#pricing">boxes & pakaging</Link></li>
                        <li className="footer-content"><Link href="#pricing">roll labels & stickers</Link></li>
                        <li className="footer-content"><Link href="#pricing">promo products</Link></li>
                        <li className="footer-content"><Link href="#pricing">majestic  products</Link></li>
                        <li className="footer-content"><Link href="#pricing">direct mail services</Link></li>
                        <li className="footer-content"><Link href="#pricing">marketplace</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="footer-head">RESOURCES</p>
                    <ul className="footer-list">
                        <li className="footer-content"><Link href="#home">Business cards</Link></li>
                        <li className="footer-content"><Link href="#features">marketing products</Link></li>
                        <li className="footer-content"><Link href="#pricing">signs & banner</Link></li>
                        <li className="footer-content"><Link href="#pricing">boxes & pakaging</Link></li>
                        <li className="footer-content"><Link href="#pricing">roll labels & stickers</Link></li>
                        <li className="footer-content"><Link href="#pricing">promo products</Link></li>
                        <li className="footer-content"><Link href="#pricing">majestic  products</Link></li>
                        <li className="footer-content"><Link href="#pricing">direct mail services</Link></li>
                        <li className="footer-content"><Link href="#pricing">marketplace</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="footer-head">CUSTOMER SERVICE</p>
                    <ul className="footer-list">
                        <li className="footer-content"><Link href="#home">Business cards</Link></li>
                        <li className="footer-content"><Link href="#features">marketing products</Link></li>
                        <li className="footer-content"><Link href="#pricing">signs & banner</Link></li>
                        <li className="footer-content"><Link href="#pricing">boxes & pakaging</Link></li>
                        <li className="footer-content"><Link href="#pricing">roll labels & stickers</Link></li>
                        <li className="footer-content"><Link href="#pricing">promo products</Link></li>
                        <li className="footer-content"><Link href="#pricing">majestic  products</Link></li>
                        <li className="footer-content"><Link href="#pricing">direct mail services</Link></li>
                        <li className="footer-content"><Link href="#pricing">marketplace</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="footer-head">ABOUT 4OVER</p>
                    <ul className="footer-list">
                        <li className="footer-content"><Link href="#home">Business cards</Link></li>
                        <li className="footer-content"><Link href="#features">marketing products</Link></li>
                        <li className="footer-content"><Link href="#pricing">signs & banner</Link></li>
                        <li className="footer-content"><Link href="#pricing">boxes & pakaging</Link></li>
                        <li className="footer-content"><Link href="#pricing">roll labels & stickers</Link></li>
                        <li className="footer-content"><Link href="#pricing">promo products</Link></li>
                        <li className="footer-content"><Link href="#pricing">majestic  products</Link></li>
                        <li className="footer-content"><Link href="#pricing">direct mail services</Link></li>
                        <li className="footer-content"><Link href="#pricing">marketplace</Link></li>
                    </ul>
                </div>
            </Container>
        </>

    )


}
export default Footer;
