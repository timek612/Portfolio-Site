function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <p>Throughout my time at Prime Digital Academy, I created numerous apps. While we started out with just
                front-end apps, full stack came shortly after.
            </p>
            <br />
            <section id='salaryCalculator'>
                <div className='flexDiv'>
                    <div className='videoText'>
                        <h6>Duration: 1 weekend</h6>
                        <p>
                            My first weekend challenge: A company salary calculator made with jQuery. An app to calculate company monthly employee costs.
                        </p>
                    </div>
                    <div className='video'><iframe width={500} height={300} src="https://www.youtube.com/embed/WM-FAM1QZEw" title="Company Salary Calculator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <br />
            <section id='serverSideCalculator'>
                <div className='flexDiv'>
                    <div className='video'><iframe width={500} height={300} src="https://www.youtube.com/embed/D0YVqAlq9sk" title="jQuery Server Side Calculator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videoText'>
                        <h6>Duration: 1 weekend</h6>
                        <p>
                            Weekend challenge #2: Server side Calculator. After learning servers, AJAX and jQuery were used to create this calculator.
                        </p>
                    </div>
                </div>
            </section>
            <br />
            <section id='toDoList'>
                <div className='flexDiv'>
                    <div className='videoText'>
                        <h6>Duration: 1 weekend</h6>
                        <p>
                            Database work: My first full stack app, a To-Do list. Finally learned data management with PostgreSQL and Postico.
                        </p>
                    </div>
                    <div className='video'>
                        <iframe width={500} height={300} src="https://www.youtube.com/embed/CAxxmMSYXWE" title="To Do List" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <br />
            <section id='artGallery'>
                <div className='flexDiv'>
                    <div className='video'>
                        <iframe width={500} height={300} src="https://www.youtube.com/embed/sXsXMJsm7pI" title="React art gallery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videoText'>
                        <h6>Duration: 1 weekend</h6>
                        <p>
                            Getting Reactive: First project created with React and its components. An art gallery allowing you to like photos and view captions.
                        </p>
                    </div>
                </div>
            </section>
            <br />
            <section id='feedbackLoop'>
                <div className='flexDiv'>
                    <div className='videoText'>
                        <h6>Duration: 1 weekend</h6>
                        <p>
                            State Management: After learning about Redux, I put those skills to the test by creating a feedback loop application to gather, display and submit user data.
                        </p>
                    </div>
                    <div className='video'>
                        <iframe width={500} height={300} src="https://www.youtube.com/embed/gilZoyIsReM" title="Feedback Loop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div className='flexDiv'>
                    <div className='video'>
                        <iframe width={500} height={300} src="https://www.youtube.com/embed/XZ3pHYGvNiY" title="Movies Saga" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videoText'>
                        <h6>Duration: 1 weekend</h6>
                        <p>
                            A new saga: Movies saga is a full stack application where I incorporated newly learned Redux-Saga skills, allowing for more efficient data retrieval.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className='flexDiv'>
                    <div className='videoText'>
                        <h6>Duration: 2 weeks</h6>
                        <p>Budget Buddy: My first full stack web app from scratch. I wanted to create an app that could be useful to everyone. Budget Buddy takes in your income,
                            savings amount, and expenses to deliver your daily, weekly, and monthly allowance. Every change to your income or expenses will update the total amounts.
                        </p>
                    </div>
                    <div className='video'>
                        <iframe width={500} height={300} src="https://www.youtube.com/embed/F8UYMGbj41s" title="Budget Buddy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div className='flexDiv'>
                    <div className='video'>
                        <iframe width={500} height={300} src="https://www.youtube.com/embed/kCX_Y2XlT6U" title="Neurotype Dashboard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videoText'>
                        <h6>Duration: 2 weeks</h6>
                        <p>Client Project: Alongside a team of 3 other individuals, we created a full stack app for a company called Neurotype.
                            A dashboard meant to manage and display data of patients coming from another app. This app was developed with the idea that multiple companies can use it
                            along with multiple user types and levels.
                        </p>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Projects