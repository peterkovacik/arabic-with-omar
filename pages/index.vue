<template>
    <div class="green-mountain-banner d-flex justify-content-center align-items-center">
        <h1 class="text-center text-white py-4 ">Arabic with Omar</h1>
    </div>
    
    <div >
        <!-- <img src="/images/classical-arabic-logo.jpeg" alt="" width="350px" height="350px" class=""> -->
        <h1 class="text-center align-items-center">Arabic with Omar</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .green-mountain-banner {
        background-image: url('/images/green-mountain-unsplash.jpg');
        height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-bottom: #eee 1px solid;   
    }

    @media only screen and (min-width: 720px) {
        .green-mountain-banner {
            height: 650px;
        }
    }
   
</style>