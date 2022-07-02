function Tarjeta() {
  return(
    <div>
      <div className="card" style={{width: "228px"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
  );
}



function Principal(){
  return(
      <section className="container contenidoPrincipal">
        <div className="subcontenidoPrincipal">
          <Tarjeta/>
          <Tarjeta/>
          <Tarjeta/>
          <Tarjeta/>
        </div>
        <br/>
        <div className="subcontenidoPrincipal">
          <Tarjeta/>
          <Tarjeta/>
          <Tarjeta/>
          <Tarjeta/>
        </div>
        <div className="subcontenidoPrincipal">
          <Tarjeta/>
          <Tarjeta/>
          <Tarjeta/>
          <Tarjeta/>
        </div>
      </section>
  );
}

export default Principal;