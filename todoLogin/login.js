const app = new Vue({
    el:'#app',
    data:{
        password:'',
        username:''
    },

    methods:{
        login:function(){
            axios.post('http://localhost/piusviluppo/todoLogin')
                 .then(response=>{
                    if(this.password==='castello'&&this.username==='sebaminotti'){

                        response.status=200
                    } else if(this.password!=='castello'&&this.username!=='sebaminotti'){
                        response.status=401
                    };

                    if(response.status===200){

                       return  window.open('home.html','_blank'),this.password="" ,this.username=''
                    } else if(response.status===401){

                        return window.open('not.html','_blank'),this.password="" ,this.username=''
                    }
                 })
        }
    }
})