import HoverBorder from './hoverBorder'
import ListItem from './listItem'

function ListItemToggle(props) {
    return (
        <li className="list-item">
            <a href="#" className="list-link">Các khóa học lập trình
        <HoverBorder />
            </a>
            <ul className="nav-list-list">
                <li className="list-item-item">
                    <a href="#" className="list-link">Chuyên nghiệp</a>
                    <ul className="nav-list-list-list">
                        <li className="list-item">
                            <a className="list-link" href="#">Lập trình Android</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Lập trình Ios-Swift</a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="#">Kiểm thử chuyên nghiệp</a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="#">Lập trình PHP Laravel</a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="#">Lập trình Front-End</a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="#">Lập trình Java</a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="#">Lập trình .Net</a>
                        </li>
                        <li className="list-item">
                            <a className="list-link" href="#">Lập trình viên chuyên nghiệp</a>
                        </li>
                    </ul>
                </li>
                <li className="list-item-item">
                    <a href="#" className="list-link">Chuyên sâu</a>
                    <ul className="nav-list-list-list">
                        <li className="list-item">
                            <a href="#" className="list-link">Phân tích viên nghiệp vụ</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">Kỹ sư trí tuệ nhân tạo</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">DevOps Engineer</a>
                        </li>
                    </ul>
                </li>
                <li className="list-item-item">
                    <a href="#" className="list-link">Thiết kế đồ họa</a>
                    <ul className="nav-list-list-list">
                        <li className="list-item">
                            <a href="#" className="list-link">Thiết kế đồ họa</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">Thiết kế nội thất</a>
                        </li>
                    </ul>
                </li>
                <li className="list-item-item">
                    <a href="#" className="list-link">Cấp tốc</a>
                </li>
                <li className="list-item-item">
                    <a href="#" className="list-link">Các khóa khác</a>
                </li>
            </ul>
        </li>
    )
}
export default ListItemToggle;