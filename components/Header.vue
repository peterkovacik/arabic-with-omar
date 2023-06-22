<template>
    <div>
        <header class="background-header">
            <nav class="navbar navbar-expand-md navbar-light py-4 px-2">
                <div class="container-fluid">
                    <NuxtLink class="navbar-brand p-2 me-4" to="/">
                        <nuxt-img src="/images/classical-arabic-logo.png" alt="Classical Arabic logo" width="171px" height="100px" class="" /> 
                        <!--Arabic Instructor-->
                    </NuxtLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav px-2">
                            <NuxtLink class="nav-link p-2 me-2" to="/">Home</NuxtLink>
                            <NuxtLink class="nav-link p-2 me-2" to="/about">About</NuxtLink> 
                            <!--<NuxtLink class="nav-link p-2 me-2" to="/classes">Classes</NuxtLink> -->
                            <NuxtLink class="nav-link p-2 me-2" to="/contact">Contact</NuxtLink> 
                            <div class="d-sm-block d-md-none">
                                <!--<button class="btn btn-outline-success px-2" type="submit">Student Portal</button>-->
                                <NuxtLink class="btn btn-outline-success px-3" to="https://arabicwithomar.teachable.com/" target="_blank">Student Portal</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <NuxtLink class="btn btn-outline-success px-3 d-none d-md-block" to="https://arabicwithomar.teachable.com/" target="_blank">Student Portal</NuxtLink>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
   
    header {
        background-image: url('/images/islamic-white-banner.png');
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom: #eee 1px solid;   
    }

</style>