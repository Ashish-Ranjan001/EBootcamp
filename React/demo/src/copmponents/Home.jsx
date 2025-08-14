import React from 'react'

function Home() {
    const TITLE = "Home Page is Working";
   const courser = ["a", "c", "b", "d"]
    return (
        <div>
            <h2>{TITLE} </h2>
            <div>
                {courser.length > 0 ?
                    <>
                        <h4>Courses</h4>
                        <ul>
                            {courser.map((val, ind) =>

                                <li key={ind}>{val}
                                </li>
                            )}
                        </ul>

                    </> :
                    <p> No Course found</p>
                }
            </div>
        </div >
    )
}

export default Home
