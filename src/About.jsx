function About() {
    return (
        <>
            <h1>A little about me</h1>
            <section id='IntroSection'>
                <div className='flexDiv'>
                    <div id='myFace'></div>
                    <div className='aboutText'>
                        <p>My name is AJ Timek, I am a 22-year old Web Developer with a passion for creating projects that can make an impact.</p>
                    </div>
                </div>
            </section>
            <br />
            <section id='primeSection'>
                <div className='flexDiv'>
                    <div className='aboutText'>
                        <p>I recently transitioned to the path of a Web Developer by going through Prime
                            Digital Academy's course in 2022.
                        </p>
                    </div>
                    <div id='primeLogo'></div>
                </div>
            </section>
            <br />
            <section id='proficiencies'>
                <div className='flexDiv'>
                    <div id='reactLogo'></div>
                    <div className='aboutText'>
                        <p>
                            My proficient skills: JavaScript, React.js, Node.js,
                            Express.js, PostgreSQL, REST Api's, Redux/Redux-saga, Git, and others.
                        </p>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div className='flexDiv'>
                    <div className='aboutText'>
                        <p>
                            In my free time, I love rock climbing, disc golfing, playing video games,
                            and enjoying the company of my friends!
                        </p>
                    </div>
                    <div id='climbingPic'></div>
                </div>
            </section>
            <br />
            <hr />
        </>
    )
}

export default About