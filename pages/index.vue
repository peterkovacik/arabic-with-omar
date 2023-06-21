<template>
    <div class="green-mountain-banner d-flex justify-content-center align-items-center">
        <h1 class="display-1 title text-center text-white py-4 ">Classical Arabic with Omar</h1>
    </div>

    <div class="content-width px-4 py-5">
        <h1 class="title text-center pb-3">Classical Arabic Program</h1>
        <p class="">Learn Classical Arabic in a step by step methodology designed to help you understand the meanings of the Qur'an and access traditional Islamic texts in the original Arabic.</p>
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