const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
        guarana: {
            type: 'Guaraná Antartica',
            price: 10,
            amount: 1,
          }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  //1) Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, 
  // entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const clientName = order.name
    const receiverName = order.order.delivery.deliveryPerson
    const phoneNumber = order.phoneNumber
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;
    console.log(`Olá ${receiverName}, entrega para: ${clientName}, telefone: ${phoneNumber},
    no endereço: ${street}, n°: ${number}, ap: ${apartment}`)

    
  
  }
  // 2) Complete a função orderModifier() para que seu retorno seja similar a 
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let newBuyer = order.name = 'Luiz Silva';
    let newValue = order.payment.total = 50;
    const pizza = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizza} e ${drink} é R$${newValue},00`)


  
  }
  
  orderModifier(order);