import NewsLeft from "./newsLeft"
import NewsRight from "./newsRight"

export default function NewsEvent() {
    return (
        <div className="news">
            <NewsLeft />
            <NewsRight />
        </div>
    )
}