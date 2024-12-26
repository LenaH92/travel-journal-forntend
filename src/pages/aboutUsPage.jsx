const AboutUsPage = () => {
    return (<>
        <h1>This is the about us page</h1>
        <section className="ourStory">
            <h2>Our Story</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit numquam magni, quis nisi maiores ea distinctio officia consectetur dolorem modi a voluptas quisquam quae necessitatibus velit ad ipsum adipisci aperiam.
            </p>
            <div className="justUs">
                <div id="mariiasDiv">
                    <img src="" alt="Albert's picture?" />
                    <h3>Albert Salgiriev's story</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem culpa, doloribus harum maxime exercitationem vero pariatur! Eos nesciunt perspiciatis laboriosam rerum, delectus porro repellendus. Magni deserunt veniam distinctio et.</p>
                </div>
                <div id="lenasDiv">
                    <img src="" alt="Lena's slack profile picture" />
                    <h3>Lena Cortes' story</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis neque autem deleniti iste accusamus sit fugit, itaque iusto sint ducimus tempora aut magni beatae officiis perspiciatis assumenda temporibus nulla.</p>
                </div>
            </div>
        </section>
    </>);
}

export default AboutUsPage;