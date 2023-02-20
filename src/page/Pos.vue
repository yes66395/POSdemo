<template>
	<div class="pos">
		<el-row>
			<el-col :span="9">
				<el-tabs>
					<el-tab-pane label="點餐">
						<el-table border style="width: 100%" :data="tableData" empty-text="沒有商品">
							<el-table-column prop="id" label="編號" width="60" />
							<el-table-column prop="name" label="商品名稱" />
							<el-table-column prop="count" label="數量" />
							<el-table-column prop="price" label="金額(單個)" />
							<el-table-column label="操作" width="120" fixed="right">
								<template v-slot="scope">
									<div class="btn-box">
										<!---https://element-plus.org/zh-CN/component/table.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A1%A8%E5%A4%B4-->
										<el-button type="primary" plain size="small" v-on:click="addOrderList(scope.row)">增加</el-button>
										<el-button type="danger" size="small" v-on:click="delSingleFoods(scope.row)">刪除</el-button>
									</div>
								</template>
							</el-table-column>
						</el-table>
						<div class="total-div">
							<small>數量:{{ totalCount }}</small> <small>金額:{{ totalPrice }}元</small>
						</div>
						<div class="function-button">
							<el-button type="danger" v-on:click="delAllfood">全部刪除</el-button>
							<el-button type="warning" v-on:click.stop="pedingOrder">送出單子</el-button>
						</div>
					</el-tab-pane>
					<el-tab-pane label="明細">
						<div class="newcase-container">
							<span>商品編號</span>
							<span>商品名稱</span>
							<span>數量</span>
							<span>金額</span>
						</div>
						<!-- <div v-if="ischeck" style="margin-top: 8px; color: #ccc; font-size: 20px">沒有商品</div> -->

						<div class="newcase-list-container" v-for="(val, index) in newCase" :key="index">
							<ul class="newcase-list">
								<li v-for="(food, num) in val" :key="num">
									<span>{{ food.id }}</span>
									<span>{{ food.name }}</span>
									<span>{{ food.count }}</span>
									<span>{{ food.price }}</span>
								</li>
							</ul>
							<div class="case-coculator">
								<span class="case-count">總數量:{{ totalSingleCount(index) }}</span>
								<span class="case-price">總金額:{{ totalSinglePrice(index) }}元</span>
							</div>
							<el-button type="danger" v-on:click="printCase(index, 'clear')">清除</el-button>
							<el-button type="success" v-on:click.stop="printCase(index)">結帳</el-button>
						</div>
					</el-tab-pane>
				</el-tabs>
			</el-col>
			<el-col :span="15">
				<div class="order-container">
					<div class="title">常用商品</div>
					<div class="order-list">
						<ul>
							<li v-for="(common, commonIndex) in commonfoods" v-on:click="addOrderList(common)" :key="commonIndex">
								<span>{{ common.name }}</span>
								<span class="o-price"> $ {{ common.price }}元</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="store-type">
					<el-tabs>
						<el-tab-pane label="漢堡">
							<div>
								<ul class="cookList">
									<li
										v-for="(hamburger, hamburgerIndex) in hamburgerfoods"
										v-on:click="addOrderList(hamburger)"
										:key="hamburgerIndex"
									>
										<span class="foodimg">
											<img :src="hamburger.img" alt="" />
										</span>
										<span class="store-name">{{ hamburger.name }}</span>
										<span class="store-price">${{ hamburger.price }}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="點心">
							<div>
								<ul class="cookList">
									<li v-for="(snacks, snackIndex) in snackfoods" v-on:click="addOrderList(snacks)" :key="snackIndex">
										<span class="foodimg">
											<img :src="snacks.img" alt="" />
										</span>
										<span class="store-name">{{ snacks.name }}</span>
										<span class="store-price">${{ snacks.price }}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="飲料">
							<div>
								<ul class="cookList">
									<li v-for="(drink, drinkIndex) in drinkfoods" v-on:click="addOrderList(drink)" :key="drinkIndex">
										<span class="foodimg">
											<img :src="drink.img" alt="" />
										</span>
										<span class="store-name">{{ drink.name }}</span>
										<span class="store-price">${{ drink.price }}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="套餐" empty-text="沒有單子">
							<div>
								<ul class="cookList">
									<li v-for="(combo, index) in combofoods" v-on:click="addOrderList(combo)">
										<span class="foodimg">
											<img :src="combo.img" alt="" />
										</span>
										<span class="store-name">{{ combo.name }}</span>
										<span class="store-price">${{ combo.price }}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import instance from '../data/data.js';
export default {
	data() {
		return {
			tableData: [],
			commonfoods: [],
			hamburgerfoods: [],
			snackfoods: [],
			combofoods: [],
			drinkfoods: [],
			newCase: [],
			ischeck: true,
		};
	},
	mounted() {
		//簡單入門使用
		// axios
		// 	.get('https://yes66395.github.io/POSdemo/commonfood.json')
		// 	.then((response) => {
		// 		//console.log(response);
		// 		this.commonfoods = response.data.data;
		// 	})
		// 	.catch((error) => Promise.reject(error));
		// instance.get('/commonfood.json').then((res) => {
		// 	this.commonfoods = res.data;
		// });

		//二次封裝使用;
		instance.get('/commonfood.json').then((response) => {
			this.commonfoods = response.data;
		});
		instance.get('/sortfood.json').then((response) => {
			const resultData = response;
			this.hamburgerfoods = resultData['hamburger'];
			this.snackfoods = resultData['snack'];
			this.combofoods = resultData['combo'];
			this.drinkfoods = resultData['drink'];
		});
	},
	methods: {
		addOrderList(food) {
			//商品是否已經存在於下列訂單列表中
			let isHave = false;
			const findData = this.tableData.findIndex((item,index)=> item.id === food.id)
			if(findData > -1) return true;
			//for (let i = 0; i < this.tableData.length; i++) {
				//if (this.tableData[i].id === food.id) {
					//isHave = true;
					//break;
				//}
			//}
			//根據判斷的值編寫此邏輯
			// if (isHave) {
			// 	//改變列表中商品數量
			// 	const foodArr = this.tableData.filter((store, index) => {
			// 		return Number(store.id) === Number(food.id);
			// 	});
			// 	foodArr[0].count++;
			// } else {
			// 	const newGoods = {
			// 		id: food.id,
			// 		name: food.name,
			// 		price: food.price,
			// 		count: 1,
			// 	};
			// 	this.tableData.push(newGoods);
			// }
			const newGoods = {
				id: food.id,
				name: food.name,
				price: food.price,
				count: 1,
			};
			switch (isHave) {
				case true:
					const foodArr = this.tableData.filter((store) => Number(store.id) === Number(food.id));
					foodArr[0].count++;
					break;
				default:
					return this.tableData.push(newGoods);
			}
		},
		//刪除單個商品
		delSingleFoods(food) {
			this.tableData = this.tableData.filter((order) => order.id !== food.id);
			return this.tableData;
		},
		delAllfood() {
			let isCheckout = false;
			if (this.tableData.length === 0) {
				alert('商品列表一個商品都沒有!');
				isCheckout = false;
			} else {
				isCheckout = true;
				this.tableData = [];
				return alert('確定要全部刪除嗎?');
			}
		},
		//明細按鈕
		pedingOrder() {
			switch (this.tableData.length) {
				case 0:
					return window.alert('一個商品都沒有');
				default:
					this.newCase.push(
						this.tableData.sort((a, b) => {
							return a.id - b.id;
						}),
					);
					this.tableData = [];
					break;
			}
			//限制單子的數量
			// if (this.newCase.length > 5) {
			// 	window.alert('單子太多了，請考慮刪除幾個單子');
			// 	return this.newCase.pop(1); //刪除本次單子，不再讓它新增
			// }
		},
		printCase(index, state = 'Case') {
			const singleCase = this.newCase.splice(index, 1);
			setTimeout(() => {
				switch (state) {
					case 'clear':
						return false;
					default:
						window.alert('結帳成功!,歡迎下次光臨');
						return true;
				}
			}, 200);
			return singleCase;
		},
		totalSingleCount(i) {
			return this.newCase[i].reduce((val, food) => {
				return val + food.count;
			}, 0);
		},
		totalSinglePrice(i) {
			return this.newCase[i].reduce((val, food) => {
				return val + food.count * food.price;
			}, 0);
		},
	},

	computed: {
		totalCount() {
			return this.tableData.reduce((pre, food) => {
				return pre + food.count;
			}, 0);
		},
		totalPrice() {
			return this.tableData.reduce((pre, food) => {
				return pre + food.count * food.price;
			}, 0);
		},
	},
};
</script>

<style scoped lang="css">
@import '../style/pos.css';
</style>
