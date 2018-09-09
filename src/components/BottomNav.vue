<template>
	<mu-bottom-nav class="appbar" :value.sync="currentNav">
		<mu-bottom-nav-item value="home" title="home" icon=" " to="/home" exact-active-class="selected">
		</mu-bottom-nav-item>
		<mu-bottom-nav-item value="about" title="my" icon=" " to="/about" active-class="selected">
		</mu-bottom-nav-item>
	</mu-bottom-nav>
</template>

<script>
export default {
	props: ['bottomIndex'],
	name: 'BottomNav',
	data() {
		return {
			// bottomIndex: '0',
			currentNav: 'aa',
			vv: '02',
		};
	},
	created() {
		// this.currentNav =this.$route.path;
		// console.log(this.currentNav)
	},
	// methods: {
	// 	handleChange (val) {
	// 		this.bottomNav = val ;// 这里的val输出是导航栏的下标
	// 		// 使用任何一种存储状态的方法，vuex也好，我这里使用sessionStorage
	// 		sessionStorage.setItem('navItem', this.bottomNav); //存储状态
	// 		console.log(this.bottomNav);
	// 	}
	// },
	// // 在mounted时候取出存的状态赋值给bottomNav
	// mounted () {
	// 	this.bottomNav = sessionStorage.getItem('navItem')
	// }
};
</script>
<style lang="less">
.appbar {
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
}

a:nth-child(1).selected .mu-bottom-item-icon {
	background-image: url(../assets/home/nav_huandan.png);
	background-repeat: no-repeat;
	width: 21px;
	height: 21px;
	background-size: 100% 100%;
}
a:nth-child(1) .mu-bottom-item-icon {
	background-image: url(../assets/home/nav_home.png);
	background-repeat: no-repeat;
	width: 21px;
	height: 21px;
	background-size: 100% 100%;
}

//   a:nth-child(2) .mu-bottom-item-icon.selected{
//   background-image: url(../assets/home/nav_huandan.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
//   a:nth-child(2) .mu-bottom-item-icon{
//   background-image: url(../assets/home/nav_huandan.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
//   a:nth-child(3) .mu-bottom-item-icon.selected{
//   background-image: url(../assets/home/nav_circle1.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
//   a:nth-child(3) .mu-bottom-item-icon{
//   background-image: url(../assets/home/nav_circle.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
//   a:nth-child(4) .mu-bottom-item-icon.selected{
//   background-image: url(../assets/home/nav_school1.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }
//   a:nth-child(4) .mu-bottom-item-icon{
//   background-image: url(../assets/home/nav_school.png) ;
//   background-repeat:no-repeat;
//   width:21px;
//   height:21px;
//   background-size:100% 100%;
//   }

a:nth-child(2) .mu-bottom-item-icon.selected {
	background-image: url(../assets/home/nav_me1.png);
	background-repeat: no-repeat;
	width: 21px;
	height: 21px;
	background-size: 100% 100%;
}
a:nth-child(2) .mu-bottom-item-icon {
	background-image: url(../assets/home/nav_me.png);
	background-repeat: no-repeat;
	width: 21px;
	height: 21px;
	background-size: 100% 100%;
}
</style>
