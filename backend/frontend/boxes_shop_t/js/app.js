document.addEventListener('DOMContentLoaded', function () {
    fetch('/products/read/', { method: 'GET' }).then(response => response.json()).then(productData => {
        productData.data.forEach(product => {

            // Create a new div element for each product
            const productBox = document.createElement('div');
            productBox.className = 'box';
            
            // Create the HTML structure for the product box
            productBox.innerHTML = ` 
                <div class="container1">
                    <div class="top-box">
                        <img src="${product.image_url}" alt="product image" class="img1">
                    </div>
                    <div class="bottom-box">
                        <div class="bottom-box-1">
                            <p class="pbox111">${product.product_name}</p>
                        </div>
                        <div class="text-phone">
                            <a href="tel:+989385651189" class="a-phone-number">
                                <div class="holder-text-phone">
                                    <div class="text-phone-number"><p class="text-phone-number-text">تماس با : </p></div>
                                    <div class="phone-number"><a href="tel:+989385651189"class="text-phone-number-a">09385651189</a></div>
                                </div>
                            </a>
                        </div>
                        <div class="bottom-box-2">
                            <div class="bottom-box-2-2">
                                <div class="bottom-box-2-2-2">
                                    <p class="code-for-buy">کد محصول برای سفارش</p>
                                    <div class="code">
                                        <span class="stakh"><p class="ptakhfif">${product.barcode}</p></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" style="color:#FFD93D ;width:20px; ">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Append the product box to the document
            document.querySelector('.mbox').appendChild(productBox);
        })
    })
})

