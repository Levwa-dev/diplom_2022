import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"

export default function Offer () {

    return (
        <>
        <Header/>
        <main>
            <section className="offer-images-section">
                <div className="wraper">
                    <div className="offer-images">
                        <div className="offer-image">
                            <img alt="Фото нерухомості"></img>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}