<style scoped>
    .start-screen {
        &__container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__mysterious-cat {
            width: 150px;
            height: auto;
            display: block;
            margin: 30px auto;

            @media (max-width: 450px) {
                margin: 15px auto;
            }

            &:hover {
                cursor: pointer;
            }
        }

        &__input {
            margin-top: 30px;
            display: flex;
            width: 370px;

            @media (max-width: 450px) {
                width: 100%;
            }

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
            <img v-on:click="showInput" class="start-screen__mysterious-cat" src="public/app/img/cat-emoji.png" alt="Fairy Cat 🐱">
            <div v-on:keyup.enter="wobbleEmpty" v-bind:class="{hidden : isHidden, wobble : isEmpty}" class="start-screen__input">
                <input v-on:keyup.enter="userInput" ref="formInput" type="text" class="start-screen__input-field" placeholder="Enter /start command">
                <span class="start-screen__input-button" v-on:click="wobbleEmpty">
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
                isEmpty: false,
                currentCommand: ''
            };
        },
        methods: {
            /**
             * Show input field under cat's had
             */
            showInput: function () {

                this.isHidden = false;

            },
            /**
             * Add shaking animation if input field is empty
             */
            wobbleEmpty: function () {
                if (this.$refs.formInput.value === '') {
                    this.isEmpty = true;
                    let self = this;
                    setTimeout(function(){
                        self.isEmpty = false;
                    }, 2000);
                }
            },
            /**
             * Passed commands value to the parent component
             */
            userInput: function () {
                this.currentCommand = this.$refs.formInput.value;
                this.$parent.$emit('userInput', this.currentCommand);
            }
        }
    }
</script>