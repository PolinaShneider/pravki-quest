<!--Styles for dynamically created elements-->
<style>
    .console__message {
        margin: 5px 0;
    }
</style>

<!--Components scoped styles-->
<style scoped>
    .console {
        margin: 30px auto;
        background: #000;
        padding: 25px;
        width: 452px;
        height: 250px;
        overflow-y: scroll;
        color: #fff;
        font: 12px/16px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;

        @media (max-width: 450px) {
            width: 100%;
            box-sizing: border-box;
            padding: 15px;
        }

        &__form {
            height: 100%;
            position: absolute;
            top: 20px;
            left: 20px;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;
            padding: 20px;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: .3rem;
            overflow-y: scroll;

            &--evil {
                background-image: url('../../img/black-bg.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            }

            &-button {
                width: 250px;
                min-height: 58px;
                font: 20px/25px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
            }

            &-alien {
                width: 300px;
                height: auto;
                display: block;
                margin: 50px auto;
            }

            &-gorilla {
                position: absolute;
                right: 20px;
                bottom: 20px;
            }

            &-zombie {
                position: absolute;
                top: 20px;
                left: 20px;
            }

            &-avocado {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            &-owl {
                position: absolute;
                left: 20px;
                bottom: 20px;
            }

            &-h1--evil {
                color: #9A0000;
                text-transform: uppercase;
                letter-spacing: 0.8px;
            }
        }

        &__is-visible {
            visibility: visible;
            opacity: 1;
        }

        &__is-hidden {
            visibility: hidden;
            opacity: 0;
            transition: visibility ease 1s, opacity ease 1.5s linear;
        }

        &__input {
            background-color: transparent;
            border: 0 solid transparent;
            outline: none;
            color: #fff;
            font: 12px/16px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
            padding: 0;
            margin: 0;

            + label {
                float: left;
                margin-right: 7px;

                &::before {
                    font: 12px/15px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
                    vertical-align: middle;
                    content: attr(data-before);
                    display: inline-block;
                    color: #fff;
                }
            }
        }

        &__framed {

            &-accept {
                margin-top: 16px;
                display: inline-block;
                outline: 1px solid #fff;
                padding: 0 3px;

                &:hover {
                    cursor: pointer;
                }
            }

            &::before, &::after {
                content: "";
                display: block;
                height: 16px;
                background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14.438 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext fill='%23ccc' y='12' font-family='Menlo-Regular, Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif' font-size='12'%3E=-%3C/text%3E%3C/svg%3E") 0 50%
            }

            &-inner {
                position: relative;
                display: block;
                padding: 15px 14px 13px;

                &::before, &::after {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    content: "";
                    display: block;
                    width: 14px;
                    background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14.438 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext fill='%23ccc' y='12' font-family='Menlo-Regular, Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif' font-size='12'%3E|%3C/text%3E%3C/svg%3E") 50% 0;
                }

                &::before {
                    left: 0;
                }

                &::after {
                    right: -7px;
                }
            }
        }
    }
</style>

<template>
    <div ref="consoleWrapper" v-on:click="consoleFocus" class="console" v-bind:class="{'console__is-hidden' : consoleIsHidden}">
        <p>
            Привет! Мне очень нужна твоя помощь. Есть макет — в нем нужно кое-что подправить по мелочи. Сам не могу справиться. В долгу не останусь. Чем быстрее сделаешь, тем больше заплачу.
        </p>
        <p v-bind:class="{hide : commandsAreHidden}" class="console__framed">
            <span class="console__framed-inner">
                <span>
                    <span v-for="command in commandsList" v-if="command.commandDescription">
                        {{ command.commandName }} - {{ command.commandDescription }}<br/>
                    </span>

                    <span v-on:click="hideCommands" class="console__framed-accept">Понятно</span>
                </span>
            </span>
        </p>
        <div ref="consoleBody"></div>
        <input v-on:keyup.enter="consoleMethods" class="console__input" type="text" ref="consoleInput">
        <label ref="consoleInputLabel" data-before="angry-freelancer@macbook: ~ user$"></label>
        <audio preload="auto">
            <source src="https://github.com/nclud/2011.beercamp.com/blob/gh-pages/audio/inception.mp3?raw=true" type="audio/mp3" />
            <source src="https://github.com/nclud/2011.beercamp.com/blob/gh-pages/audio/inception.ogg?raw=true" type="audio/ogg" />
        </audio>
        <div class="console__form console__form--evil">
            <h1 class="console__form-h1--evil">Поздравляю! Теперь ты магистр черного ордена вёрстки</h1>
            <img class="console__form-zombie" src="../../img/zombie-emoji.png" alt="">
            <img class="console__form-owl" src="../../img/owl-emoji.png" alt="">
            <img class="console__form-alien" src="../../img/pizza-emoji.png" alt="">
            <a v-on:click="closeForm" class="console__form-button" href="#">
                <span>Принять</span>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        /**
         * Get command value from parent component
         */
        props: ['currentCommand'],
        data: function() {
            return {
                /**
                 * List of possible console commands
                 */
                commandsList: [
                    {
                        commandName: '/help',
                        commandDescription: 'показать список возможных команд',
                        commandOutput: 'Я всегда рад помочь. Не забывай, что команды начинаются со слэша /'
                    },
                    {
                        commandName: '/clear',
                        commandDescription: 'очистить вывод консоли',
                        commandOutput: ''
                    },
                    {
                        commandName: '/wget',
                        commandDescription: '',
                        commandOutput: '#download-files display: block;'
                    },
                    {
                        commandName: '/hint',
                        commandDescription: 'вывести подсказку',
                        commandOutput: [
                            'Некоторые элементы интерфейса могут быть скрыты. То есть они есть на странице, но мы не можем догадаться об их существовании. Смекаешь, какое CSS-свойство здесь может быть замешано?',
                            'CSS-cтили можно применять по тегу (например, span), по .class и по #id. Помнишь, в чем разница?',
                            'Ладно, больше не буду мучить тебя. Тебе еще предстоит хорошенько поработать с макетом. Поищи в интернете, как с помощью команд в консоли скачивать файлы. Не забывай, что у нас любую команду нужно вводить, начиная со слэша. Заодно и проверишь себя'
                        ]
                    },
                    {
                        commandName: '/sudo',
                        commandDescription: 'активировать режим супер-пользователя',
                        commandOutput: 'Теперь ты супер-пользователь! Это влааасть. И ответственность. Надеюсь, ты понимаешь, что делаешь'
                    }
                ],
                commandsAreHidden: true,
                consoleIsHidden: true,
                consoleCommand: '',
                superUser: false,
                downloadButtonIsVisible: false,
                hintsStep: 0,
                formIsHidden: true
            }
        },
        methods: {
            /**
             * Clear console input
             */
            clearInput: function() {
                let consoleInput = this.$refs.consoleInput;
                consoleInput.value = '';
            },
            /**
             * Clear console
             */
            clearConsole: function() {
                this.$refs.consoleBody.innerHTML = '';
            },
            /**
             * Hide console
             */
            hideConsole: function() {
                this.consoleIsHidden = true;
            },
            /**
             * Hide commandList
             */
            hideCommands: function () {
                this.commandsAreHidden = true
            },
            /**
             * Show commandList
             */
            showCommands: function() {
                this.commandsAreHidden = false;
            },
            /**
             * Enables superuser privileges
             */
            enableRoot: function() {
                this.superUser = true;
                this.$refs.consoleInputLabel.dataset.before = 'angry-freelancer@macbook: ~ root#';
            },
            /**
             * Disables superuser privileges
             */
            disableRoot: function() {
                this.superUser = false;
                this.$refs.consoleInputLabel.dataset.before = 'angry-freelancer@macbook: ~ user$';
            },
            consoleFocus: function () {
                this.$refs.consoleInput.focus();
                setTimeout(() => {
                    this.$refs.consoleInput.focus();
                })
            },
            showDownloadButton: function () {
                this.downloadButtonIsVisible = true;
                this.$parent.$emit('showDownloadButton', this.downloadButtonIsVisible);
            },
            closeForm: function () {
                document.getElementsByTagName('audio')[0].play();
            },
            consoleMethods: function () {
                /**
                 * Pass input's command to parent components
                 */
                this.consoleCommand = this.$refs.consoleInput.value;

                /**
                 * Perform console actions depending on an entered command
                 */
                switch (this.consoleCommand) {
                    case '/help':
                        this.addMessage();
                        this.clearInput();
                        this.showCommands();
                        break;
                    case '/clear':
                        this.clearInput();
                        this.clearConsole();
                        break;
                    case '/sudo':
                        this.addMessage();
                        this.clearInput();
                        this.enableRoot();
                        break;
                    case '/wget':
                        this.addMessage();
                        this.clearInput();
                        this.showDownloadButton();
                        break;
                    default:
                        this.addMessage();
                        this.clearInput();
                        break;
                }
            },
            /**
             * Add message to console
             */
            addMessage: function () {
                let consoleBody = this.$refs.consoleBody,
                    consoleWrapper = this.$refs.consoleWrapper,
                    consoleInputGreeting = this.$refs.consoleInputLabel.getAttribute('data-before');
                /**
                 * Insert entered command name
                 */
                let command = document.createElement('div');
                command.textContent = consoleInputGreeting + ' ' + this.consoleCommand;
                command.classList.add('console__message');
                consoleBody.appendChild(command);

                /**
                 * Insert entered command result
                 */
                let commandOutput = document.createElement('div');

                if (this.getCommandOutput(this.consoleCommand)) {
                    commandOutput.textContent = this.getCommandOutput(this.consoleCommand);

                    if (this.consoleCommand === '/hint' && this.hintsStep < 2) {
                        this.hintsStep++;
                    } else {
                        this.hintsStep = 0;
                    }
                } else {
                    commandOutput.textContent = 'Извини, я тебя не понимаю 😿';
                }

                commandOutput.classList.add('console__message');
                this.$refs.consoleBody.appendChild(commandOutput);

                /**
                 * Scroll console to the bottom of output
                 */
                consoleWrapper.scrollTop = consoleWrapper.scrollHeight;
            },

            /**
             * Check if command exists and has output
             * @param {String} commandVal - name of the command
             */
            getCommandOutput: function (commandVal) {
                for (let i = 0; i < this.commandsList.length; i++) {
                    if (this.commandsList[i].commandName === commandVal && this.commandsList[i].commandOutput !== '') {
                        /**
                         * In case commandList is already shown
                         */
                        if (commandVal === '/help' && this.commandsAreHidden === false) {
                            return "Список возможных команд выведен выше. Прочитай их внимательно и нажми 'Понятно', если это действительно так 🤗";
                        }

                        if (commandVal === '/hint') {
                            return this.commandsList[i].commandOutput[this.hintsStep];
                        }
                        return this.commandsList[i].commandOutput;
                    }
                }
            }
        },

        /**
         * Watch for '/start' command from parent component
         */
        watch: {
            currentCommand: function() {
                this.consoleIsHidden = false;
                this.consoleFocus();
            }
        }
    }
</script>
