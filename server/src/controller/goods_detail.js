module.exports = (req, res) => {
  // const { id } = req.query;
  // if (!id) {
  //   req.fail("id 为空！");
  //   return;
  // }
  const shopPage = require("../../data/goods")();
  setTimeout(() => {
    return res.success(shopPage.goods[0]);
  }, 100);
};
