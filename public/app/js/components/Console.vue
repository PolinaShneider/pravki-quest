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

            @media (max-width: 600px) {
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }

            &--evil {
                background-image: url('/pravki-quest/public/app/img/black-bg.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            }

            &--good {
                 background-image: url('/pravki-quest/public/app/img/good-bg.jpg');
                 background-repeat: no-repeat;
                 background-size: cover;
            }

            &-button {
                width: 250px;
                min-height: 58px;
                margin-top: -70px;
                font: 20px/25px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;

                @media (max-width: 450px) {
                    margin-top: 70px;
                }
            }

            &-cat {
                width: 350px;
                height: auto;
                display: block;
                margin: 50px auto;
                z-index: 10;

                @media (max-width: 450px) {
                    display: none;
                }
            }

             &-coffee {
                  width: 250px;
                  height: auto;
                  display: block;
                  margin: 0 auto 100px;

                  @media (max-width: 450px) {
                      display: none;
                  }
              }

            &-zombie {
                position: absolute;
                top: 20px;
                left: 20px;

                @media (max-width: 1000px) {
                    display: none;
                }
            }

            &-owl {
                position: absolute;
                left: 20px;
                bottom: 20px;

                @media (max-width: 450px) {
                    display: none;
                }
            }

            &-h1--evil {
                 color: #C10115;
                 text-transform: uppercase;
                 letter-spacing: 2px;
                 font-size: 30px;
                 max-width: 600px;
                 line-height: 1.25em;
                 text-align: center;
                 font-weight: 500;

                 @media (max-width: 600px) {
                     font-size: 25px;
                 }
            }

            &-h1--good {
                 color: #000;
                 font-family: 'Pacifico', cursive;
                 letter-spacing: 2px;
                 font-size: 32px;
                 max-width: 600px;
                 line-height: 1.25em;
                 text-align: center;
                 font-weight: 400;

                @media (max-width: 450px) {
                    color: #fff;
                    -webkit-text-stroke: 2px #991411;
                    font-size: 25px;
                }
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
        <audio id="horror" preload="auto">
            <source src="/pravki-quest/public/app/music/horror.mp3" type="audio/mp3" />
        </audio>
        <audio id="relax" preload="auto">
            <source src="/pravki-quest/public/app/music/relax.mp3" type="audio/mp3" />
        </audio>
        <div v-bind:class="[{hide : formIsHidden}, superUser ? 'console__form--evil' : 'console__form--good']" class="console__form">
            <h1 v-bind:class="[superUser ? 'console__form-h1--evil' : 'console__form-h1--good']">Поздравляю! Теперь ты магистр {{ superUser ? 'черного' : 'белого' }} ордена вёрстки</h1>
            <img v-bind:class="{ hide: !superUser }" class="console__form-zombie" src="/pravki-quest/public/app/img/zombie-emoji.png" alt="">
            <img v-bind:class="{ hide: !superUser }" class="console__form-owl" src="/pravki-quest/public/app/img/owl-emoji.png" alt="">
            <img v-bind:class="{hide: !superUser}" class="console__form-cat" src="/pravki-quest/public/app/img/cat.png" alt="">
            <img v-bind:class="{hide: superUser}" class="console__form-coffee" src="/pravki-quest/public/app/img/coffee.png" alt="">
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
                        commandName: '/scp',
                        commandDescription: '',
                        commandOutput: 'Отправляем файл на сервер...'
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
                if (this.superUser) {
                    document.getElementById('horror').play();
                } else {
                    document.getElementById('relax').play();
                }
                setTimeout(() => {
                    this.formIsHidden = true;
                }, 3500)
            },
            showForm: function () {
                this.formIsHidden = false;
            },
            consoleMethods: function () {
                /**
                 * Pass input's command to parent components
                 */
                this.consoleCommand = this.$refs.consoleInput.value.trim().toLowerCase();

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
                    case '/scp':
                        this.addMessage();
                        this.clearInput();
                        this.showForm();
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
