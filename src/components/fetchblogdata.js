async function fetchData() {
    const result = await fetch(
      "https://1ejf7544ql.execute-api.us-east-1.amazonaws.com/default/blogHandler",
      {
        method: "GET",
      }
    )
      .then((result) => result.json())
      .then((data) => data);
  
    return result;
  }
  
  export default fetchData;