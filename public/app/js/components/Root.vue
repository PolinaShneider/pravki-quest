<template>
    <div class="container">
        <cat :downloadButtonIsVisible="downloadButtonIsVisible"></cat>
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
                downloadButtonIsVisible: '',
                consoleIsHidden: ''
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
            this.$on('raiseUp', (value) => {
                this.currentCommand = value;
            });

            this.$on('showDownloadButton', (value) => {
                this.downloadButtonIsVisible = value;
            });

            this.$on('hideConsole', (value) => {
                this.consoleIsHidden = value;
            });
        }
    }
</script>