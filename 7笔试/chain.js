(function(){
  function _$(eles){
    this.elements=[];
    for(let i=0;i<eles.length;i++){
      let element=eles[i];
      if(typeof element==='string'){
        element=document.getElementById(element);
      }
      this.elements.push(element);
      console.log(this.elements);
    }
  }

  _$.prototype={
    each: function(fn){
      for(let i= 0;i<this.elements.length;i++){
        fn.call(this,this.elements[i]);
      }
      return this; //在每个方法的最后return this;
    },
    setStyle:function(prop,val){
      this.each(function(el){
        el.style[prop]=val;
      })
    },
    show:function(){
       var that=this;
       this.each(function(ele){
        that.setStyle('display','block');
       });
      return this;
    },
    hide:function(){
       var that=this;
       this.each(function(ele){
        that.setStyle('display','none');
       });
      return this;
    }
  }
  window.$=function(){
    return new _$(arguments);
  }
})();

