const randomWait = async (cb) => {
  await new Promise(resolve => {
    setTimeout(() => resolve(), Math.random() * (2000 - 500) + 500);
  });
  return cb();
}
export default randomWait;