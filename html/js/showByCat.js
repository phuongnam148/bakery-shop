// --------category--------
var url = "http://localhost:3000/api/getAllCat";
let cat_id = JSON.parse(sessionStorage.getItem("cat_id"));
if (cat_id == 'all'){
    document.getElementById('cat_name').innerHTML += `  
    <a class="display-8 fw-bolder" onclick="showByCat('all')" href="showByCat.html"">Tất cả sản phẩm</a>`
}
axios.get(url)
    .then(function (response) {

        for (i in response.data) {
            let cate = response.data[i];
            // console.log(cate);
            document.getElementById('category').innerHTML += `<li class="dropdown"><a onclick="showByCat(${cate.id})" href="showByCat.html"><span>${cate.name}</span></a>`;

            document.getElementById('danhmuc').innerHTML += `  
                    <a style="margin-top: 15px;" class="collapse-item fs-6"
                    onclick="showByCat(${cate.id})"  href="showByCat.html">
                        ${cate.name}
                    </a>`

            if (cat_id == cate.id) {
                document.getElementById('cat_name').innerHTML += `  
                <a class="display-8 fw-bolder" onclick="showByCat(${cate.id})" href="showByCat.html"">${cate.name} </a>`
            }
        }//for    
    })
    .catch(function (error) {
        console.log(error);
    });

url = "http://localhost:3000/api/getAllProd";

axios.get(url)
    .then(function (response) {

        for (i in response.data) {
            let res = response.data[i];
            if (!(cat_id == "all")) {
                if (res.cat_id != cat_id) {
                    continue
                }
            }
            document.getElementById('prod_col').innerHTML += `
                <div class="col mb-5 hover_zoom">
                <div class="card h-100">
                    <!-- Product image-->
                    <img style="width: 100%;" class="card-img-top" src="${res.imgURL}"
                        alt="..." />
                    <!-- Product details-->
                    <div class="card-body text-center">
                        <div class="menu-item">
                            <!-- Product name-->
                            <h6 class="fw-bolder" style="min-height: 50px;">
                            ${res.name}
                            </h6>
                            <!-- Product price-->
                            <p class="price">
                                 ${res.price.toLocaleString('vi')} VNĐ
                            </p>
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn-book-a-table"
                        onclick="prodDetail(${res.id})" href="prodDetail.html">Xem
                                ngay</a></div>
                    </div>
                </div>
            </div>`;


        }//for    
    })
    .catch(function (error) {
        console.log(error);
    });


function prodDetail(id) {
    sessionStorage.setItem("prod_id", JSON.stringify(id));
}
function showByCat(id) {
    sessionStorage.setItem("cat_id", JSON.stringify(id));
}
