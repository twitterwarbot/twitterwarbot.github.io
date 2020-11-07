<template>
  <div class="container">
  <div class="text-center" style="margin-bottom: 50px;">
        <a href="//www.twitter.com/paramobot"><img class="img-fluid" src="../assets/paramobot.png" alt="paramo" /></a>
      </div>
      <div class="row">
        <div class="col col-lg-2"></div>
        <div class="col col-lg-8">
          <form form action="https://liveformhq.com/form/8e998583-1539-4ead-8b4a-0c8ae72a1e4c" method="POST" accept-charset="utf-8">
          <input type="hidden" value="https://liveformhq.com/thank_you" name="_redirect" />
            <div class="form-group">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Armas</h3>
                  <h6 class="card-subtitle mb-2 text-muted">Los participantes dispondrán de armas y de defensas para ser más fuertes</h6>
                  <div id="carousel1" class="carousel slide bg-dark text-white text-center" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active" style="height: 200px;">
                        <div class="d-block w-100">
                          <h2 style="padding-top: 25px;">aaaaaaaaaa</h2>
                        </div>
                      </div>
                      <template v-for="weapon in shuffledWeapons">
                        <div v-bind:key="weapon" class="carousel-item" style="height: 200px;">
                          <div class="d-block w-100">
                            <h2 style="padding-top: 25px;">{{weapon}}</h2>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class="carousel-caption d-none d-md-block" style="position:absolute;bottom:0;">
                      <h6>Es sólo una de las armas (<a href="/weapons.json">lista completa</a>)</h6>
                      <p style="color: #dd3eda; font-weight: 800;">¡Escribe tus propuestas debajo!</p>
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
                  <input type="text" name="armas" placeholder="Inserte aquí las armas..." class="form-control" id="armas" style="margin-top: 20px;">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Peligros</h3>
                  <h6 class="card-subtitle mb-2 text-muted">Los participantes podrán sufrir enfermedades, palizas y todo tipo de daños...</h6>
                  <div id="carousel2" class="carousel slide bg-dark text-white text-center" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active" style="height: 200px;">
                        <div class="d-block w-100">
                          <h2 style="padding-top: 25px;">aaaaaaaaaa</h2>
                        </div>
                      </div>
                      <template v-for="injure in shuffledInjures">
                        <div v-bind:key="injure" class="carousel-item" style="height: 200px;">
                          <div class="d-block w-100">
                            <h2 style="padding-top: 25px;">{{injure}}</h2>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class="carousel-caption d-none d-md-block" style="position:absolute;bottom:0;">
                      <h6>Es sólo uno de los peligros (<a href="/injures.json">lista completa</a>)</h6>
                      <p style="color: #dd3eda; font-weight: 800;">¡Escribe tus propuestas debajo!</p>
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
                  <input type="text" name="injury" placeholder="Inserte aquí los peligros..." class="form-control" id="injury" style="margin-top: 20px;" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Potenciadores</h3>
                  <h6 class="card-subtitle mb-2 text-muted">¿Qué powerups quieres ver en la batalla para potenciar las estadísticas?</h6>
                  <div id="carousel3" class="carousel slide bg-dark text-white text-center" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active" style="height: 200px;">
                        <div class="d-block w-100">
                          <h2 style="padding-top: 25px;">aaaaaaaaaa</h2>
                        </div>
                      </div>
                      <template v-for="powerup in shuffledPowerups">
                        <div v-bind:key="powerup" class="carousel-item" style="height: 200px;">
                          <div class="d-block w-100">
                            <h2 style="padding-top: 25px;">{{powerup}}</h2>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class="carousel-caption d-none d-md-block" style="position:absolute;bottom:0;">
                      <h6>Es sólo uno de los powerups (<a href="/powerups.json">lista completa</a>)</h6>
                      <p style="color: #dd3eda; font-weight: 800;">¡Escribe tus propuestas debajo!</p>
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
                  <input type="text" name="powerup" placeholder="Inserte aquí los potenciadores..." class="form-control" id="powerup" style="margin-top: 20px;" />
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
            <div style="position: absolute; left: -5000px;">
              <input type="checkbox" name="amazing_yellow_striped_barracuda" value="1" tabindex="-1" autocomplete="no" />
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
</style>
