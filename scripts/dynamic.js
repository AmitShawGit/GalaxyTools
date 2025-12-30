const trending_blade = document.getElementById('trending_blade');
const trending_drill = document.getElementById('trending_drill');
const test = document.getElementById('myTab');
const myTabContent = document.getElementById('myTabContent');

const fetchBlades = () => {
    fetch('./scripts/products.json')
        .then(res => res.json())
        .then(data => {

            let output = "";
            let categories = data.categories


            let getGetCategoryName = categories.find(item => item.name == "blade")


            let limitedProduct = getGetCategoryName?.children?.slice(0, 8)

            limitedProduct?.map((item) => {
                return (
                    output += `
                      <div class="col-lg-3">
                        <div class="card">
                            <div class="card-img">
                                <span class="trendy">${item?.trendy}</span >
                                <img src="./img/${item?.img}" alt="blade" class="img-fluid">
                            </div>
                            <h3>${item?.name}</h3>
                            <p>${item?.shortDesc}</p>
                            <p class="tooth">${item?.toothProfile}</p>
                            <p class="desc">${item?.desc}</p>
                            <ul class="ratings">
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li>(2 review)</li>
                            </ul>
                        </div >
                    </div > `
                )
            })

            trending_blade.innerHTML = output

        })

}


const fetchDrills = () => {
    fetch('./scripts/products.json')
        .then(res => res.json())
        .then(data => {

            let output = "";
            let categories = data.categories


            let getGetCategoryName = categories.find(item => item.name == "drills")
            console.log(getGetCategoryName);

            let limitedProduct = getGetCategoryName?.children?.slice(0, 8)

            limitedProduct?.map((item) => {
                return (
                    output += `
                      <div class="col-lg-3">
                        <div class="card">
                            <div class="card-img">
                                <span class="trendy">${item?.trendy}</span >
                                <img src="./img/${item?.img}" alt="blade" class="img-fluid">
                            </div>
                            <h3>${item?.name}</h3>
                            <p>${item?.shortDesc}</p>
                            <p class="tooth">${item?.toothProfile}</p>
                            <p class="desc">${item?.desc}</p>
                            <ul class="ratings">
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li>(2 review)</li>
                            </ul>
                        </div >
                    </div > `
                )
            })

            trending_drill.innerHTML = output

        })
}


const fetchBlade = () => {
    fetch("./scripts/products.json")
        .then(res => res.json())
        .then(data => {

            let tabHTML = "";
            let contentHTML = "";

            data.categories.forEach((category, catIndex) => {

                // Tabs
                tabHTML += `
          <li class="nav-item">
            <button class="nav-link ${catIndex === 0 ? "active" : ""}"
              data-bs-toggle="tab"
              data-bs-target="#tab-${catIndex}">
              ${category.name}
            </button>
          </li>
        `;

                // Tab Content
                contentHTML += `
          <div class="tab-pane fade ${catIndex === 0 ? "show active" : ""}"
            id="tab-${catIndex}">
            <div class="row">
        `;

                category.children.forEach(item => {
                    contentHTML += `
            <div class="col-lg-3">
              <div class="card">
                <div class="card-img">
                  <span class="trendy">${item.trendy ?? ""}</span>
                  <img src="./img/${item.img}" class="img-fluid">
                </div>
                <h3>${item.name}</h3>
                <p>${item.shortDesc}</p>
                <p class="tooth">${item.toothProfile}</p>
                <p class="desc">${item.desc}</p>
              </div>
            </div>
          `;
                });

                contentHTML += `</div></div>`;
            });

            document.getElementById("tabs").innerHTML = tabHTML;
            document.getElementById("tabContent").innerHTML = contentHTML;
        });
};


fetchBlades()
fetchDrills()

fetchBlade()