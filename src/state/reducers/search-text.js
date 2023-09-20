export default function reducer(text = "", action) {
  switch (action.type) {
    case "searchFunds":
      return action.payload.text;
  }

  return text;
}
