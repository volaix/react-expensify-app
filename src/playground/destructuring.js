const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'penguin'
  }
}

const {name: publisherName = 'self-Published'} = book.publisher


console.log(publisherName) // Penguin, default self-published

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennysylvania', '19321']

console.log(``);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']

const [product, , mediumPrice] = item

console.log(`A medium ${product} costs ${mediumPrice} `);

