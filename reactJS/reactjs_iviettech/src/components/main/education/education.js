import EducationProgram from "./educationProgram";
import EducationRegister from "./educationRegister";

function Education(props) {
    return (
        <div className="education">
            <div class="register-program">
                <EducationRegister />
                <EducationProgram />
            </div>
        </div>
    )
}
export default Education;