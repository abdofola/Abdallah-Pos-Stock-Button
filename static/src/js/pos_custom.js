odoo.define("pos_custom.custom", function (require) {
  "use strict";
  const PosComponent = require("point_of_sale.PosComponent");
  //   const ProductScreen = require("point_of_sale.ProductScreen");
  const Registries = require("point_of_sale.Registries");

  class PosInventoryBtn extends PosComponent {
    async onClick() {
      const { selected_orderline } = this.env.pos.get_order();

      if (selected_orderline) {
        const { id } = selected_orderline.product;
        const domain = [["id", "=", id]];
        const [result] = await this.rpc({
          model: "product.product",
          method: "search_read",
          args: [domain, ["name", "qty_available"]],
        });
        const quantity =
          result.qty_available <= 0 ? "None left !" : result.qty_available;

        return this.showPopup("ConfirmPopup", {
          title: `Available ${result.name} in the stock`,
          body: quantity,
        });
      }

      //   when there's no orderline selected; return ErrorPopup.
      return this.showPopup("ErrorPopup", {
        title: "Please select orderline first !",
      });
    }
  }

  PosInventoryBtn.template = "PosInventoryBtn";

  Registries.Component.add(PosInventoryBtn);

  return PosInventoryBtn;
});
