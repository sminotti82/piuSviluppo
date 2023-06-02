const app = new Vue({
    el:'#app',
    data:{
        lista:[],
        // colori:['orange','purple','dodgerblue','gold','green','pink','FFE79B','40128B','FF0060','FC4F00'],
        newTask:'',
        fatti:[],
        nonFatti:[],
    },
    methods:{
        //   scelta:function(){
        //     let sceltaColore = Math.floor(Math.random()*this.lista.length)
        //     return this.colori[sceltaColore]
        //   },
          aggiungi:function() {
                 this.lista.push(this.newTask)
                 this.newTask=""  
          },
          fatta:function(index){
              if(!this.fatti.includes(this.lista[index])){
                this.fatti.push(this.lista[index])
                this.lista.splice(index, 1)
              }
           

          },
          nonfatti:function(index){
            if(!this.nonFatti.includes(this.lista[index])){
                this.nonFatti.push(this.lista[index])
                this.lista.splice(index, 1)
              }
          },

          elimina:function(index){
              this.lista.splice(index)  
                this.nonfatti.splice(index)
                   this.fatti.splice(index)
          }
    },
    mounted(){
    
      
          
        
    }
})