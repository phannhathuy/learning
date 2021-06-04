import Loop from './loop'

export default function NewsRight(props) {
    return (
        <div className="newsright">
            <div className="news-right-header">
                <i class="fas fa-search"></i>
                <div>
                    <h2>TIN TUYEN DUNG</h2>
                    <p>Việc tìm người - Người tìm việc</p>
                </div>
            </div>
            <div className="newright-content">
                <Loop
                    clock='true'
                    src="https://iviettech.vn/wp-content/uploads/2016/05/vieclam3.jpg"
                    content="Công ty : CÔNG TY PHẦN MỀM EST ROUGE
                 <br/>
                 PHP – FRONTEND – TESTER
                 ">

                </Loop><Loop
                    src="https://iviettech.vn/wp-content/uploads/2016/05/vieclam3.jpg"
                    content="Công ty : CÔNG TY PHẦN MỀM EST ROUGE
                 <br/>
                 PHP – FRONTEND – TESTER
                 ">

                </Loop><Loop
                    src="https://iviettech.vn/wp-content/uploads/2016/05/vieclam3.jpg"
                    content="Công ty : CÔNG TY PHẦN MỀM EST ROUGE
                 <br/>
                 PHP – FRONTEND – TESTER
                 ">

                </Loop><Loop
                    src="https://iviettech.vn/wp-content/uploads/2016/05/vieclam3.jpg"
                    content="Công ty : CÔNG TY PHẦN MỀM EST ROUGE
                 <br/>
                 PHP – FRONTEND – TESTER
                 ">

                </Loop><Loop
                    src="https://iviettech.vn/wp-content/uploads/2016/05/vieclam3.jpg"
                    content="Công ty : CÔNG TY PHẦN MỀM EST ROUGE
                 <br/>
                 PHP – FRONTEND – TESTER
                 ">

                </Loop>

            </div>
        </div>
    )
}