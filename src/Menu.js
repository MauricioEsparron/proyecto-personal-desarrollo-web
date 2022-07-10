import React from "react";
import '../src/Menu.css';
import Banner from "./img/banner4.png";
function Menu() {
    return (
        <div className="container-Menu">
            <div className="body-Menu">
                <div className="header">
                    <h1>
                        Ramas de la Programación
                    </h1>
                </div>
                <div>
                    <img className="imagenBanner" src={Banner} />
                </div>
                <div className="container-Barra">
                    <nav>
                        <ul class="menu">
                            <li><a href="#">Inicio</a></li>
                            <li>
                                <a href="#">Relacionado</a>
                                <ul id="desplegable">
                                    <li><a href="#">Setup</a></li>
                                    <li><a href="#">Cursos</a></li>
                                    <li><a href="#">Novedades</a></li>
                                    <li><a href="#">¿Quienes Somos?</a></li>
                                </ul>

                            </li>
                            <li><a href="#">Web</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Sistemas Operativos</a></li>
                            <li><a href="#">Desktop</a></li>


                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
}
export default Menu;
