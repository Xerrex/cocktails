function Home(props){

  return(
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Expore Coctails</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">View available cocktails</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              onClick={props.explore}>
              Expore</button>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Home;