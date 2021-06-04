import { Children } from 'react'
import HoverBorder from './hoverBorder'

function ListItem(props) {
    const { content } = props;
    return (
        <li className="list-item" >
            <a href="#" className="list-link" >{content}
            </a>
            {/* <HoverBorder/> */}
        </li>
    )
}
export default ListItem;