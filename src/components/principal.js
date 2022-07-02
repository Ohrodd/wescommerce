import celulares from "../products.json";

function Tarjeta() {
  return(
    <div className="subcontenidoPrincipal">
      {celulares.map((celulares)=>
        <div className="card" style={{width: "308px", height:"550px"}}>
          <img src={celulares.imagen} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{celulares.name_product}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" className="btn btn-primary">Ver el articulo</a>
          </div>
        </div>
        )}
    </div>
  );
}

function Principal(){
  console.log(celulares);
  return(
      <section className="container contenidoPrincipal">
          <Tarjeta/>
      </section>
  );
}

export default Principal;