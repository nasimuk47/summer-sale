// all  id name and queryselector---------------------------//

document.addEventListener("DOMContentLoaded", function () {
    const cardElements = document.querySelectorAll(".card");
    const itemTotalPrice = document.getElementById("item-total-price");
    const purchaseBtn = document.getElementById("Purchase-btn");
    const applyBtn = document.getElementById("cupon-btn");
    const addingCardName = document.getElementById("adding-card-name");
    const discountText = document.querySelector(".item-discount");
    const totalAmountText = document.querySelector(".all-total-ammount");
    const homeBtn = document.getElementById("Home-btn");

    let totalPrice = 0;
    let selectedItems = [];
    let couponApplied = false;

    //click card to show card name-----------------------//

    cardElements.forEach((card) => {
        card.addEventListener("click", function () {
            const cardTitle = card.querySelector(".card-title").textContent;
            const cardPrice = parseFloat(
                card.querySelector("#item-element-price").textContent
            );

            // adding single element price--------------------//

            selectedItems.push(cardTitle);
            totalPrice += cardPrice;
            itemTotalPrice.textContent = `Total price: ${totalPrice.toFixed(
                2
            )}`;

            // adding card name----------------------------------//

            addingCardName.innerHTML = "";
            selectedItems.forEach((item) => {
                const cardNameParagraph = document.createElement("p");
                cardNameParagraph.textContent = item;
                addingCardName.appendChild(cardNameParagraph);
            });

            if (totalPrice > 0) {
                purchaseBtn.removeAttribute("disabled");
            } else {
                purchaseBtn.setAttribute("disabled", "disabled");
            }

            // enable or disebled--------//

            if (totalPrice >= 200) {
                applyBtn.removeAttribute("disabled");
            } else {
                applyBtn.setAttribute("disabled", "disabled");
            }
        });
    });
    // cupon field--------------------------------//
    applyBtn.addEventListener("click", function () {
        const couponField = document.getElementById("copun-field");
        const couponCode = couponField.value;

        // to get 20 % discount ---------------------------------//

        if (couponCode === "SELL200" && totalPrice >= 200 && !couponApplied) {
            const discount = totalPrice * 0.2;
            totalPrice -= discount;

            // number 2 fixed------------------------//

            discountText.textContent = `Discount: ${discount.toFixed(2)}`;
            totalAmountText.textContent = `Total: ${totalPrice.toFixed(2)}`;
            couponApplied = true;
        }
    });

    //   click home button to get reset value-------------------------//

    homeBtn.addEventListener("click", function () {
        selectedItems = [];
        totalPrice = 0;
        itemTotalPrice.textContent = `Total price: ${totalPrice.toFixed(2)}`;
        addingCardName.innerHTML = "";
        discountText.textContent = "Discount:";
        totalAmountText.textContent = "Total:";
        purchaseBtn.setAttribute("disabled", "disabled");
        applyBtn.setAttribute("disabled", "disabled");
        couponApplied = false;
    });

    // button disebled section---------------//

    purchaseBtn.setAttribute("disabled", "disabled");
    applyBtn.setAttribute("disabled", "disabled");
});
