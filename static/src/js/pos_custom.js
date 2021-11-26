odoo.define("pos_custom.custom", function (require) {
  "use strict";
  const PosComponent = require("point_of_sale.PosComponent");
  //   const ProductScreen = require("point_of_sale.ProductScreen"); no need for this component in this case, cuz we're not gonna add it to the keyboard(product screen).
  const Registries = require("point_of_sale.Registries");

  class PosInventoryBtn extends PosComponent {
    async onClick(evt) {
      const { productId } = evt.target.parentElement.parentElement.dataset;
      const domain = [["id", "=", parseInt(productId)]];
      const [product] = await this.rpc({
        model: "product.product",
        method: "search_read",
        args: [domain, ["name", "qty_available"]],
      });
      const quantity =
        product.qty_available <= 0 ? "None left !" : product.qty_available;

      return this.showPopup("ConfirmPopup", {
        title: `Available ${product.name} in the stock`,
        body: quantity,
      });
    }
  }

  PosInventoryBtn.template = "PosInventoryBtn";

  Registries.Component.add(PosInventoryBtn);

  return PosInventoryBtn;
});
