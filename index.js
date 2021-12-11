class Product { // abstract
  constructor(builder) {
    this.name = builder.name
    this.price = builder.price
  }
}


class Burger extends Product {
  constructor(builder) {
    super(builder);
    this.breadType = builder.breadType
    this.salt = builder.salt
    this.cheeze = builder.cheeze
  }
}

class Meat extends Product {
  constructor(builder) {
    super(builder);
    this.rare = builder.rare
  }
}

class productBuilder { // abstract
  constructor(size) {
    this.size = size
    this.salt = 0
    this.cheeze = 0
  }

  addSalt(count){
    this.salt = this.salt + count
    return this
  }

  addCheeze(count) {
    this.cheeze = this.cheeze + count
    return this
  }

  getProduct() {
    throw new Error("Don't describe getProduct")
  }
}

class BurgerBuilder extends productBuilder {
  constructor(size) {
    super(size);
  }

  setSalt(count){
    this.salt = this.salt + count
    return this
  }

  setCheeze(count){
    this.cheeze = this.cheeze + count
    return this
  }

  setBreadType(type){
    this.breadType = type
    return this
  }

  setName(name){
    this.name = name
    return this
  }

  setPrice(count){
    this.price = count
    return this
  }

  getProduct() {
    return new Burger(this)
  }
}


const burger = (new BurgerBuilder(10)).setSalt(3).setCheeze(4).setBreadType("Black").setName("King").setPrice(30).getProduct()
console.log(burger)