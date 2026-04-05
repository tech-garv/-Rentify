const db = require("../data/db");

// ✅ GET ALL HOMES
exports.fetchAll = () => {
  return db.promise().execute("SELECT * FROM homes");
};

// ✅ ADD HOME
exports.save = (home) => {
  return db.promise().execute(
    "INSERT INTO homes (houseName, location, price, image, rating) VALUES (?, ?, ?, ?, ?)",
    [home.houseName, home.location, home.price, home.image, home.rating]
  );
};

// ✅ GET ONE HOME
exports.findById = (id) => {
  return db.promise().execute("SELECT * FROM homes WHERE id = ?", [id]);
};

// ✅ DELETE HOME
exports.deleteById = (id) => {
  return db.promise().execute("DELETE FROM homes WHERE id = ?", [id]);
};

// ✅ UPDATE HOME
exports.updateById = (id, data) => {
  return db.promise().execute(
    "UPDATE homes SET houseName=?, location=?, price=?, image=?, rating=? WHERE id=?",
    [data.houseName, data.location, data.price, data.image, data.rating, id]
  );
};
//search
exports.searchFilter = (location, maxPrice) => {
  let query = "SELECT * FROM homes WHERE 1=1";
  let values = [];

  if (location) {
    query += " AND location LIKE ?";
    values.push(`%${location}%`);
  }

  if (maxPrice) {
    query += " AND price <= ?";
    values.push(maxPrice);
  }

  return db.promise().execute(query, values);
};