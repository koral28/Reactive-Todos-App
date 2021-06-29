const router = require("express").Router();
const List = require("../models/List");

router.route("/").get(function (req, resp) {
  List.find({}, function (err, lists) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.json(lists);
    }
  });
});

router.route("/").post(async (req, res) => {
  try {
    //create new list
    const newList = await new List({
      Caption: req.body.Caption,
      Description: req.body.Description,
      Icon: req.body.Icon,
      Color: req.body.Color,
      Items: req.body.Items,
    });

    console.log(typeof req.body.Items);

    const list = await newList.save();
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
});

router.route("/:id").get(async (req, resp) => {
  List.findById({ _id: req.params.id }, function (err, list) {
    if (err) {
      return resp.send(err);
    } else {
      return resp.json(list);
    }
  });
});

router.route("/:id").put(async (req, resp) => {
  let updates = req.body;
  List.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
    .then((updatedList) => resp.json(updatedList))
    .catch((err) => resp.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, resp) => {
  List.findByIdAndDelete(req.params.id)
    .then(() => resp.json("List deleted =( "))
    .catch((err) => resp.status(400).json("Error: " + err));
});

module.exports = router;
