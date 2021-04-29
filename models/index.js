// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: { model: ProductTag, unique: false }, as: "tagged_products"
}),

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  through: { model: ProductTag, unique: false }, as: "product_tags"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};