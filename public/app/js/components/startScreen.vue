<style scoped>
    .start-screen {
        &__container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100%;
        }

        &__mysterious-cat {
            width: 150px;
            height: auto;
            display: block;
            margin: 0 auto;

            &:hover {
                cursor: pointer;
            }
        }

        &__input {
            margin-top: 30px;
            display: flex;
            width: 370px;

            &-field {
                width: 100%;
                font-size: 16px;
                color: #464a4c;
                border: 1px solid rgba(0,0,0,.15);
                border-radius: 4px;
                outline: none;
                margin-top: 0;
            }

            &-button {
                font-size: 14px;
                font-weight: 400;
                color: #a9a7a7;
                text-align: center;
                border: 1px solid rgba(0,0,0,.15);
                border-radius: 0 4px 4px 0;
                margin-left: -3px;
                cursor: pointer;

                img {
                    width: 18px;
                    height: 18px;
                    vertical-align: text-bottom;
                }
            }

            &-field, &-button {
                padding: 7px 12px;
                line-height: 1.5;
                background-color: #fff;
                margin-bottom: 0;
            }
        }
    }
</style>

<template>
    <div class="start-screen__container">
        <div>
            <img v-on:click="toggleInput" class="start-screen__mysterious-cat" src="public/app/img/cat-emoji.png" alt="Fairy Cat 🐱">
            <div v-on:click="wobbleEmpty" v-bind:class="{hidden : isHidden, wobble : isEmpty}" class="start-screen__input">
                <input ref="formInput" type="text" class="start-screen__input-field" placeholder="I want some magic...">
                <span class="start-screen__input-button">
                    <img src="public/app/img/mushroom-emoji.png" alt="">
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                isHidden: true,
                isEmpty: false
            };
        },
        methods: {
            toggleInput: function () {

                this.isHidden = !this.isHidden;

            },
            wobbleEmpty: function () {
                if (this.$refs.formInput.value === '') {
                    this.isEmpty = true;
                } else {
                    this.isEmpty = false;
                }
            }
        }
    }
</script>