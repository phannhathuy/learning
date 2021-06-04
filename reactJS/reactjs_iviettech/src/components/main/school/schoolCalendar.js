import SchoolItem from './schoolItem'

function SchoolCalendar() {
    return (
        <div className="school-calendar">
            <div className="school-calendar-title">
                <h2>
                    LỊCH KHAI GIẢNG
                 </h2>
            </div>
            <div className="school-calendar-content">
                <div className="school-calendar-left">
                    <SchoolItem />
                    <SchoolItem />
                    <SchoolItem />
                    <SchoolItem />
                </div>
                <div className="school-calendar-right">
                    <SchoolItem />
                    <SchoolItem />
                    <SchoolItem />
                    <SchoolItem />
                </div>
            </div>
        </div>
    )
}
export default SchoolCalendar;