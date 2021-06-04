export default function Loop(props) {
    return (
        <div className="loop">
            <img
                src={props.src}></img>
            <div className="loop-content" >
                {props.content}
                <div className="loop-date" clock={props.clock}>
                    <i class="fas fa-clock"> Thứ Sáu, 15/01/2021</i>
                </div>
            </div>
        </div>
    )
}