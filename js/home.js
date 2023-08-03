function loadTopic(){
    fetch("/data/topic.json").then(res => res.json()).then(data =>{
        let h = "";
        let flag = 0;
        for(let t of data){
            if(flag < 4)
            {
                h += `
                <div class="flex topic">
                    <div class="flex">
                        <div class="image-topic"> <img src="${t.img}" alt="${t.name}"></div>
                        <div class="info-topic">
                            <div class="name-topic">
                                <p>Đề tài</p>
                                <h1>${t.name}</h1>
                            </div>
                            <div class="lecturer-topic">
                                <p>Giảng viên hướng dẫn </p>
                                <h1>${t.lecturer}</h1>
                            </div>
                            <div class="students">
                                <p>Nhóm sinh viên thực hiện</p>
                                <h5>${t.leader} *</h5>
                                <h5>${t.member}</h5>
                            </div>
                        </div>
                        <div class=" rating_5">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>`;
                flag++;
            }
        }
        let e = document.getElementById("tocpics");
        if(e !== null)
            e.innerHTML = h;
    })
}

function loadLecturer(){
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let index = 0;
        for(let l of data){
            if(index < 4){
                h += `
                <div class="lecturer">
                <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1 class="text-info">${l.name}</h1>
                            <h3 class="text-info">${l.degree}</h3>
                            <h3 class="text-info">${l.majors}</h3>
                            <input type="button" value="Chi tiết">
                        </div>
                </div>
                </div>
                `;
                index++;
            }
            
        }

        let e = document.getElementById("lecturers");
        if(e !== null){
            e.innerHTML = h
        }
    })
}

window.onload = function (){
    loadTopic();
    loadLecturer();
}