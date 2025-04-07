// Classe représentant un produit
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Classe représentant un élément dans le panier
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Classe représentant le panier d'achat
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    displayCart() {
      if (this.items.length === 0) {
        console.log("Le panier est vide.");
      } else {
        console.log("Contenu du panier :");
        this.items.forEach(item => {
          console.log(`- ${item.product.name} x${item.quantity} = ${item.getTotalPrice().toFixed(2)}€`);
        });
        const total = this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
        console.log(`Total : ${total.toFixed(2)}€`);
      }
    }
  }
  
  // --- Test de fonctionnement ---
  
  // Création de produits
  const pomme = new Product(1, "Pomme", 0.5);
  const banane = new Product(2, "Banane", 0.3);
  const orange = new Product(3, "Orange", 0.7);
  
  // Création du panier
  const monPanier = new ShoppingCart();
  
  // Ajout d'éléments
  monPanier.addItem(pomme, 3);   // 3 pommes
  monPanier.addItem(banane, 5);  // 5 bananes
  monPanier.addItem(orange, 2);  // 2 oranges
  
  // Affichage du panier
  monPanier.displayCart();
  
  // Suppression d’un produit
  monPanier.removeItem(2); // Supprime les bananes (id = 2)
  
  // Affichage après suppression
  monPanier.displayCart();
  