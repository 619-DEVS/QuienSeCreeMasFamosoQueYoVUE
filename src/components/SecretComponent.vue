<template>
    <ion-page>
        <ion-content>
            <div>
                <audio allow="autoplay" src="./sounds/secret.mp3" autoplay="true" onplay="handleFirstPlay(event)"></audio>
                <button style="display: none" id="playbutton"></button>
                
            </div>
            <div class="pito">
                <ion-slides :options="slideOpts">
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/1.jpg"/>

                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/2.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/3.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/4.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/5.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/6.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/7.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/8.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/9.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/10.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/11.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/12.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/13.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/14.jpg"/>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div class="slide">
                            <img src="./../../public/assets/img/secrets/15.jpg"/>
                        </div>
                    </ion-slide>
                </ion-slides>
            </div>
        </ion-content> 
    </ion-page>
</template>
<script>
import {IonPage, IonContent, IonSlides, IonSlide} from '@ionic/vue';
export default {
    name: "SecretComponent",
    components: {IonPage, IonContent, IonSlides, IonSlide},
    data() {
        return {
            slideOpts : {
                initialSlide: 0,
                speed: 1000
                ,
                loop: true,
                autoplay: {

                },
            },
            audio: {},
            hasPlayed: false,
        }
    },
    methods: {
        handleFirstPlay(event){
            console.log('this is a test');
            if (this.hasPlayed === false) {
                this.hasPlayed = true;
                let aud  = event.target;
                aud.onplay = null;
                aud.addEventListener('ended', (event) => {
                      console.log('Video stopped either because 1) it was over, ' +
      'or 2) no further data is available.');
                        this.closeSecret();
                })
            }
        },
        playAudio() {
            this.audio.play();
        },
        closeSecret() {
            this.$store.dispatch('changeFingerprint', {value: false, fingerprint:this.fingerprint});
            this.$store.dispatch('setSecretMode', false);
            this.$router.push('/home');
        }
    },
    computed: {
        fingerprint() {
            return this.$store.getters['getFingerprint'];
        }
    },
    async mounted() {
        this.$store.dispatch('setSecretMode', true);
        await this.$store.dispatch('changeFingerprint', {fingerprint: this.fingerprint, value: true});
        // this.mutateAudio();
    }
}
</script>
<style scoped lang="scss">
.slide {
    height: 100%;
    width: 100vh;
    img {
        height: 100vh;
    }
}
</style>