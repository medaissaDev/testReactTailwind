export const FetchTasks = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
};
