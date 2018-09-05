<template>
	<!-- <mu-container> -->
		<mu-bottom-nav class="appbar" >
			<mu-bottom-nav-item title="home" icon=" " v-bind:iconClass="{selected:this.bottomIndex=='home'}" :titleClass="{text_selected:this.bottomIndex=='home'}" to="/about"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="jaundice" icon=" " v-bind:iconClass="{selected:this.bottomIndex=='jaundice'}" :titleClass="{text_selected:this.bottomIndex=='jaundice'}"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="BBS" icon=" " v-bind:iconClass="{selected:this.bottomIndex=='BBS'}" :titleClass="{text_selected:this.bottomIndex=='BBS'}" ></mu-bottom-nav-item>
			<mu-bottom-nav-item title="Learning" icon=" " v-bind:iconClass="{selected:this.bottomIndex=='Learning'}" :titleClass="{text_selected:this.bottomIndex=='Learning'}" ></mu-bottom-nav-item>
			<mu-bottom-nav-item title="my" icon=" " v-bind:iconClass="{selected:this.bottomIndex=='my'}" :titleClass="{text_selected:this.bottomIndex=='my'}" ></mu-bottom-nav-item>
		</mu-bottom-nav>
	<!-- </mu-container> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	props:['bottomIndex'],
	name: 'home',
	data () {
		return {
			bottomValue:this.bottomIndex,
		};
  }
};
</script>
<style lang="less">
.appbar {
  position: absolute;
//   width: 100%;
  bottom: 0;
  left: 0;
}

a:nth-child(1) .mu-bottom-item-icon.selected{
  background-image: url(../assets/home/nav_home1.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  a:nth-child(1) .mu-bottom-item-icon{
  background-image: url(../assets/home/nav_home.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
//   a:nth-child(2) .mu-bottom-item-icon.selected{
//   background-image: url(../assets/home/nav_huandan1.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
//   a:nth-child(2) .mu-bottom-item-icon{
//   background-image: url(../assets/home/nav_huandan1.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
  a:nth-child(3) .mu-bottom-item-icon.selected{
  background-image: url(../assets/home/nav_circle1.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  a:nth-child(3) .mu-bottom-item-icon{
  background-image: url(../assets/home/nav_circle.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  a:nth-child(4) .mu-bottom-item-icon.selected{
  background-image: url(../assets/home/nav_school1.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  a:nth-child(4) .mu-bottom-item-icon{
  background-image: url(../assets/home/nav_school.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  a:nth-child(5) .mu-bottom-item-icon.selected{
  background-image: url(../assets/home/nav_me1.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  a:nth-child(5) .mu-bottom-item-icon{
  background-image: url(../assets/home/nav_me.png) ;
  background-repeat:no-repeat;
  width:21px;
  height:21px;
  background-size:100% 100%;
  }
  .mu-bottom-nav-shift {
    width:100%;
    FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#808080,
    endColorStr=#808080); /*IE*/
    background:-moz-linear-gradient(left,#808080, #808080);/*火狐*/
    background:-webkit-gradient(linear, 0% 0%, 100% 0%,from(#808080), to(#808080));/*谷歌*/
  }
</style>