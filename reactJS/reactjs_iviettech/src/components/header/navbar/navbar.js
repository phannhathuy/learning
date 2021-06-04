import ListItem from './listItem'
import ListItemToggle from './listitemToggle'

function Navbar(props) {
    return (
        <nav>
            <ul className="nav-list">
                <li className="list-item-logo">
                    <a href="#" className="list-link"></a>
                </li>
                <ListItem content="Trang chủ" />
                <ListItemToggle />
                <ListItem content="Đăng kí học" />
                <ListItem content="Việc làm" />
                <ListItem content="iviettech" />
                <ListItem content="Trang Vàng HV" />
                <ListItem content="Blog" />

            </ul>
            <div className="color">
            </div>
        </nav>
    )
}
export default Navbar;