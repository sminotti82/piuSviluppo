const app = new Vue({
    el:'#root',
    data:{
       newTodo:'',
       lista:['lavare la macchina','lavare il cane','fare la spesa'],
       fatti:[],
       nonFatti:[],
       sospesi:[]
    },
    methods:{
      remove:function(index){
            !this.nonFatti.includes(this.lista[index])?this.nonFatti.push(this.lista[index]):''
            this.lista.splice(index,1)
      },
      aggiungi:function(){
            this.lista.push(this.newTodo);
            
            this.newTodo='';
            
      },
      add:function(index){
         if(!this.fatti.includes(this.lista[index])){
            this.fatti.push(this.lista[index])
            this.lista.splice(index,1)
         }
      },

      sospeso:function(index){
         if(!this.sospesi.includes(this.lista[index])){
            this.sospesi.push(this.lista[index])
            this.lista.splice(index,1)
         }
      },
    
       cancella:function(index){
        this.lista.splice(index);
           this.nonFatti.splice(index);
              this.fatti.splice(index);
              this.sospesi.splice(index);
       }
    },
    mounted(){
  
    }
})