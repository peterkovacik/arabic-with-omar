<template>
    <div class="page-content px-5">
        <div class="classes">
            
            
            <h1 class="text-center mt-5">Check out our current online courses on the <NuxtLink class="text-success text-decoration-none" to="https://arabicinstructor.teachable.com/">Student Portal</NuxtLink>!</h1>
 
            <h3 class="text-center pt-5 pb-3">Previous Classes</h3>

            <figure class="mt-2 mb-5">
                <img src="/images/why-islam-is-true.png" alt="Classical Arabic logo"  class="center-image why-islam-image"> 
            </figure>
            <figure class="my-5">
                <img src="/images/foundations-classical-arabic.png" alt="Classical Arabic logo"  class="center-image fvis-arabic-image"> 
            </figure>
            <figure class="my-5">
                <img src="/images/keys-classical-arabic.png" alt="Classical Arabic logo"  class="center-image fvis-arabic-image"> 
            </figure>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    /*.page-content {
        max-width: 640px;
        display: block;
        margin: 0 auto;
    }*/

    .center-image {
        display: block;
        margin: 0 auto;
    }

    .why-islam-image {
        height: 250px;
        width: 250px;
    }

    .fvis-arabic-image {
        height: 324px;
        width: 250px;
    }

    @media only screen and (min-width: 720px) {
        .why-islam-image {
            height: 350px;
            width: 350px;
        }

        .fvis-arabic-image {
            height: 453px;
            width: 350px;
        }
    }
</style>