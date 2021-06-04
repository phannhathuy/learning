import React from 'react'

function Introduction() {
    return (
        <div className="introduction">
            <div className="div-introduction">
                <div className="image">
                    <img src="https://iviettech.vn/wp-content/uploads/2013/12/img-intro.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="https://iviettech.vn/wp-content/uploads/2013/12/img-intro.jpg 259w, https://iviettech.vn/wp-content/uploads/2013/12/img-intro-150x150.jpg 150w" sizes="(max-width: 259px) 100vw, 259px" />
                </div>
                <div className="introduction-content">
                    <h2 className="icon">

                    </h2>
                    <h1 className="introduction-content_title">
                        Giới Thiệu!
        </h1>
                    <p className="introduction-content-main">
                        Trải qua nhiều năm làm việc trong ngành phần mềm, hiểu được thực trạng nhu cầu nhân lực của ngành, nhóm chuyên gia trong ngành đã thành lập Trung tâm đào tạo Lập trình viên chuyên nghiệp iVietTech với mong muốn thu hẹp khoảng cách giữa nhà trường và doanh nghiệp, tạo cơ hội việc làm cho các bạn trẻ đã, đang và sẽ theo học ngành CNTT.
        </p>
                    <a href="#">
                        <input type="button" value="Xem thêm" />
                    </a>
                </div>
                <div className="link-video">
                    <div className="link-video-title">
                        <i className="iconmuch-question">&nbsp;</i>
                        <h2>Kết nối với chúng tôi</h2>
                    </div>
                    <div className="link-video-content">
                        <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages/IViettech-Education/582430048508163&amp;width=300&amp;height=310&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;show_border=false&amp;header=true" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Introduction;