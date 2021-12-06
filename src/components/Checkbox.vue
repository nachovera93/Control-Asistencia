<template>
    <div class="container">

        <form @submit.prevent="handleSubmit">
            <div class="form-group form-check">
                <input type="checkbox" v-model="user.accept" id="accept" class="form-check-input">
                <label class="form-check-label" for="accept">Accept terms and conditions</label>
            </div>
            <div class="form-group">
              {{user.accept}}
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
        
    </div>
</template>

<script>

    export default {
        data() {
            return {
                user: {
                    accept: false
                }
            };
        },
        methods: {
         handleSubmit() { 

        }
         //this.PutHorario(this.clase);
           // handleSubmit() {
           //     alert(JSON.stringify(this.user));
           // }
        }
    };
</script>
