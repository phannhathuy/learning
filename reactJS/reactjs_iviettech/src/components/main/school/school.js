import SchoolCalendar from './schoolCalendar';
import SchoolNotice from './schoolNotice';

function School() {
    return (
        <div className="school-block">
            <div className="school">
                <SchoolCalendar />
                <SchoolNotice />
            </div>
        </div>
    )
}
export default School;