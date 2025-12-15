const trending_blade = document.getElementById('trending_blade');

const fetchBlades = () => {
    fetch('./scripts/products.json')
        .then(res => res.json())
        .then(data => {

            let output = "";
            
            let limitedProduct = data.slice(0,8)

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

fetchBlades()