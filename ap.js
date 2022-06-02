const { createApp } = Vue

  createApp({
    data() {
      return {
          showbooks: true,
          
        books: [
            { title:'harry potter', author:'JK rowling',img:'assets/1.jpeg'},
            { title:'harry potter 2', author:'JK rowling',img:'assets/2.jpeg'},
            ]
      }
    },
    methods: {
        togglebutton(){
            this.showbooks = !this.showbooks
        },
        handleevent(e,data){
            console.log(e,e.type)
              if(data) {
                  console.log(data)
              }
        },
        handlemousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }
        }
  }).mount('#app')