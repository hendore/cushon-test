export default function reducer(funds = [], action) {
  switch (action.type) {
    case "preload/fulfilled":
      return action.payload.funds;
  }

  return funds;
}
