<template>
  <div class="container">
  <div class="text-center" style="margin: 25px 0;">
      <a href="//www.twitter.com/paramobot"><img class="img-fluid" src="../assets/paramobot.png" alt="paramo" /></a>
      </div>
      <div class="row text-center justify-content-center">
        <div class="col-12 col-lg-8">
          <form form action="https://liveformhq.com/form/8e998583-1539-4ead-8b4a-0c8ae72a1e4c" method="POST" accept-charset="utf-8">
          <input type="hidden" value="https://liveformhq.com/thank_you" name="_redirect" />
          <div class="form-group">
            <div class="card">
              <div class="card-body text-center">
              <h3 class="card-title">Tu nombre de Twitter</h3>
              <h6 class="card-subtitle mb-2 text-muted">No es obligatorio, pero entrarás a participar en el sorteo</h6>
                <input type="text" name="username" placeholder="Inserte username..." class="form-control" id="username" />
              </div>
            </div>
          </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Armas</h3>
                  <h6 class="card-subtitle mb-2 text-muted">Los participantes dispondrán de armas y de defensas para ser más fuertes</h6>
                  <div id="carousel1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="d-block w-100">
                          <h4 class="d-block d-md-none" style="padding: 25px 40px;">las páginas amarillas</h4>
                          <h2 class="d-none d-md-block" style="padding: 25px 70px;">las páginas amarillas</h2>
                        </div>
                      </div>
                      <template v-for="weapon in shuffledWeapons">
                        <div v-bind:key="weapon" class="carousel-item">
                          <div class="d-block w-100">
                            <h4 class="d-block d-md-none" style="padding: 25px 40px;">{{weapon}}</h4>
                            <h2 class="d-none d-md-block" style="padding: 25px 70px;">{{weapon}}</h2>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class="carousel-space d-block d-md-none"></div>
                    <div class="carousel-caption">
                      <h6>Es sólo una de las armas (<a style="font-weight: normal;" href="/json/weapons.json">lista completa</a>)</h6>
                      <p style="color: black; font-weight: 800;">¡Escribe tus propuestas debajo!</p>
                    </div>
                    <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                  <input type="text" name="armas" placeholder="Inserte aquí las armas..." class="form-control" id="armas">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Peligros</h3>
                  <h6 class="card-subtitle mb-2 text-muted">Los participantes podrán sufrir enfermedades, palizas y todo tipo de daños...</h6>
                  <div id="carousel2" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="d-block w-100">
                          <h4 class="d-block d-md-none" style="padding: 25px 40px;">una hostia a mano abierta</h4>
                          <h2 class="d-none d-md-block" style="padding: 25px 70px;">una hostia a mano abierta</h2>
                        </div>
                      </div>
                      <template v-for="injure in shuffledInjures">
                        <div v-bind:key="injure" class="carousel-item">
                          <div class="d-block w-100">
                            <h4 class="d-block d-md-none" style="padding: 25px 40px;">{{injure}}</h4>
                            <h2 class="d-none d-md-block" style="padding: 25px 70px;">{{injure}}</h2>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class="carousel-space d-block d-md-none"></div>
                    <div class="carousel-caption">
                      <h6>Es sólo uno de los peligros (<a style="font-weight: normal;" href="/json/injures.json">lista completa</a>)</h6>
                      <p style="color: black; font-weight: 800;">¡Escribe tus propuestas debajo!</p>
                    </div>
                    <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                  <input type="text" name="injury" placeholder="Inserte aquí los peligros..." class="form-control" id="injury" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Potenciadores</h3>
                  <h6 class="card-subtitle mb-2 text-muted">¿Qué powerups quieres ver en la batalla para potenciar las estadísticas?</h6>
                  <div id="carousel3" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="d-block w-100">
                        <h4 class="d-block d-md-none" style="padding: 25px 40px;">un Beefeater limón</h4>
                        <h2 class="d-none d-md-block" style="padding: 25px 70px;">un Beefeater limón</h2>
                        </div>
                      </div>
                      <template v-for="powerup in shuffledPowerups">
                        <div v-bind:key="powerup" class="carousel-item">
                          <div class="d-block w-100">
                          <h4 class="d-block d-md-none" style="padding: 25px 40px;">{{powerup}}</h4>
                          <h2 class="d-none d-md-block" style="padding: 25px 70px;">{{powerup}}</h2>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class="carousel-space d-block d-md-none"></div>
                    <div class="carousel-caption">
                      <h6>Es sólo uno de los powerups (<a style="font-weight: normal;" href="/json/powerups.json">lista completa</a>)</h6>
                      <p style="color: black; font-weight: 800;">¡Escribe tus propuestas debajo!</p>
                    </div>
                    <a class="carousel-control-prev" href="#carousel3" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel3" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                  <input type="text" name="powerup" placeholder="Inserte aquí los potenciadores..." class="form-control" id="powerup" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body text-center">
                <h3 class="card-title">¿Algo más?</h3>
                <h6 class="card-subtitle mb-2 text-muted">Algo más que se te ocurra, yokse</h6>
                  <input type="text" name="suggestion" placeholder="Inserte aquí las sugerencias..." class="form-control" id="suggestion" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body text-center">
                  <a style="color: #dd3eda; font-weight: 800;">Acuérdate de pulsar aquí! --------------------> </a>
                  <button type="submit" class="btn btn-primary" style="float: right; width: 150px;">Enviar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>
  </div>
</template>

<script>
import weapons from '../assets/weapons.json';
import injures from '../assets/injures.json';
import powerups from '../assets/powerups.json';
import $ from 'jquery';

export default {
    name: 'hello-world',
    data () {
      return {
        weapons: weapons,
        injures: injures,
        powerups: powerups,
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        $('#carousel1').carousel({
          interval: 2000
        })
        $('#carousel2').carousel({
          interval: 2000
        })
        $('#carousel3').carousel({
          interval: 2000
        })
      })
    },
    computed: {
      shuffledWeapons: function () { return this.shuffle(this.weapons) },
      shuffledInjures: function () { return this.shuffle(this.injures) },
      shuffledPowerups: function () { return this.shuffle(this.powerups) },
    },
    methods: {
        shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
      }
    }
}

</script>

<style scoped>
.carousel-control-prev-icon, .carousel-control-next-icon {
  margin-top: 38px;
}
.carousel-control-next, .carousel-control-prev {
  align-items: self-start;
}
.carousel-caption {
  position:absolute;
  bottom:0;
  padding-bottom: 0;
}
.carousel-item {
height: 170px;
}
.carousel-space {
height: 50px;
}
.form-control {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 30px;
}
.carousel.slide{
 background-color: #dd3eda;
 text-align: center;
 color: white;
}
a {
color: #b4bdff;
}
</style>
