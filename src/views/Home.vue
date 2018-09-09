<template>
	<mu-paper :z-depth="1" class="list-wrap">
		<mu-appbar color="teal">
			<mu-button icon slot="left">
				<mu-icon value="menu"></mu-icon>
			</mu-button>
			LoadMore
			<mu-button icon slot="right" @click="refresh()">
				<mu-icon value="refresh"></mu-icon>
			</mu-button>
		</mu-appbar>
		<mu-container ref="container" class="list-content">
			<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" :loaded-all="loadedAll" :loadind-text="loadingText">
				<mu-list>
					<template v-for="m in reqList">
						<mu-list-item :key="m.id">
							<mu-list-item-title>{{m.phone}} Item {{m.id}}</mu-list-item-title>
						</mu-list-item>
						<mu-divider :key="'d'+m.id" />
					</template>
				</mu-list>
			</mu-load-more>
			<div v-if="loadedAll" class="mu-infinite-scroll"><span class="mu-infinite-scroll-text" style="">没有更多了~</span></div>
		</mu-container>
		<div :style="{height: 56+'px'}" />
	</mu-paper>
</template>

<script>
import { fetchPost } from '@/components/Fetch';
import Cookies from 'vue-cookies';

export default {
	name: 'home',
	components: {},
	data() {
		return {
			page: 0,
			pageSize: 12,
			refreshing: false,
			loading: false,
			loadingText: "正在加载...",
			loadedAll: false,
			reqList: [],
		};
	},
	methods: {
		getData(page) {
			const data = {};
			data.Token = Cookies.get('token');
			data.pageNo = page;
			this.page = page;
			data.pageSize = this.pageSize;
			this.loading = true;
			this.refreshing = true;
			fetchPost('api/tk/demand/queryDemandByMother', data)
				.then((content) => {
					this.loading = false;
					this.refreshing = false;
					if(this.page+this.pageSize >= content.total){
						this.loadedAll = true;
						this.loadingText = "没有更多数据";
						// this.loading = false;
					}
					if(page){
						this.reqList = [...this.reqList, ...content.list];
					}else{
						this.reqList =content.list;
					}
				}).catch(e => {
					this.loading = false;
					this.refreshing = false;
				});
		},
		refresh() {
			// this.refreshing = true;
			// this.$refs.container.scrollTop = 0;
			this.getData(0);
		},
		load() {
			this.getData(this.page+this.pageSize);
		},
	},
	created() {
		this.getData(0);
	},
};
</script>
<style lang="less">
.list-wrap {
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.mu-appbar {
		width: 100%;
	}
}
.list-content {
	flex: 1;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
</style>
