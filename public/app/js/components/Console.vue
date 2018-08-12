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
        height: 340px;
        overflow-y: scroll;
        color: #fff;
        font: 12px/16px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;

        @media (max-width: 450px) {
            width: 100%;
            box-sizing: border-box;
            padding: 15px;
        }

        &__input {
            background-color: transparent;
            border: 0px solid transparent;
            outline: none;
            color: #fff;
            font-size: 12px;
            line-height: 20px;
            padding: 0;
            margin: 0;

            + label {
                float: left;
                margin-right: 7px;

                &::before {
                    line-height: 20px;
                    vertical-align: middle;
                    content: '~ root#';
                    display: inline-block;
                    color: #fff;
                }
            }
        }

        &__framed {

            &-accept {
                padding-top: 16px;
                display: inline-block;

                &::after {
                    content: '';
                    display: block;
                    height: 1px;
                    width: 0;
                    background: #fff;
                    transition: width .8s;
                }

                &:hover {
                    cursor: pointer;

                    &::after {
                        width: 100%;
                    }
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
    <div ref="consoleWrapper" class="console" v-bind:class="{hide : consoleIsHidden}">
        <p>
            Hi, I'm your personal Vue Cat. And I offer you to solve the quest.
            Below is a list of commands. Read them very carefully and start the task.
            I'm going to give you a few hints.
        </p>
        <p v-bind:class="{hide : commandsAreHidden}" class="console__framed">
            <span class="console__framed-inner">
                <span>
                    <span v-for="command in commandsList">
                        {{ command.commandName }} - {{ command.commandDescription }}<br/>
                    </span>

                    <span v-on:click="hideCommands" class="console__framed-accept">It's clear</span>
                </span>
            </span>
        </p>
        <div ref="consoleBody"></div>
        <input v-on:keyup.enter="consoleMethods" class="console__input" type="text" ref="consoleInput">
        <label></label>
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
                        commandName: '/exit',
                        commandDescription: 'quits the console',
                        commandOutput: ''
                    },
                    {
                        commandName: '/help',
                        commandDescription: 'shows list of possible commands',
                        commandOutput: 'I am always glad to help you. Have a nice day, guy!'
                    },
                    {
                        commandName: '/clear',
                        commandDescription: 'clears console output',
                        commandOutput: ''
                    },
                    {
                        commandName: '/hint',
                        commandDescription: 'gives you a hint',
                        commandOutput: 'This option is in the development. Stay in touch ❤️'
                    }
                ],
                commandsAreHidden: false,
                consoleIsHidden: true,
                consoleCommand: ''
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
            consoleMethods: function () {
                /**
                 * Pass input's command to parent components
                 */
                this.consoleCommand = this.$refs.consoleInput.value;
                this.$parent.$emit('consoleMethods', this.consoleCommand);

                /**
                 * Perform console actions depending on an entered command
                 */
                switch (this.consoleCommand) {
                    case '/help':
                        this.addMessage();
                        this.clearInput();
                        this.showCommands();
                        break;
                    case '/exit':
                        this.clearInput();
                        this.clearConsole();
                        this.hideConsole();
                        break;
                    case '/clear':
                        this.clearInput();
                        this.clearConsole();
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
                    consoleWrapper = this.$refs.consoleWrapper;
                /**
                 * Insert entered command name
                 */
                let command = document.createElement('div');
                command.textContent = this.consoleCommand;
                command.classList.add('console__message');
                consoleBody.appendChild(command);

                /**
                 * Insert entered command result
                 */
                let commandOutput = document.createElement('div');

                if (this.getCommandOutput(this.consoleCommand)) {
                    commandOutput.textContent = this.getCommandOutput(this.consoleCommand);
                } else {
                    commandOutput.textContent = 'I do not know this command, sorry 😿';
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
                            return "Commands are shown above, press 'It is clear' if you are okey with it 🤗";
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
                if (this.currentCommand === '/start') {
                    this.consoleIsHidden = false;
                }
            }
        }
    }
</script>
