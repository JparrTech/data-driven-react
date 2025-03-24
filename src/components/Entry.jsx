export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.image.src}
                    alt={props.image.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="src/assets/pin-drop.svg"
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.gMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.location}</h2>
                <p className="trip-dates">{props.date}</p>
                <p className="entry-text">{props.text}</p>
            </div>

        </article>
    )
}