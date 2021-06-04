import Loop from './loop'

export default function TrendOld() {
    return (
        <div className='trendold'>
            <h3>
                Tin Tức Đã Đưa
            </h3>
            <div className="trendold-loop">
                <Loop src='https://iviettech.vn/wp-content/uploads/2021/01/web.jpg'
                    content="Học 5 kỹ thuật lập trình web này, chắc chắn bạn sẽ có mức lương hàng nghìn USD tại Việt Nam">
                </Loop>
                <Loop src='https://iviettech.vn/wp-content/uploads/2021/01/web.jpg'
                    content="Học 5 kỹ thuật lập trình web này, chắc chắn bạn sẽ có mức lương hàng nghìn USD tại Việt Nam">
                </Loop>
            </div>
        </div>
    )
}