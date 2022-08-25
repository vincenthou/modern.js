const wait = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

const fakeFetch = async (content: unknown, time: number) => {
  await wait(time);
  return content;
};

export default fakeFetch;
