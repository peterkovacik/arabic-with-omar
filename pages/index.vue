<template>
    <div class="green-mountain-banner d-flex justify-content-center align-items-center">
        <h1 class="display-1 title text-center text-white py-4 ">Classical Arabic with Omar</h1>
    </div>

    <div class="content-width px-4 py-5">
        <h1 class="title text-center pb-3">Classical Arabic Program</h1>
        <p class="pb-3">Learn Classical Arabic in a step by step methodology designed to help you understand the meanings of the Qur'an and access traditional Islamic texts in the original Arabic.</p>
        <p class="">Step 1: Learn to Read Classical Arabic</p>
        <p class="">Step 2: Foundations of Classical Arabic</p>
        <p class="">Step 3: Keys to Classical Arabic</p>
        <p class="">Step 4: Navigating Classical Arabic</p>
        <p class="py-3">See the current classes in the <NuxtLink class="text-success" to="https://arabicwithomar.teachable.com/" target="_blank">student portal</NuxtLink>.</p>
    </div>
   
    <Mailchimp />
    
</template>

<script >
    export default {
        
    }
   
</script>

<style scoped>
    .green-mountain-banner {
        background-image: url('/images/green-mountain-unsplash.avif');
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