function ProgramItem(props) {
    const { src, title, content } = props
    return (
        <div className="program-item">
            <img src={src} />
            <div className="body-content">
                <h3 className="content-title">{title}
                </h3>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}
export default ProgramItem;