const Home = require("../models/home");
const fs = require("fs");
const path = require("path");
// ✅ Show form
exports.addhomeform = (req, res) => {
  res.render("register-home", { pageTitle: "Register Home" });
};

// ✅ Add Home
exports.addhomeresponse = async (req, res) => {
  try {
    const { home, location, price, image, rating } = req.body;
    const imagePath = req.file 
  ? "/" + req.file.path.replace(/\\/g, "/") 
  : null;
    await Home.save({
      houseName: home,
      location,
      price,
      image:imagePath,
      rating,
      userId: req.session.user.id  
    });

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

// ✅ Show all homes
exports.getHomes = async (req, res) => {
  
  try {
    const { location, maxPrice } = req.query;

    const [rows] = await Home.searchFilter(location, maxPrice);

    res.render("user", {
      homes: rows,
      pageTitle: "All Homes"
    });
  } catch (err) {
    console.log(err);
  }
};

// ✅ View details
exports.getHomeDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const [rows] = await Home.findById(id);

    if (rows.length === 0) return res.send("Home not found");

    res.render("home-detail", {
      home: rows[0],
      pageTitle: "Home Details"
    });
  } catch (err) {
    console.log(err);
  }
};

// ✅ Show edit page
exports.getEditHome = async (req, res) => {
  try {
    const id = req.params.id;

    const [rows] = await Home.findById(id);

    if (rows.length === 0) return res.redirect("/");
        const home = rows[0];
    res.render("edit-home", {
      home: rows[0],
      pageTitle: "Edit Home"
    });
  } catch (err) {
    console.log(err);
  }
};

// update 
exports.postEditHome = async (req, res) => {
  try {
    const { id, houseName, location, price, rating } = req.body;

   const [rows] = await Home.findById(id);
const home = rows[0];
    if (!home) return res.redirect("/");

    const deleteFile = (filePath) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    };

    let updatedImage = home.image;

    // Remove image
    if (req.body.removeImage === "yes") {
      if (home.image) {
        const imagePath = path.join(__dirname, "..", home.image);
        deleteFile(imagePath);
      }
      updatedImage = null;
    }

    // Upload new image
    if (req.file) {
      if (home.image) {
        const oldPath = path.join(__dirname, "..", home.image);
        deleteFile(oldPath);
      }

      // 🔥 FIX HERE
      updatedImage = "/" + req.file.path.replace(/\\/g, "/");
      console.log("Saved image path:", updatedImage);
    }

    const fixedPrice = price === "" ? null : Number(price);
    const fixedRating = rating === "" ? null : Number(rating);
    await Home.updateById(id, {
  houseName,
  location,
  price: fixedPrice,
  image: updatedImage,
  rating: fixedRating
});

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

// ✅ Delete home
exports.deleteHome = async (req, res) => {
  try {
    const id = req.params.id;
    await Home.deleteById(id);

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};