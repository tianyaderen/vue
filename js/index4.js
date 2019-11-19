let vue = new Vue({
    el:"#box",
    data:{},
    data:{
        dataList:[]
    },
    methods:{
        axiousGet:function(){
            /*let url = "";*/
            let url = "http://www.hefeixyh.com/informations/getAllInFormations";
            axious.get(url).then(res=>{
                console.log(res);
                console.log(res.data);
                this.dataList = res.data;
            }).catch(err=>{
                console.log(err);
            }).then(end=>{

            });
        },
        axiousPost:function(){
            let url = "http://www.hefeixyh.com/informations/getAllInFormations";
            axious.post(url).then(res=>{
                console.log(res);
                this.dataList = res.data;
            }).catch(err=>{
                console.log(err);
            }).then(end=>{

            });
        }
    }
});