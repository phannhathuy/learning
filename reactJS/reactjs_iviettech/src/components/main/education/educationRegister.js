function EducationRegister(props) {
    return (
        <div class="register">
            <div class="title">
                <div class="title-form">
                    <i class="fas fa-pen"></i>
                    <h2 >Đăng Kí Học</h2>
                </div>
            </div>
            <form action="">
                <input type="text" name="name" id="name" placeholder="Họ và tên" required></input>
                <input type="email" name="email" id="email" placeholder="Email" required></input>
                <input type="tel" name="telephone" id="telephone" placeholder="Số điện thoại"></input>
                <select name="luachon" id="">
                    <option value="" disabled>Lựa chọn của bạn</option>
                    <option value="" class="select-items">Lập trình Android</option>
                    <option value="" class="select-items">Lập trình Java</option>
                    <option value="" class="select-items">Lập trình Ios</option>
                    <option value="" class="select-items">Lập trình PHP & Laravel</option>
                    <option value="" class="select-items">Lập trình Front End</option>
                    <hr />
                    <option value="" class="select-items">Lập trình cơ bản</option>
                    <option value="" class="select-items">Lập trình Java cấp tốc</option>
                    <option value="" class="select-items">Kĩ sư cầu nối</option>
                </select>
                <textarea id="text-area" cols="4" rows="4">

                </textarea>
                <input class="btn-dk" type="submit" value="ĐĂNG KÍ HỌC"></input>

            </form>
        </div>

    )
}
export default EducationRegister;