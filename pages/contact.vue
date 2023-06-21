<template>
    <div>
        <h1 class="text-center title display-3 pt-5 pb-4">Let's Connect</h1>

        <div class="leaves mt-2 mb-5"></div>

        <!--        <figure class="">
            <img src="/images/leaves-three-sisters.jpeg" alt="image of tree"  class="center-image leaves-image"> 
        </figure>
        -->

        
        <form action="https://formsubmit.co/871b77a3771c1f5953f344193a030234" method="POST" class="contact-form">
            <!-- Name input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="name">Name</label>
                <input type="text" id="name" name="name" class="form-control" required/>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="email">Email address</label>
                <input type="email" id="email" name="email" class="form-control" required/>
                
            </div>

            <!-- Subject -->
            <!-- <input type="hidden" name="_subject" value="submission from Arabic Instructor"> -->
            <div class="form-outline mb-4">
                <label class="form-label" for="subject">Subject</label>
                <input type="text" id="subject" name="_subject" class="form-control" required/>
                
            </div>
            <!-- Message input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="message">Message</label>
                <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
            </div>

            <!-- Checkbox 
            <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label class="form-check-label" for="form4Example4">
                Send me a copy of this message
                </label>
            </div> -->

            <!-- Submit button -->
            <button type="submit" class="btn btn-success btn-block px-4 mb-4">Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .contact-form {
        width: 350px;
        height: 467px;
        display: block;
        margin: 0 auto;
    }

    .leaves {
        background-image: url('/images/leaves-three-sisters.jpeg');
        height: 300px;
        width: 350px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: block;
        margin: 0 auto;
        border-radius: 25px; /* rounded corners */
    }

   
    @media only screen and (min-width: 720px) {
        .contact-form {
            width: 450px;
            height: 600px;
        }
        .leaves {
            width: 450px;
        }
    }
</style>