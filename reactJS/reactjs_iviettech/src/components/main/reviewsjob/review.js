export default function Review(props) {
    return (
        <div className="review">
            <h2 className="review-header">
                Học viên nói về Trung Tâm!
                </h2>
            <div className='review-content'>
                <img src={props.src}></img>
                <div className="review-content-content">
                    <p>
                        {
                            props.content
                        }
                    </p>
                    <div className="author">
                        Bạn : {props.author}
                    </div>
                </div>
            </div>
            <div className="review-foot">
                <img src={props.src}></img>
                <img src={props.src}></img>
                <img src={props.src}></img>
                <img src={props.src}></img>
                <img src={props.src}></img>

            </div>
        </div>
    )
}