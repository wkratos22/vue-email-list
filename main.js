var app = new Vue(
    {
        el : `#root`,
        data: {
            
        },
        created(){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(function(response) {
                console.log(response);
            });
        }
    }
)