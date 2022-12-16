let cat_id = JSON.parse(sessionStorage.getItem("cat_id"));
let prod_id = JSON.parse(sessionStorage.getItem("prod_id"));
// --------category--------

// ------------------------

var url = "http://localhost:3000/api/getProdById/" + prod_id;

axios
  .get(url)
  .then(function (response) {
    let res = response.data[0];

    document.getElementById("prod_detail").innerHTML += `
      <div class="col-md-6">
      <a href="${res.imgURL}" class="glightbox"><img src="${res.imgURL}"
              class="menu-img img-fluid" alt=""></a>
  </div>
  <div class="col-md-6">
      <!-- <div class="small mb-1">SKU: BST-498</div> -->
                <span id="prod_cate" >
                   
    
                </span>
                      <h4 class="display-8 fw-bolder mt-2">
                      ${res.name}
                      </h4>
                      <div class="fs-5 mb-5 menu-item">
                          <!-- <span class="text-decoration-line-through">$45.00</span> -->
                          <p class="price">
                          ${res.price.toLocaleString("vi")} VNĐ
                          </p>
                      </div>
                      <p class="lead">
                      ${res.detail}
                      </p>
                      <div class="d-flex ">
                          <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                              style="max-width: 3rem" />

                          <button type="button" class="btn-book-a-table" id="addBtn"
                              style="border: 1px solid red;"
                              onclick="themVaoGio(' ${res.id}',' ${res.name}',' ${res.price}','${res.imgURL}')">
                              <i class="bi-cart-fill me-1"></i>
                              Thêm vào giỏ hàng
                          </button>
                      </div>
     `;
  })
  .catch(function (error) {
    console.log(error);
  });

url = "http://localhost:3000/api/getAllCat";

axios
  .get(url)
  .then(function (response) {
    for (i in response.data) {
      let cate = response.data[i];
      // console.log(cate);
      document.getElementById(
        "category"
      ).innerHTML += `<li class="dropdown"><a onclick="showByCat(${cate.id})" href="showByCat.html"><span>${cate.name}</span></a>`;

      document.getElementById(
        "danhmuc"
      ).innerHTML += `   <a style="margin-top: 15px;" class="collapse-item fs-6"
                      onclick="showByCat(${cate.id})"  href="showByCat.html">
                          ${cate.name}
                      </a>`;

      if (prod_id == cate.id) {
        document.getElementById("prod_cate").innerHTML += `  
                  <a class="display-8 fw-bolder" href="showByCat.html"  onclick="showByCat(${cate.id})" >             
                              </a>`;
      }
    } //for
  })
  .catch(function (error) {
    console.log(error);
  });

url = "http://localhost:3000/api/getProdByCatID/" + cat_id;
axios
  .get(url)
  .then(function (response) {
    for (i in response.data) {
      if (i >= 4) continue;
      let res = response.data[i];
      // console.log(cate);
      document.getElementById(
        "splq"
      ).innerHTML += ` <div class="col mb-5 hover_zoom">
      <div class="card h-100">
          <!-- Product image-->
          <img style="width: 90%; margin: auto;" class="card-img-top" src="${
            res.imgURL
          }"
              alt="..." />
          <!-- Product details-->
          <div class="card-body ">
              <div class="text-center  menu-item">
                  <!-- Product name-->
                  <h5 class="fw-bolder" style="min-height: 50px;">
                  ${res.name}
                  </h5>
                  <!-- Product price-->
                  <p class="price">

                  ${res.price.toLocaleString("vi")}VNĐ
                  </p>
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn-book-a-table"
              onclick="prodDetail(${
                res.id
              })" href="prodDetail.html">Xem ngay</a></div>
          </div>
      </div>
  </div>
`;
    } //for
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

