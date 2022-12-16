// --------category--------
var url = "http://localhost:3000/api/getAllCat";

axios.get(url)
    .then(function (response) {

        for (i in response.data) {
            let cate = response.data[i];
            console.log(cate);
            document.getElementById('category').innerHTML += `<li class="dropdown"><a onclick="showByCat(${cate.id})" href="showByCat.html"><span>${cate.name}</span></a>`
        }//for    
    })
    .catch(function (error) {
        console.log(error);
    });





url = "http://localhost:3000/api/getMostBuyProd";

axios.get(url)
    .then(function (response) {

        for (i in response.data) {
            let res = response.data[i];
            console.log(res);
            document.getElementById('most_buy').innerHTML += `<div class="col-lg-4 menu-item">
            <a onclick="prodDetail(${res.id})" href="productDetail.html"><img src="${res.imgURL}" class="menu-img img-fluid"
                alt=""></a>
            <a onclick="prodDetail(${res.id})" href="productDetail.html">
                <h4>
                ${res.name}
                </h4>
                <p class="ingredients product__description">
                ${res.detail}
                </p>
                <p class="price">
                ${res.price.toLocaleString('vi')} VNĐ
                </p>
            </a>
        </div>
        `
        }//for    
    })
    .catch(function (error) {
        console.log(error);
    });



url = "http://localhost:3000/api/getNewestProd";
axios.get(url)
    .then(function (response) {

        for (i in response.data) {
            let res = response.data[i];
            console.log(res);
            document.getElementById('newest').innerHTML += `<div class="col-lg-4 menu-item">
            <a onclick="prodDetail(${res.id})" href="productDetail.html"><img src="${res.imgURL}" class="menu-img img-fluid"
                alt=""></a>
            <a onclick="prodDetail(${res.id})" href="productDetail.html">
                <h4>
                ${res.name}
                </h4>
                <p class="ingredients product__description">
                ${res.detail}
                </p>
                <p class="price">
                ${res.price.toLocaleString('vi')} VNĐ
                </p>
            </a>
        </div>
        `
        }//for    
    })
    .catch(function (error) {
        console.log(error);
    });



url = "http://localhost:3000/api/getMostViewProd";
axios.get(url)
    .then(function (response) {

        for (i in response.data) {
            let res = response.data[i];
            console.log(res);
            document.getElementById('mostView').innerHTML += `<div class="col-lg-4 menu-item">
            <a onclick="prodDetail(${res.id})" href="productDetail.html"><img src="${res.imgURL}" class="menu-img img-fluid"
                alt=""></a>
            <a onclick="prodDetail(${res.id})" href="productDetail.html">
                <h4>
                ${res.name}
                </h4>
                <p class="ingredients product__description">
                ${res.detail}
                </p>
                <p class="price">
                ${res.price.toLocaleString('vi')} VNĐ
                </p>
            </a>
        </div>
        `
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
