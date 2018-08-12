<template>
    <div>
        <cat></cat>
        <console :currentCommand="currentCommand"></console>
    </div>
</template>
<script>
    import VueCat from './VueCat.vue';
    import Console from './Console.vue';

    export default {
        /**
         * Declare App child components
         */
        components: {
            'cat' : VueCat,
            'console' : Console
        },
        data() {
            /**
             * Shared command value variable
             */
            return {
                currentCommand: '',
            };

        },
        methods : {},
        /**
         * Assign passed commands value to the global scope
         */
        created: function () {
            /**
             * Passed command from VueCat's input
             */
            this.$on('userInput', (passedCommand) => {
                this.currentCommand = passedCommand;
            });

            /**
             * Passed command from Console's input
             */
            this.$on('consoleMethods', (consoleCommand) => {
                this.currentCommand = consoleCommand;
            })
        }
    }
</script>