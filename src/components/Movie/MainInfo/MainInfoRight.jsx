export default function MainInfoRight(props){
    const dateFilm = props.searchFilm.film
    return (
        <>
        <div className="main__info-right">
                <p>About</p>
                <div className="main__info-rigth-info">
                    <div>
                        <p>Type:</p>
                        <p>{dateFilm.aboutInfo[0]}</p>
                    </div>
                    <div>
                        <p>Director:</p>
                        <p>{dateFilm.aboutInfo[1]}</p>
                    </div>
                    <div>
                        <p>Date aired:</p>
                        <p>{dateFilm.aboutInfo[2]}</p>
                    </div>
                    <div>
                        <p>Duration:</p>
                        <p>{dateFilm.aboutInfo[3]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}