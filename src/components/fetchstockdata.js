async function fetchData() {
    const result = await fetch(
      "https://rqxt5uvtxk.execute-api.us-east-1.amazonaws.com/default/stockHandler",
      {
        method: "GET",
      }
    )
      .then((result) => result.json())
      .then((data) => data);
  
    return result;
  }
  
  export default fetchData;