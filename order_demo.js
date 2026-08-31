
function step(name, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, delay);
  });
}


console.log('--- Promise chain start ---');
step('Order received')
  .then(() => step('Order prepared'))
  .then(() => step('Order dispatched'))
  .then(() => step('Order delivered'))
  .then(() => {
    console.log('--- Promise chain end ---');

    
    (async function processOrder() {
      console.log('--- async/await start ---');
      await step('Order received');
      await step('Order prepared');
      await step('Order dispatched');
      await step('Order delivered');
      console.log('--- async/await end ---');
    })();
  })
  .catch((err) => console.error('Error:', err));
