const mongoose = require("mongoose");
const { isMobilePhone } = require("validator");
const SERVER_URL = "mongodb://127.0.0.1:27017/products";

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      minlength: 2,
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        return isMobilePhone(value, "he-IL");
      },
    },
    DateAdded: {
      type: Date,
      default: new Date(),
    },
  },
});

function main() {
  mongoose.connect(SERVER_URL, { useNewUrlParser: true });
  const productArr = [
    new Product({
      name: "Cinnamon Toast Crunch",
      category: "Cereals",
      isActive: true,
      details: {
        description: "Taste homemade cinnamon toast",
        price: 23,
        discount: 15,
        images: [
          "https://static.wikia.nocookie.net/brand-pacakging/images/e/ea/Cinnamon_Toast_Crunch_box_1988.jpg/revision/latest?cb=20130829192347",
          "google.com",
        ],
        phone: "+972546391991",
      },
    }),
    new Product({
      name: "Samurai sword",
      category: "Weapons",
      isActive: false,
      details: {
        description: "Slash through your enemies",
        price: 730,
        images: [
          "https://5.imimg.com/data5/FM/WL/MY-51982033/japanese-samurai-sword-500x500.jpg",
          "https://static.wikia.nocookie.net/samuraipizzacats/images/3/3d/Speedy_Cerviche.png/revision/latest/scale-to-width-down/300?cb=20141109082424",
        ],
        phone: "+9725200648523",
      },
    }),
    new Product({
      name: "MongoDB",
      category: "DataBases",
      details: {
        description: "Fast and easy database solution",
        price: 0,
        discount: 99,
        images: [
          "https://g.foolcdn.com/art/companylogos/square/mdb.png",
          "https://media.makeameme.org/created/mongodb.jpg",
        ],
        phone: "+972546391991",
      },
    }),
  ];
  productArr.forEach((product) => {
    product
      .save()
      .then(() => console.log(product))
      .catch((err) => console.log(err));
  });
}

main();
