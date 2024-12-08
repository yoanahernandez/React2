import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h1 style={{ textShadow: "1px 1px 8px white" }} className="text-center text-primary">Contacto</h1>
        <br></br>
        <form className="mx-auto border-primary col-md-6">
          <div className=" shadow mb-3 p-3">
            <label style={{ textShadow: "1px 1px 8px white" }} htmlFor="name" className="form-label"><h3>Nombre</h3></label>
            <input type="text" className="shadow form-control card border-primary mb-3" id="name" />
          </div>
          <div className="shadow mb-3 p-3">
            <label style={{ textShadow: "1px 1px 8px white" }} htmlFor="email" className="form-label"><h3>Correo Electrónico</h3></label>
            <input type="email" className="shadow form-control card border-primary mb-3" id="email" />
          </div>
          <div className="shadow mb-3 p-3">
            <label style={{ textShadow: "1px 1px 8px white" }} htmlFor="message" className="form-label"><h3>Mensaje</h3></label>
            <textarea className="shadow form-control card border-primary mb-3" id="message" rows="4"></textarea>
          </div>
          <div className="d-flex justify-content-center">
          <button style={{ textShadow: "1px 1px 5px white" }} type="submit" className="shadow btn btn-primary"><h3>Enviar</h3></button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
 