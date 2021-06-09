<script>
  function handleClick(e) {
    console.log(this);
    console.log(e);

    // var data =
    let previsao = {
      local: {
        estado: "RJ",
        cidade: "Rio de Janeiro",
      },
      hoje: {
        temp_min: "",
        temp_max: "",
      },
    };

    let cidade = "rio de janeiro";

    let local = previsao.local;

    try {
      fetch("https://apiprevmet3.inmet.gov.br/previsao/3304557", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // body: JSON.stringify(dataPayload)
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //   var d = JSON.stringify(data);
          window.x = data;
          console.log(data);
        })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
</script>

<h1>Home</h1>

<div>
  <!-- <p>Cidade: {cidade}</p> -->
  <span />
</div>

<button on:click={handleClick} type="submit" class="btn btn-primary">
  Submit
</button>
