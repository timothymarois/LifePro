<template>
    <div class="page-container">
        <Base />
    </div>
</template>

<style lang="scss" scoped>
    @import '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons';
    // @import '../../css/base.css';

    .md-primary {
        background-color: #2196f3!important;
        color: #fff !important;
    }

    .md-toolbar, .md-toolbar-row {
        min-height: 56px;
        height: 56px;
    }

    .md-title {
        font-size: 1.7rem;
        font-family: 'Righteous', cursive;
        font-weight:500;
    }

    .md-icon.md-icon-font {
        font-size: 36px !important;
        width: 36px;
        min-width: 36px;
        height: 36px;
    }
</style>

<script>

import Base from "../components/ui/Base";

export default {
    name: "mainContent",
    components: {
        Base
    },
    data: () => ({
        menuVisible: false
    })
} 

</script>