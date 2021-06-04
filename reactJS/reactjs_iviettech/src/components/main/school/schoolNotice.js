import SchoolItem from './schoolItem'

function SchoolNotice() {
    return (
        <div className="school-notice">
            <div className="school-notice-title">
                <h2>
                    CÁC KHÓA KHÁC
                 </h2>
            </div>
            <div className="school-notice-content">
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
            </div>
        </div>
    )
}
export default SchoolNotice;