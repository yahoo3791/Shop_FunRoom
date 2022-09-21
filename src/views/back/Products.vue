<template>
<div class="container-fulid">
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">
          {{item.origin_price}}
        </td>
        <td class="text-right">
          {{item.price}}
        </td>
        <td>
          <span v-if="item.is_enabled">啟用</span>
          <span v-else style="opacity:0.5">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-sm" style="border:1px solid blue; color:blue">編輯</button>
            <button class="btn btn-sm" style="border:1px solid red; color:red;">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
    }
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.axios.get(api).then((res) => {
        console.log(res.data);
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>