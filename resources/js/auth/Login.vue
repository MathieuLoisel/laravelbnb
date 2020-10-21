<template>
    <div class="w-50 m-auto">
        <div class="card card-body">
            <form action="">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your e-mail"
                        class="form-control" 
                        v-model="email"
                    >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Enter your password"
                        class="form-control" 
                        v-model="password"
                    >
                </div>
                <button class="btn btn-primary btn-lg btn-block">Log-in</button>
                <hr>
                <div>
                    No account yet ?
                    <router-link :to="{name: 'home'}" class="font-weight-bold">Register</router-link>
                </div>
                <div>
                    Forgotten password ?
                    <router-link :to="{name: 'home'}" class="font-weight-bold">Reset password</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:null,
            password:null,
        };
    }
}
</script>