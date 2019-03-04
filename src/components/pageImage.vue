<template>
    <section class="Frontpage--brand">
        <img src="@/assets/pageImage.png" >
        <div class="centered">
            <h1 id="msg">{{ heading }}</h1>
            <h2>{{ subHeading }}</h2>
        </div>
    </section>
</template>
<style lang="scss">
    @import '../style/styles';
</style>
<script>
export default {
    name: 'heading',
    data: function() {
        return {
            heading: 'Insert some text here',
            subHeading: ''

        }
    }
}
</script>



