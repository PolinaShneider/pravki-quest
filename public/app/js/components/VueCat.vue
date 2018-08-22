<style scoped>
    .start-screen {
        &__container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        &__download {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            text-decoration: none;
            background: linear-gradient(to bottom, rgba(255,255,255,255.75) 0%,rgba(255,255,255,0) 100%);
            box-shadow: 0 2px 3px 0 rgba(38, 45, 67, 0.02);
            border-radius: 4.8px;
            border: 1px solid #7952b3;
            color: #7952b3;
            width: 250px;
            height: 58px;
            font: 20px/25px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;

            &:hover {
                color: #fff;
                background: linear-gradient(to bottom, rgba(121,82,179,1) 0%,rgba(95,49,125,1) 100%);
            }
        }

        &__mysterious-cat {
            width: 389px;
            height: auto;
            display: block;
            margin: 30px auto;

            @media (max-width: 450px) {
                max-width: 100%;
                margin: 15px auto;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>

<template>
    <div class="start-screen__container">
        <div>
            <img v-on:click="raiseUp" class="start-screen__mysterious-cat" src="public/app/img/notebook-emoji.jpeg">
        </div>
        <a class="start-screen__download" v-bind:class="{hide : !downloadButtonIsVisible}" href="/pravki.zip" download>Скачать</a>
    </div>
</template>
<script>
    export default {
        props: ['downloadButtonIsVisible'],
        data: function() {
            return {
                isHigh: false,
            };
        },
        methods: {
            /**
             * Show input field under cat's had
             */
            raiseUp: function () {

                this.isHigh = true;
                this.$parent.$emit('raiseUp', this.isHigh);

            }
        }
    }
</script>