const AboutUsPage = () => {
    return (<>
        <h1>This is the about us page</h1>
        <section className="ourStory">
            <h2>Our Story</h2>
            <p>Hello and welcome!</p>

            <p>We are Albert Salgiriev and Lena Cortes, two learning enthusiasts currently attending IronHack’s Full Stack Web Development bootcamp. We are on an exciting journey of development and growth, acquiring new skills and knowledge in the tech world. We’re thrilled to share our experience with you and welcome you to this page. We hope you enjoy the content and feel inspired by our stories and projects!</p>

            <p>Thank you for visiting, and we hope you get to know a little bit about us here</p>
            <div className="justUs">
                <div id="albertsDiv">
                    <img src="src/img/albert_pfp.png " alt="Albert's slack profile picture" />
                    <h3>Albert Salgiriev's story</h3>
                    <p>Albert Salgiriev is a passionate learner and a lover of all things tech. Currently, he is diving into the world of Full Stack Web Development through the IronHack bootcamp. Born with a strong appreciation for music, Albert has always been drawn to the powerful sounds of heavy metal. However, recently, he has discovered a new passion for electro music, enjoying the electronic beats and rhythms that add a fresh dimension to his music taste.</p>

                    <p>In his free time, you can find Albert immersed in music, whether it’s listening to his favorite bands or experimenting with new genres. He believes that traveling and learning about different cultures helps him grow both personally and professionally. Albert is excited about the journey ahead in web development and is eager to see where it will take him next.</p>

                    <p>Through his time at IronHack, Albert is not just building technical skills but also expanding his horizons, connecting his diverse passions, and bringing his creativity into every project he works on.</p>
                </div>
                <div id="lenasDiv">
                    <img src="src/img/lena_pfp.png" alt="Lena's slack profile picture" />
                    <h3>Lena Cortes' story</h3>
                    <p>Lena Cortés, born and raised in Valencia, Spain, has always had a passion for exploring new places. Her love for travel has taken her to various corners of the world, where she’s immersed herself in different cultures and experiences. Despite her busy life as an avid traveler, Lena decided to expand her horizons even further by diving into the world of programming.</p>

                    <p>Recently, she enrolled in Ironhack’s bootcamp, eager to learn coding and embrace a new challenge. Although it was a big shift from her usual lifestyle, Lena was determined to succeed. The problem-solving aspect of coding intrigued her, and she found herself captivated by the endless possibilities it offered.</p>

                    <p>Now, Lena is balancing her passion for travel with her newfound interest in tech, learning to code by day and dreaming of her next adventure by night. She’s excited to see where both her journey as a coder and her travels will take her.</p>
                </div>
            </div>
        </section>
    </>);
}

export default AboutUsPage;