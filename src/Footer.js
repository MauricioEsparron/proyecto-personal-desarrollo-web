import React from "react";
import '../src/Footer.css';
import YouTube from "./img/youtube.png";
import Twitter from "./img/twitter.png";
import Logo from "./img/logo.jpeg";


function Footer() {
    return (
        <div className="container-Footer">
            <footer>
                <div id="fila">
                    <a href="#"><img class="logo" src={Logo} alt="logo"/></a>


                    <div id="contacto">
                        <h3>Contacto</h3>
                        <hr size="3" width="100%" color="#2ECC71" />
                        <br />
                        <ul>
                            <li>
                                <p class="datos"><a href="mailto:RocketTeam@gmail.com">Envíanos un correo</a>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p class="datos"><a href="tel:999999999">Telef: 999-999-999</a></p>
                            </li>
                        </ul>
                    </div>

                    <div class="lista1">
                        <h3 class="columna">Mapa de sitio</h3>
                        <hr size="3" width="100%" color="#2ECC71" />
                        <br />
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Web</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Sistemas Operativos</a></li>
                            <li><a href="#">Desktop</a></li>
                        </ul>
                    </div>
                    <div class="lista2">
                        <h3 class="columna">Información</h3>
                        <hr size="3" width="100%" color="#2ECC71" />
                        <br />
                        <ul>
                            <li><a href="#">¿Quienes Somos?</a></li>
                            <li><a href="#">Misión</a></li>
                            <li><a href="#">Visión</a></li>
                            <li><a href="#">Objetivo</a></li>
                        </ul>
                    </div>
                    <div class="lista3">
                        <h3 class="columna">Destacado</h3>
                        <hr size="3" width="100%" color="#2ECC71" />
                        <br />
                        <ul>
                            <li><a href="#">Novedades</a></li>
                            <li><a href="#">Relacionado</a></li>
                            <li><a href="#">Cursos</a></li>
                        </ul>
                    </div>
                </div>
                <div class="texto">
                    <p>Esta es una página web va dirigida a todo aquel que busque información Relacionada a la Programación y
                        tecnología en general.</p>

                </div>
                <br />
                <hr size="3" width="100%" color="#2ECC71" />
                <div id="copyright">
                    <p>Copyright © Lima, Perú - 2022. Todos los Derechos Reservados. </p>
                    <a target="_blank" href="https://twitter.com/i/flow/login"><img src={YouTube} /></a>
                    <a target="_blank" href="https://www.youtube.com/"><img src={Twitter} /></a>
                </div>




            </footer>
        </div>);

}
export default Footer;