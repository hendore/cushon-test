export default function reducer(activeFundId = null, action) {
  switch (action.type) {
    case "selectFund":
      return action.payload.fundId;

    case "deselectFund":
    case "addInvestment/fulfilled":
    case "addInvestment/rejected":
      return null;
  }

  return activeFundId;
}
