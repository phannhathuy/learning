import Education from './education'
import ProgramItem from './programItem'

function EducationProgram(params) {
    return (
        <div className="program">
            <div className="title">
                <i className="fas fa-graduation-cap"></i>
                <h2>CHƯƠNG TRÌNH ĐÀO TẠO</h2>
            </div>
            <div className="program-body">
                <ProgramItem
                    src="https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/LTVCN-Logo.jpg&h=230&w=230&q=100"
                    content=" Thời gian: 8 tháng
                     Suất học: Tối 3-5-7"
                    title="Lập Trình Viên Chuyên Nghiệp"
                />
                <ProgramItem
                    src="https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/LTVCN-Logo.jpg&h=230&w=230&q=100"
                    content=" Thời gian: 8 tháng
                      Suất học: Tối 3-5-7"
                    title="Lập Trình Viên Chuyên Nghiệp"
                /> <ProgramItem
                    src="https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/LTVCN-Logo.jpg&h=230&w=230&q=100"
                    content=" Thời gian: 8 tháng
                       Suất học: Tối 3-5-7"
                    title="Lập Trình Viên Chuyên Nghiệp"
                /> <ProgramItem
                    src="https://iviettech.vn/wp-content/themes/viettech/timthumb.php?src=https://iviettech.vn/wp-content/uploads/2015/12/LTVCN-Logo.jpg&h=230&w=230&q=100"
                    content=" Thời gian: 8 tháng
                        Suất học: Tối 3-5-7"
                    title="Lập Trình Viên Chuyên Nghiệp"
                />
            </div>
        </div>
    )
}
export default EducationProgram;