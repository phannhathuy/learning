import Trend from './trend'
import TrendOld from './trendOld'

export default function NewsLeft() {
    return (
        <div className="news-left">
            <Trend />
            <TrendOld />
        </div>
    )
}