export default function reducer(preloading = true, action) {
  switch (action.type) {
    case "preload/fulfilled":
      return false;
  }

  return preloading;
}
