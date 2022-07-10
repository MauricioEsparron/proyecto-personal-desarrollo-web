import React from "react";
import '../src/RamasProgramacion.css';
import Menu from './Menu';
import Footer from './Footer';

/*import imagen*/
import Noticias from './img/Noticias.jpg'

var actualNoticia = 0;
function rotacion() {

    var ImagenNoticia = new Array(5); //posicion del 0 al 2
    ImagenNoticia[0] = "./img/Noticias.jpg";
    ImagenNoticia[1] = "./img/logo_java.jpg";
    ImagenNoticia[2] = "./img/logo_python.png";
    ImagenNoticia[3] = "./img/logo_javascript.png";
    ImagenNoticia[4] = "./img/logo_c_mas_mas.png";
    var objImagen;
    
    objImagen = document.getElementById("imagen");

    objImagen.src = ImagenNoticia[actualNoticia];//Imagen [2]
    actualNoticia++;//actual 3

    if (actualNoticia == ImagenNoticia.length)
    actualNoticia = 0;

    setTimeout("rotacion()", 1500)
}

function RamasProgramacion() {
    return (
        <div className="container-RamasProgramacion">
    
            <body  onload="rotacion()">
            <Menu />
                          <div className="subcontainer-RamasProgramacion">
                <h1 className="titulo">Destacados</h1>
                <hr size="3" width="90%" color="#2ECC71" />
                <div>
                    <main>
                        <section>
                            <figure>
                                <figcaption>
                                    <div>
                                        <img src={Noticias} alt="ImagenNoticias" id="imagen"/>
                                    </div>
                                    <h3>Noticias</h3>
                                    <hr size="3" width="90%" color="#2ECC71" />
                                    <p>Para tener una brújula en esta búsqueda existe el índice TIOBE, indicador de la
                                        popularidad
                                        de los lenguajes de programación que se actualiza cada mes. Sus ratings se basan en el
                                        número de ingenieros habilitados a nivel mundial, así como de cursos y proveedores.
                                        También
                                        se utilizan motores de búsqueda como Google, Bing, Yahoo!, Wikipedia, Amazon, YouTube y
                                        Baidu para integrar el índice mensual.
                                        En febrero de este año, los 12 lenguajes de programación más populares en el índice
                                        TIOBE
                                        fueron:
                                    </p>
                                </figcaption>
                            </figure>
                            <figure>
                                <figcaption>
                                    <div>
                                        <img src="#" alt="" />
                                    </div>
                                    <h3>CriptoNoticias</h3>
                                    <hr size="3" width="90%" color="#2ECC71" />
                                    <p>El precio de bitcoin (BTC) forma soporte en la línea de USD 35.000 luego de la fuerte caída 
                                        que tuvo el jueves. Desde entonces, ha estado rebotando en esa cifra, haciendo pequeñas subidas 
                                        hasta los USD 36.500. Un movimiento que genera incertidumbre sobre si ya hemos visto su mínimo para
                                         esta corrección de valor o continuará bajando. La rápida depreciación de bitcoin ha agudizado el 
                                         sentimiento de miedo «extremo» en los traders, pasando de una medición de 27 a 22, según el índice 
                                         Fear & Greed. El explorador de datos CoinGlass registra que durante las últimas 24 horas se han liquidado
                                          (vendido) más de 6.650 BTC, lo que representa USD 238 millones. Una fuerza mayor a la registrada en los 
                                          últimos tres meses.
                                    </p>
                                </figcaption>
                            </figure>
                            <figure>
                                <figcaption>
                                    <div>
                                        <img src="#" alt="" />
                                    </div>
                                    <h3>Novedades</h3>
                                    <hr size="3" width="90%" color="#2ECC71" />
                                    <p>Un navegador web es un portal a Internet. Cuando queremos visitar un sitio web cualquiera, el navegador es
                                         la herramienta adecuada. Seguramente usted utilice un navegador web varias veces al día, incluso ahora mismo
                                         para leer este artículo. En pocas palabras, el navegador es lo que le permite entrar en una página de Internet
                                         con el ordenador o el teléfono. Dada la función tan crucial que desempeñan en nuestra vida digital, es importantísimo
                                          que los navegadores sean rápidos. Con la mejora de la infraestructura de Internet (demos la bienvenida al 5G, y no,
                                           no va a causar enfermedades), los diseños de los sitios web van aumentando en complejidad.
                                    </p>
                                </figcaption>
                            </figure>

                        </section>
                    </main>
                </div>
            </div>
            </body>
  
            <div>
            <Footer/>
            </div>
        </div>
    );
}
export default RamasProgramacion;