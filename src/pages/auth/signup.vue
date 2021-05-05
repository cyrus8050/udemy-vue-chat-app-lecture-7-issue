<template>
<f7-page name="signup">
    <f7-navbar title="Sign up" back-link="Back"></f7-navbar>
    <div class="wrapper">
        <img class="image--cover" :src="image_url" alt="">
    </div>
    
    <f7-list no-hairlines-md>
        <f7-list-input :value="name" @input="name=$event.target.value" label="Name" type="text" placeholder="Your name" clear-button>
            
        </f7-list-input>
        <f7-list-input :value="email" @input="email=$event.target.value" label="E-mail" type="email" placeholder="Your e-mail" clear-button>
            
        </f7-list-input>

        <f7-list-input :value="password" @input="password=$event.target.value" label="Password" type="password" placeholder="Your password" clear-button>
            
        </f7-list-input>

    </f7-list>
    <f7-block>
    <f7-button outline>Sign up</f7-button>
    <br>
    <div style="text-align: center;">
    <f7-link href="/signin/">Already have an account? Sign in</f7-link>
    </div>


    </f7-block>
</f7-page>
</template>
<script>
export default {
    data(){
        return {
            name:null,
            email:null,
            password:null,
            image_url:"https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png"
        }
    }
}
</script>
<style scoped>
.wrapper{
    text-align: center;
}
.image--cover{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px;
    object-fit: cover;
    object-position: center;
}

</style>
