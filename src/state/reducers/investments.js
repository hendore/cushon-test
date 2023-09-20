export default function reducer(investments = [], action) {
  switch (action.type) {
    case "preload/fulfilled":
      return action.payload.investments;

    case "addInvestment/fulfilled":
      return addInvestment(investments, action.payload);
  }

  return investments;
}

function addInvestment(investments, { id, fundId, amount, ts }) {
  return [{ id, fundId, amount, ts }, ...investments];
}
